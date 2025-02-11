import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const RecipeCard = ({ recipe, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image style={styles.image} source={{ uri: recipe.strMealThumb }} />
            <View style={styles.container}>
                <Text style={styles.title}>{recipe.strMeal}</Text>
                <View style={styles.content}>
                    <Text style={styles.category}>{recipe.strCategory}</Text>
                    <MaterialIcons name="arrow-forward-ios" size={14} color="#777" />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 12,
        width: "95%",
        alignSelf: "center",
        marginVertical: 8,
        padding: 16,
        minHeight: 120,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
        alignItems: "flex-start",
    },
    image: {
        borderRadius: 8,
        width: 100,
        height: 100,
    },
    container: {
        flex: 1,
        paddingLeft: 16,
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 6,
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    category: {
        fontSize: 16,
        color: "#666",
    },
});

export default RecipeCard;
