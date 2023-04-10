import * as React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TextInput from "react-native-text-input-interactive";

import styles from "./styles/LoginScreen.style";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ onLoginPress, onSignupPress, onForgotPasswordPress }) => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);

  const handleEyePress = () => {
    setPasswordVisible((oldValue) => !oldValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.textInputContainer}>
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
          onIconPress={handleEyePress}
        />
      </View>
      <TouchableOpacity
        style={styles.loginButtonStyle}
        onPress={() => onLoginPress(email, password)}
      >
        <Text style={styles.loginTextStyle}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupStyle}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.signupTextStyle}>Create an account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupStyle}
        onPress={onForgotPasswordPress}
      >
        <Text style={styles.signupTextStyle}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
