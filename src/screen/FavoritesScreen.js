import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";

const FavoritesScreen = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        try {
            const storageFavorite = await AsyncStorage.getItem("favorites");
            if (storageFavorite) {
                setFavorites(JSON.parse(storageFavorite));
            }
        } catch (err) {
            console.log("Error loading favorites", err);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Favorites</Text>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.mealTitle}>{item.strMeal}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f8f8f8",
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
        color: "#333",
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 12,
    },
    textContainer: {
        flex: 1,
        marginLeft: 15,
    },
    mealTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#444",
    },
});

export default FavoritesScreen;
