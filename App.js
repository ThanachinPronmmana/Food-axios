import { StyleSheet, Text ,View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./src/screen/HomeScreen";
import RecipeDetailScreen from "./src/screen/RecipeDatailScreen";
import FavoritesScreen from "./src/screen/FavoritesScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle:{backgroundColor:"#454545"},
        headerTintColor:"#fff",
        headerTitleAlign:"center",
        headerTitleStyle:{
          fontSize:24,
          fontWeight:"bold"
        }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          title:"Cum"
        }}
        />
        <Stack.Screen name="Recip" component={RecipeDetailScreen} 
        options={{
          title:"รายละเอียด"
        }}
        />
        <Stack.Screen name="Fav" component={FavoritesScreen}
        options={{
          title:"My favorite page"
        }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;