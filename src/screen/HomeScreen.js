import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import axios from "axios";
import SearchBox from "./compotents/SearchBox";
import RecipeCard from "./compotents/RecipeCard";

const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
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

    return (
        <View style={styles.container}>
            <SearchBox
                placeholder="Search recipes..."
                value={search}
                onChangeText={(value) => setSearch(value)}
            />

            <FlatList
                data={recipes.filter((recipe) =>
                    recipe.strMeal.toLowerCase().includes(search.toLowerCase())
                )}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item }) => (
                    <RecipeCard
                        recipe={item}
                        onPress={() => navigation.navigate("Recip", { recipe: item })}
                    />
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
});

export default HomeScreen;
