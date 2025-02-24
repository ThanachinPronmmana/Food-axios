import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const RecipeCard = ({ recipe, onPress, onToggleFavorite, favorites }) => {
    const isFavorite = favorites.some((fav)=>fav.idMeal === recipe.idMeal)

    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{recipe.strMeal}</Text>
                <TouchableOpacity onPress={onToggleFavorite}>
                    <MaterialIcons 
                        name={isFavorite ? "favorite" : "favorite-border"} 
                        size={24} 
                        color={isFavorite ? "red" : "gray"} 
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
        overflow: "hidden",
        elevation: 3,
        alignItems: "center",
        padding: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        flexShrink: 1,
    },
});

export default RecipeCard;
