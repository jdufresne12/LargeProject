import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity, Alert, Platform } from "react-native";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import GameMenu from "./GameMenu";
import ScreenHeaderBtn from "./headers/ScreenHeaderBtn";
import { COLORS, SIZES } from "./constants/theme";
import GameMode from "./GameMode";
import PauseButton from "./assests/icons/Pause";
import { GameProvider } from "./GameContext";
import PauseModal from "./components/tooltip/PauseModal";
import LogoutModal from "./components/tooltip/LogoutModal";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  const handlePauseButtonPressMobile = (logout) => {
    if (logout === true) {
      Alert.alert(
        "Logout",
        "Are you sure you want to Logout?",
        [
          {
            text: "Cancel",
            style: "cancel",
            onPress: () => {
              setIsLogout(false);
            },
          },
          {
            text: "Logout",
            style: "quit",
            onPress: () => {
              setIsLogout(false);
              navigation.goBack();
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      setIsPaused(true);
      Alert.alert(
        "Pause",
        "Are you sure you want to quit? Momma didn't raise a quitter!",
        [
          {
            text: "Cancel",
            style: "cancel",
            onPress: () => {
              setIsPaused(false);
            },
          },
          {
            text: "Quit",
            style: "quit",
            onPress: () => {
              setIsPaused(false);
              navigation.goBack();
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  const handlePauseButtonPressWeb = () => {
    setIsModalVisible(true);
    setIsPaused(true);
  };
  const handlePlayButtonPressWeb = () => {
    setIsModalVisible(true);
  };
  const handleModalCancel = () => {
    setIsModalVisible(false);
    setIsLogout(false);
    setIsPaused(false);
  };

  const handleModalQuit = () => {
    setIsModalVisible(false);
    setIsPaused(false);
    setIsLogout(false);
    navigation.goBack();
  };

  const handlePauseButtonPress =
    Platform.OS === "web"
      ? handlePauseButtonPressWeb
      : handlePauseButtonPressMobile;
  const handleLogoutButtonPress =
    Platform.OS === "web"
      ? handlePlayButtonPressWeb
      : handlePauseButtonPressMobile(true);

  return (
    <GameProvider value={{ isPaused: isPaused, setIsPaused: setIsPaused }}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GameMenu"
          component={GameMenu}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: COLORS.bg,
              shadowColor: "transparent",
            },
            headerTitleStyle: {
              color: COLORS.primary,
              fontSize: 25,
            },
            headerTitleAlign: "center",
            headerTitle: "Trivia Night",
            headerLeft: "",
            headerMode: "screen",
            headerRight: () => (
              <ScreenHeaderBtn
                handlePress={() => {
                  setIsLogout(true);
                  handleLogoutButtonPress();
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="GameMode"
          component={GameMode}
          options={({ route }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: COLORS.bg,
              shadowColor: "transparent",
            },
            headerTitleStyle: {
              color: COLORS.primary,
              fontSize: 25,
            },
            headerTitleAlign: "center",
            headerTitle: "Trivia Night",
            headerMode: "screen",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => handlePauseButtonPress(route.params.setIsPaused)}
                style={{ marginLeft: 20 }}
              >
                <PauseButton />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
      {isLogout ? (
        <LogoutModal
          isVisible={isModalVisible}
          onCancel={handleModalCancel}
          onQuit={handleModalQuit}
        />
      ) : (
        <PauseModal
          isVisible={isModalVisible}
          onCancel={handleModalCancel}
          onQuit={handleModalQuit}
        />
      )}
    </GameProvider>
  );
};

export default AppNavigator;
