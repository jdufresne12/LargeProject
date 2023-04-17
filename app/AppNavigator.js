import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import GameMenu from "./GameMenu";
import ScreenHeaderBtn from "./headers/ScreenHeaderBtn";
import { COLORS, SIZES } from './constants/theme'

const Stack = createStackNavigator();

const AppNavigator = () => {
  const router = useRouter();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="GameMenu"
        component={GameMenu}
        options={{
          headerStyle: {backgroundColor: COLORS.bg, shadowColor: 'transparent'},
          headerShown: true,
          headerTitleStyle: {color: COLORS.primary, fontSize: 25},
          headerTitle: "Trivia Night",
          headerBackTitleVisible: false,
          headerLeft: "",
          headerRight: () => (
            <ScreenHeaderBtn 
              handlePress={() => router.back()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
