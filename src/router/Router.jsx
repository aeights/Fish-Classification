import { View, Text } from "react-native";
import React from "react";
import Home from "../screen/Home";
import Probs from "../screen/Probs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="probs" component={Probs} />
    </Stack.Navigator>
  );
};

export default Router;
