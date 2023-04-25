import * as React from "react";
import {
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    TextInput,
    View,
} from "react-native";
import { useState, useEffect } from "react";
// import TextInput from "react-native-text-input-interactive";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles/LoginScreen.style";
import { COLORS } from "./constants/theme";
import ErrorIcon from "./assests/icons/validationError";

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
        if (!fullName) {
            setFullNameError("Full Name is required");
        } else {
            setFullNameError("");
        }
    };

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

    const validateConfirmPassword = () => {
        if (confirmPassword != password) {
            setConfirmPasswordError("Passwords don't match");
        } else {
            setConfirmPasswordError("");
        }
    };

    const OnSignUpPress = () => {
        // validateName();
        // validateEmail();
        // validatePassword();
        // validateConfirmPassword();
        // if (fullName && email && password && confirmPassword) {
        //     console.log(fullName, email, password, confirmPassword);
        // } else {
        //     console.log("Somethings missing");
        // }
        signUpUser(email, password);
    };

    const signUpUser = async (email, password) => {
        try {
            const response = await fetch("http://localhost:5000/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: email,
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Signup successful:", data);
                navigation.navigate("Login");
            } else {
                console.log("Signup failed:", data);
            }
        } catch (err) {
            console.error("Error during signup:", err);
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
                        placeholder={fullNameError || "Full Name"}
                        autoCapitalize="words"
                        numberOfLines={1}
                        onChangeText={setFullName}
                        onBlur={validateName}
                        placeholderTextColor={fullNameError ? "red" : "gray"}
                        style={
                            fullNameError ? styles.errorBox : styles.inputBox
                        }
                    ></TextInput>
                    {/* {fullNameError ? (<ErrorIcon styles={styles.errorIcon}/> ) : null} */}
                </View>
                <View style={styles.fieldContainer}>
                    <TextInput
                        placeholder={emailError || "Email"}
                        onChangeText={setEmail}
                        onBlur={validateEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        placeholderTextColor={emailError ? "red" : "gray"}
                        style={emailError ? styles.errorBox : styles.inputBox}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <TextInput
                        placeholder={passwordError || "Password"}
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={setPassword}
                        onBlur={validatePassword}
                        autoCapitalize="none"
                        placeholderTextColor={passwordError ? "red" : "gray"}
                        style={
                            passwordError ? styles.errorBox : styles.inputBox
                        }
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <TextInput
                        placeholder={confirmPasswordError || "Confirm Password"}
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={setConfirmPassword}
                        onBlur={validateConfirmPassword}
                        autoCapitalize="none"
                        placeholderTextColor={
                            confirmPasswordError ? "red" : "gray"
                        }
                        style={
                            confirmPasswordError
                                ? styles.errorBox
                                : styles.inputBox
                        }
                    />
                </View>
            </View>
            <TouchableOpacity
                style={styles.loginButtonStyle}
                title="Submit"
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
