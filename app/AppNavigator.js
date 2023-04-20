import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useState, useEffect} from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import GameMenu from "./GameMenu";
import ScreenHeaderBtn from "./headers/ScreenHeaderBtn";
import { COLORS, SIZES } from './constants/theme'
import GameHeader from './headers/GameHeader';
import GameMode from './GameMode';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const router = useRouter();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  const renderHeaderRight = () => {
    if (isButtonClicked) {
      return <AnotherComponent />;
    } else {
      return (
        <ScreenHeaderBtn 
          handlePress={handleButtonClick}
        />
      );
    }
  };

  return (
    <Stack.Navigator
      initialRouteName="Login"
      //screenOptions={headerOptions}
      
    >
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}}/>
      <Stack.Screen
        name="GameMenu"
        component={GameMenu}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: COLORS.bg, shadowColor: 'transparent'},
          headerTitleStyle: {color: COLORS.primary, fontSize: 25},
          headerTitle: "Trivia Night",
          headerLeft: "",
          headerMode: "screen",
          headerRight: () => (
            <ScreenHeaderBtn 
              handlePress={() => router.back()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="GameMode"
        component={GameMode}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: COLORS.bg, shadowColor: 'transparent'},
          headerTitleStyle: {color: COLORS.primary, fontSize: 25},
          headerTitle: "Trivia Night",
          headerMode: "screen",
          headerLeft: () => (
            <GameHeader 
              handlePress={() => router.back()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
