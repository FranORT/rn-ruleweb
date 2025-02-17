// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "./Homescreen";
import Redeemed from "./Redeemed";


const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Premio Canjeado" component={Redeemed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
