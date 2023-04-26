import * as React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Animated,
} from "react-native";
import { useState } from "react";
import styles from "./styles/LoginScreen.style";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "./constants/theme";

const LoginScreen = ({
  onLoginPress,
  onSignupPress,
  onForgotPasswordPress,
}) => {
  const navigation = useNavigation();
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
  //For validation
  const [userNameError, setUserNameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [loginError, setLoginError] = React.useState(false);

  const validateUserName = () => {
    if (!userName) {
      setUserNameError("Username is required");
      setLoginError(true);
      setUserName(userName);
      return true;
    } else {
      setUserNameError("");
      setLoginError(false);
      return false;
    }
  };
  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      setLoginError(true);
      setPassword(password);
      return true;
    } else {
      setPasswordError("");
      setLoginError(false);
      return false;
    }
  };

  const shakeAnimation = new Animated.Value(0);
  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleEyePress = () => {
    setPasswordVisible((oldValue) => !oldValue);
  };

  const loginUser = async (username, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        navigation.navigate("GameMenu");
        setLoginError(false);
      } else {
        console.log("Login failed:", data);
        if (data.message === "Invalid password") {
          setPasswordError("Invalid password");
        }
        if (data.message === "Invalid username") {
          setUserNameError("Invalid username");
        }
        setLoginError(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.welcomeMessage1}>Welcome to our app!</Text>
        <Text style={styles.welcomeMessage2}>Login</Text>
        <StatusBar barStyle="dark-content" />
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder={userNameError || "Username"}
            placeholderTextColor={userNameError ? "red" : COLORS.primary}
            onChangeText={setUserName}
            autoCapitalize="none"
            style={userNameError ? styles.errorBox : styles.inputBox}
            // value={userNameError ? "" : userName}
          ></TextInput>
          <TextInput
            placeholder={passwordError || "Password"}
            placeholderTextColor={passwordError ? "red" : COLORS.primary}
            secureTextEntry={!isPasswordVisible}
            onChangeText={setPassword}
            onIconPress={handleEyePress}
            autoCapitalize="none"
            style={passwordError ? styles.errorBox : styles.inputBox}
            // value={passwordError ? "" : password}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            const user = validateUserName();
            const pass = validatePassword();
            const err = userNameError;
            debugger;
            if (!user && !pass) {
              loginUser(userName, password);
            } else {
              shake();
            }
          }}
        >
          <Animated.View
            style={[
              styles.loginButtonStyle,
              { transform: [{ translateX: shakeAnimation }] },
            ]}
          >
            <Text style={styles.loginTextStyle}>Login</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupStyle}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.signupTextStyle}>Create an account</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
