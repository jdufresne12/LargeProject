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

const Stack = createStackNavigator();

const AppNavigator = () => {
  const router = useRouter();

  // const [headerOptions, setHeaderOptions] = useState({
  //   headerShown: false,
  // });

  // useEffect(() => {
  //   // Retrieve header options from AsyncStorage on component mount
  //   const getHeaderOptions = async () => {
  //     try {
  //       const options = await AsyncStorage.getItem('headerOptions');
  //       if (options) {
  //         setHeaderOptions(JSON.parse(options));
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getHeaderOptions();
  // }, []);

  return (
    <Stack.Navigator
      initialRouteName="Login"
      //screenOptions={headerOptions}
      
    >
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
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
    </Stack.Navigator>
  );
};

export default AppNavigator;
