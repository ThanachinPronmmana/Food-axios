    import React, { useState, useEffect } from "react";
    import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
    import { MaterialIcons } from "@expo/vector-icons";
    import AsyncStorage from "@react-native-async-storage/async-storage";

    const RecipeDetailScreen = ({ route }) => {
        const { recipe } = route.params || {};


        const [isFavorite, setIsFavorite] = useState(false);


        const toggleFavorite = async () => {
            try {
                const storedFavorite = await AsyncStorage.getItem("favorites")
                let favorites = storedFavorite ? JSON.parse(storedFavorite) : []
                if (isFavorite) {
                    favorites = favorites.filter((fav) => fav.idMeal != recipe.idMeal) //เลือกเอามาshow
                } else {
                    favorites.push(recipe)
                }
                await AsyncStorage.setItem("favorites", JSON.stringify(favorites))
                setIsFavorite(!isFavorite)
            } catch (err) {
                console.log("Error Saving Favorite")
            }

        };

        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            if (recipe[`strIngredient${i}`]) {
                ingredients.push(
                    `${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`] || ""}`
                );
            }
        }
        useEffect(() => {
            checkIsFavorite()
        }, [])
        const checkIsFavorite = async() => {
            try {
                const storedFavorite = await AsyncStorage.getItem("favorites")
                let favorites = storedFavorite ? JSON.parse(storedFavorite) : []
                let exists = favorites.some((fav)=> fav.idMeal === recipe.idMeal)
                setIsFavorite(exists)
            } catch (err) {
                console.log("Err Loading Favporite", err)
            }
        }

        return (
            <ScrollView style={styles.container}>

                <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
                    <MaterialIcons
                        name={isFavorite ? "favorite" : "favorite-border"}
                        size={30}
                        color={isFavorite ? "red" : "gray"}
                    />
                </TouchableOpacity>


                <Image style={styles.image} source={{ uri: recipe.strMealThumb }} />


                <Text style={styles.title}>{recipe.strMeal}</Text>
                <Text style={styles.subtitle}>Category: {recipe.strCategory}</Text>


                <Text style={styles.sectionTitle}>Ingredients</Text>
                {ingredients.map((ingredient, index) => (
                    <Text key={index} style={styles.ingredient}>{ingredient}</Text>
                ))}


                <Text style={styles.sectionTitle}>Instructions</Text>
                <Text style={styles.instructions}>{recipe.strInstructions}</Text>
            </ScrollView>
        );
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
            backgroundColor: "#fff",
        },
        favoriteButton: {
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 10, // ทำให้ปุ่มอยู่ด้านบน
        },
        image: {
            width: "100%",
            height: 250,
            borderRadius: 12,
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 10,
            color: "#333",
        },
        subtitle: {
            fontSize: 16,
            color: "#666",
            marginBottom: 10,
        },
        sectionTitle: {
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 15,
            color: "#444",
        },
        ingredient: {
            fontSize: 16,
            color: "#555",
            marginLeft: 10,
        },
        instructions: {
            fontSize: 16,
            color: "#666",
            marginTop: 10,
        },
    });

    export default RecipeDetailScreen;
