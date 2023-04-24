import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect} from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { useRouter } from "expo-router";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import GameMenu from "./GameMenu";
import ScreenHeaderBtn from "./headers/ScreenHeaderBtn";
import { COLORS, SIZES } from './constants/theme'
import GameHeader from './headers/GameHeader';
import GameMode from './GameMode';
import PauseButton from './assests/icons/Pause'
import { Alert } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const router = useRouter();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  function handlePauseButtonPress() {
    Alert.alert(
      'Pause',
      "Are you sure you want to quit? Momma didn't raise a quitter!",
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Quit',
          style: 'quit',
          onPress: () => {
            router.back()
          },
        },
      ],
      { cancelable: false }
    );
  }
  

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
          headerTitleAlign: 'center',
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
          headerTitleAlign: 'center',
          headerTitle: "Trivia Night",
          headerMode: "screen",
          headerLeft: () => (
            <TouchableOpacity onPress={handlePauseButtonPress}
            >
              <PauseButton />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
