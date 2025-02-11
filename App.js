import { StyleSheet, Text ,View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./src/screen/HomeScreen";
import RecipeDetailScreen from "./src/screen/RecipeDatailScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recip" component={RecipeDetailScreen}/>
        
      </Stack.Navigator>r
    </NavigationContainer>
  );
};

export default App;