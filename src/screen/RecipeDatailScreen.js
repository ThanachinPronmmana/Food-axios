import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const RecipeDetailScreen = ({ route }) => {
    const { recipe } = route.params;

    
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (recipe[`strIngredient${i}`]) {
            ingredients.push(
                `${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`
            );
        }
    }

    return (
        <ScrollView style={styles.container}>
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
