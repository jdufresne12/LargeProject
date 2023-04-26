import * as React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Animated,
} from "react-native";
import { useState, useEffect } from "react";
// import TextInput from "react-native-text-input-interactive";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles/LoginScreen.style";

const SignUpScreen = () => {
  const navigation = useNavigation();

  //validation
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // State variables for input fields
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State variables for input field errors
  const [userNameError, setUserNameError] = useState("");
  const [loginError, setLoginError] = React.useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

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

  const validateUserName = () => {
    if (!userName) {
      setUserNameError("UserName is required");
    } else {
      setUserNameError("");
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword != password) {
      setConfirmPasswordError("Passwords don't match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const OnSignUpPress = () => {
    validateUserName();
    validatePassword();
    validateConfirmPassword();
    // if (fullName && email && password && confirmPassword) {
    //     console.log(fullName, email, password, confirmPassword);
    // } else {
    //     console.log("Somethings missing");
    // }
    if(confirmPassword!='' && confirmPassword === password){
        signUpUser(userName, password);
    } else {
        shake()
    }
  };

  const signUpUser = async (userName, password) => {
    try {
<<<<<<< HEAD
      const response = await fetch("http://localhost:5000/api/signup", {
=======
      const response = await fetch("http://159.223.108.232/api/signup", {
>>>>>>> 2df9f3af41bfc8dd2b516698afe71236b9439bf0
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Signup successful:", data);
        navigation.navigate("Login");
        setLoginError(false);
      } else {
        console.log("Signup failed:", data);
        setLoginError(true);
        setUserNameError("Username Taken")
      }
    } catch (err) {
      console.error("Error during signup:", err);
      setLoginError(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.welcomeMessage1}>Join in on the fun!</Text>
      <Text style={styles.welcomeMessage2}>Create an account</Text>
      <View style={styles.textInputContainer}>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder={userNameError || "UserName"}
            autoCapitalize="words"
            numberOfLines={1}
            onChangeText={setUserName}
            onBlur={validateUserName}
            placeholderTextColor={userNameError ? "red" : "gray"}
            style={userNameError ? styles.errorBox : styles.inputBox}
          ></TextInput>
          {/* {fullNameError ? (<ErrorIcon styles={styles.errorIcon}/> ) : null} */}
        </View>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder={passwordError || "Password"}
            secureTextEntry={!isPasswordVisible}
            onChangeText={setPassword}
            onBlur={validatePassword}
            autoCapitalize="none"
            placeholderTextColor={passwordError ? "red" : "gray"}
            style={passwordError ? styles.errorBox : styles.inputBox}
          />
        </View>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder={confirmPasswordError || "Confirm Password"}
            secureTextEntry={!isPasswordVisible}
            onChangeText={setConfirmPassword}
            onBlur={validateConfirmPassword}
            autoCapitalize="none"
            placeholderTextColor={confirmPasswordError ? "red" : "gray"}
            style={confirmPasswordError ? styles.errorBox : styles.inputBox}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          OnSignUpPress(userName, password);
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
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.signupTextStyle}>Back to Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpScreen;
