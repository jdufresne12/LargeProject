import * as React from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TextInput from "react-native-text-input-interactive";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles/LoginScreen.style";

const SignUpScreen = ({ onSignUpPress }) => {
  const navigation = useNavigation();
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Full Name"
          onChangeText={setFullName}
          autoCapitalize="words"
        />
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={!isPasswordVisible}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity
        style={styles.loginButtonStyle}
        onPress={() => onSignUpPress(fullName, email, password, confirmPassword)}
      >
        <Text style={styles.loginTextStyle}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupStyle}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.signupTextStyle}>Back to Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpScreen;
