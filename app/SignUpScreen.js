import * as React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import TextInput from "react-native-text-input-interactive";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles/LoginScreen.style";
import { COLORS } from "./constants/theme";
import ErrorIcon from'./assests/icons/validationError';

const SignUpScreen = () => {
  const navigation = useNavigation();

  //validation
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  // State variables for input fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State variables for input field errors
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateName = () => {
    if(!fullName){
      setFullNameError("Name is required")
    } else{
      setFullNameError(false);
    }
  }
  const validateEmail = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRegex.test(email)) {
      setEmailError(null);
    } else if(!email) {
      setEmailError('Email is required');
    } else {
      setEmailError('Email is invaild');
    }
  };
  const validatePassword = () => {
    if(!password){
      setPasswordError("Password is required")
    } else{
      setPasswordError(false);
    }
  }
  const validateConfirmPassword = () => {
    if(confirmPassword != password){
      setConfirmPasswordError("Passwords don't match")
    } else{
      setConfirmPasswordError(false);
    }
  }

  const OnSignUpPress = () => {
    validateName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    if(fullName && email && password && confirmPassword){
      console.log(fullName, email, password, confirmPassword);
    } else{
      console.log('Somethings missing');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.welcomeMessage1}>Join in on the fun!</Text>
      <Text style={styles.welcomeMessage2}>Create an account</Text>
      <View style={styles.textInputContainer}>
          <TextInput
            placeholder={fullNameError ? fullNameError : "Full Name"}
            autoCapitalize="words"
            numberOfLines={1}
            onChangeText={setFullName}
            onBlur={validateName}
            placeholderTextColor={fullNameError ? "red" : COLORS.primary}
            style={styles.inputBox}
          />
        <TextInput
          placeholder={emailError ? emailError : "Email"}
          onChangeText={setEmail}
          onBlur={validateEmail}
          autoCapitalize="words"
          placeholderTextColor={emailError ? "red" : COLORS.primary}
        />
        <TextInput
          placeholder={passwordError ? passwordError : "Password"}
          secureTextEntry={!isPasswordVisible}
          onChangeText={setPassword}
          onBlur={validatePassword}
          autoCapitalize="none"
          placeholderTextColor={passwordError ? "red" : COLORS.primary}
        />
        <TextInput
          placeholder={
            confirmPasswordError ? confirmPasswordError : "Confirm Password"
          }
          secureTextEntry={!isPasswordVisible}
          onChangeText={setConfirmPassword}
          onBlur={validateConfirmPassword}
          autoCapitalize="none"
          placeholderTextColor={confirmPasswordError ? "red" : COLORS.primary}
        />
      </View>
      <TouchableOpacity
        style={styles.loginButtonStyle}
        title='Submit'
        onPress={OnSignUpPress}
      >
        <Text style={styles.loginTextStyle}>Sign Up</Text>
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
