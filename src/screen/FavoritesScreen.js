import React,{useState,useEffect} from "react";
import {View,StyleSheet,Text,TouchableOpacity,Image} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";
const FavoritesScreen = () =>{
    const [favorites,setFavorites] = useState([])
    useEffect(()=>{
    loadFavorites()
    },[])
    const loadFavorites = async()=>{
        try{
            const storagefavorite = await AsyncStorage.getItem("favorites")
            if(storagefavorite){
                setFavorites(JSON.parse(storagefavorite))
            }
        }catch(err){
            console.log('Error loading favorites',err)
        }
    }
    return(
        <View style={styles.container}>
          <FlatList
          
          data={favorites}
          keyExtractor={(item)=>item.idMeal}
          renderItem={({item})=>(
            <TouchableOpacity>
                <Image source={{uri:item.strMealThumb}} style={styles.Imagemeal}/>
                <Text>{item.strMeal}</Text>
            </TouchableOpacity>
          )}
          />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"flex-start",
        padding:10,
        backgroundColor:"#fff"

    },
    Text:{
        fontSize:20,
        fontWeight:"bold",

    },
    Imagemeal:{
        width:60,
        height:60,
        borderRadius:10,
    }
})
export default FavoritesScreen