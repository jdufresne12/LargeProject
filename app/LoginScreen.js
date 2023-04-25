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
    const [userNameError, setUserNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = React.useState(false);

    const validateUserName = () => {
        if (!userName) {
            setUserNameError("Username is required");
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

    const OnLoginPress = () => {
        validateUserName();
        validatePassword();
        loginError ? shake() : null;
        loginUser(userName, password);
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
        const response = await fetch('http://167.99.248.180/api/login', {
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
          setLoginError(false);
        } else {
          console.log('Login failed:', data);
          setLoginError(true)
        }
      } catch (error) {
        console.error('Error during login:', error);
        setLoginError(true)
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
                        placeholder={userNameError || "Username"}
                        placeholderTextColor={
                            userNameError ? "red" : COLORS.primary
                        }
                        onChangeText={setUserName}
                        onBlur={validateUserName}
                        autoCapitalize="none"
                        style={userNameError ? styles.errorBox : styles.inputBox}
                    />
                    <TextInput
                        placeholder={passwordError || "Password"}
                        placeholderTextColor={
                            passwordError ? "red" : COLORS.primary
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
                <TouchableOpacity onPress={() => {
                    OnLoginPress(userName, password)
                    }}>
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
                    <Text style={styles.signupTextStyle}>
                        Create an account
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;
