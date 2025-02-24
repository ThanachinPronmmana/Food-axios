import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";
import axios from "axios";
import SearchBox from "./compotents/SearchBox";
import RecipeCard from "./compotents/RecipeCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchRecipes();
        loadFavorites();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(
                "https://www.themealdb.com/api/json/v1/1/search.php?s="
            );
            setRecipes(response.data.meals || []);
        } catch (error) {
            console.error("Cannot fetch data!!", error);
        }
    };

    const loadFavorites = async () => {
        try {
            const storedFavorites = await AsyncStorage.getItem("favorites");
            if (storedFavorites) {
                setFavorites(JSON.parse(storedFavorites));
            }
        } catch (error) {
            console.error("Error loading favorites", error);
        }
    };

    const toggleFavorite = async (recipe) => {
        const updatedFavorites = favorites.some((fav) => fav.idMeal === recipe.idMeal)
            ? favorites.filter((fav) => fav.idMeal !== recipe.idMeal)
            : [...favorites, recipe];
        setFavorites(updatedFavorites);
        await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <View style={styles.container}>
            <SearchBox
                placeholder="Search recipes..."
                value={search}
                onChangeText={(value) => setSearch(value)}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Fav")}> 
                <Text style={styles.Textfav}>Favorites</Text>
            </TouchableOpacity>
            <FlatList
                data={recipes.filter((recipe) =>
                    recipe.strMeal.toLowerCase().includes(search.toLowerCase())
                )}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item }) => (
                    <RecipeCard
                        recipe={item}
                        onPress={() => navigation.navigate("Recip", { recipe: item })}
                        favorites={favorites}
                        onToggleFavorite={()=>toggleFavorite(item)}
                    >
                    </RecipeCard>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    Textfav: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
});

export default HomeScreen;
