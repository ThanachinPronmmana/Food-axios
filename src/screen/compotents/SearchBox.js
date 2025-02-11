import React from "react";
import {View,StyleSheet,TextInput} from "react-native"
import Feather from '@expo/vector-icons/Feather';

const SearchBox = ({placeholder,value,onChangeText})=>{
    return(
        <View style={styles.container}>
            <Feather
            name="search" size={26} color="#888" style={styles.icon}
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={placeholder}   
            value={value}
            />
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 10,
        elevation: 2, //

    },
    input:{
        flex: 1,
        fontSize: 18,
        color: "#333",
        paddingVertical: 8,
        paddingLeft: 10,
    }
})
export default SearchBox