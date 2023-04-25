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
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isPasswordVisible, setPasswordVisible] = React.useState(false);
    //For validation
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = () => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (emailRegex.test(email)) {
            setEmailError("");
        } else if (!email) {
            setEmailError("Email is required");
        } else {
            setEmailError("Email is invaild");
        }
    };
    const validatePassword = () => {
        if (!password) {
            setPasswordError("Password is required");
        } else {
            setPasswordError("");
        }
    };
    const OnLoginPress = () => {
        // validateEmail();
        // validatePassword();
        loginUser(email, password);
        // if (!emailError && !passwordError) {
        //     loginUser(email, password);
        // } else {
        //     console.log("Invalid credentials");
        // }
    };

    const handleEyePress = () => {
        setPasswordVisible((oldValue) => !oldValue);
    };

    const loginUser = async (username, password) => {
      try {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Login successful:', data);
          navigation.navigate("GameMenu")
        } else {
          console.log('Login failed:', data);
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.welcomeMessage1}>Welcome to our app!</Text>
                <Text style={styles.welcomeMessage2}>Login</Text>
                <StatusBar barStyle="dark-content" />
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder={emailError || "Email"}
                        placeholderTextColor={
                            emailError ? "red" : COLORS.primary
                        }
                        onChangeText={setEmail}
                        onBlur={validateEmail}
                        autoCapitalize="none"
                        style={emailError ? styles.errorBox : styles.inputBox}
                    />
                    <TextInput
                        placeholder={passwordError || "Password"}
                        placeholderTextColor={
                            emailError ? "red" : COLORS.primary
                        }
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={setPassword}
                        onIconPress={handleEyePress}
                        autoCapitalize="none"
                        style={
                            passwordError ? styles.errorBox : styles.inputBox
                        }
                    />
                </View>
                <TouchableOpacity
                    style={styles.loginButtonStyle}
                    onPress={() => OnLoginPress(email, password)}
                >
                    <Text style={styles.loginTextStyle}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signupStyle}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    <Text style={styles.signupTextStyle}>
                        Create an account
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signupStyle}
                >
                    <Text style={styles.signupTextStyle}>Forgot Password?</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;
