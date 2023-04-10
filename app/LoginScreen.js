import * as React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
} from "react-native";
import TextInput from "react-native-text-input-interactive";

import styles from "./styles/LoginScreen.style";
import useStateWithCallback from "./helpers/useStateWithCallback";
import emailValidator from "./helpers/emailValidator";
import passwordValidator from "./helpers/passwordValidator";
import Tooltip from "./components/tooltip/Tooltip";
const dummyFunction = () => {};

const LoginScreen = ({
  style,
  dividerStyle,
  logoImageStyle,
  loginTextStyle,
  loginButtonStyle,
  signupTextStyle,
  signupStyle,
  textInputContainerStyle,
  signupText = "Create an account",
  disableDivider,
  logoImageSource,
  onLoginPress,
  disableSocialButtons,
  disablePasswordInput = false,
  loginButtonText = "Login",
  onSignupPress,
  onEmailChange,
  onPasswordChange,
  onFacebookPress = dummyFunction,
  onTwitterPress = dummyFunction,
  onApplePress = dummyFunction,
  onDiscordPress = dummyFunction,
  emailPlaceholder = "Email",
  passwordPlaceholder = "Password",
  disableSignup = false,
  customSocialLoginButtons,
  customLogo,
  customTextInputs,
  textInputChildren,
  customLoginButton,
  customSignupButton,
  customDivider,
  emailTextInputProps,
  passwordTextInputProps,
  disableEmailValidation = false,
  enablePasswordValidation = false,
  disableEmailTooltip = false,
  disablePasswordTooltip = false,
  emailContentTooltip,
  passwordContentTooltip,
  TouchableComponent = TouchableOpacity,
  onEyePress,
  children,
}) => {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isEmailTooltipVisible, setEmailTooltipVisible] =
    useStateWithCallback(false);
  const [isPasswordTooltipVisible, setPasswordTooltipVisible] =
    useStateWithCallback(false);
  const handleEmailChange = (text) => {
    isEmailTooltipVisible && setEmailTooltipVisible(false);
    setEmail(text);
    onEmailChange?.(text);
  };
  const handlePasswordChange = (text) => {
    isPasswordTooltipVisible && setPasswordTooltipVisible(false);
    setPassword(text);
    onPasswordChange?.(text);
  };
  const handleEyePress = () => {
    setPasswordVisible((oldValue) => !oldValue);
    onEyePress?.();
  };
  const handleEmailValidation = () => {
    if (disableEmailValidation) {
      handlePasswordValidation();
      onEmailChange(email);
      return;
    }
    if (emailValidator(email)) {
      !disableEmailTooltip && setEmailTooltipVisible(false);
      handlePasswordValidation();
      onEmailChange(email);
      return;
    } else {
      LayoutAnimation.spring();
      !disableEmailTooltip && setEmailTooltipVisible(true);
      onEmailChange(email);
    }
  };
  const handlePasswordValidation = () => {
    if (isEmailTooltipVisible) {
      return;
    }
    if (!enablePasswordValidation) {
      onPasswordChange(password);
      return;
    }
    if (enablePasswordValidation && passwordValidator(password)) {
      !disablePasswordTooltip && setPasswordTooltipVisible(false);
      onPasswordChange(password);
      return;
    } else {
      LayoutAnimation.spring();
      !disableEmailTooltip && setEmailTooltipVisible(false);
      !disablePasswordTooltip && setPasswordTooltipVisible(true);
      onPasswordChange(password);
    }
  };
  const renderLogo = () =>
    customLogo || (
      <Image
        resizeMode="contain"
        source={logoImageSource}
        style={[styles.logoImageStyle, logoImageStyle]}
      />
    );
  const renderEmailInput = () => {
    const tooltipContent = () =>
      emailContentTooltip || (
        <View style={styles.emailTooltipContainer}>
          <Text style={styles.emailTooltipTextStyle}>
            That{" "}
            <Text style={styles.emailTooltipRedTextStyle}>email address</Text>{" "}
            doesn't look right
          </Text>
        </View>
      );
    return (
      <View style={styles.emailTextInputContainer}>
        <>
          {!disableEmailTooltip && isEmailTooltipVisible && (
            <Tooltip>{tooltipContent()}</Tooltip>
          )}
          <TextInput
            placeholder={emailPlaceholder}
            onChangeText={handleEmailChange}
            autoCapitalize="none"
            onFocus={() => setEmailTooltipVisible(false)}
            {...emailTextInputProps}
          />
        </>
      </View>
    );
  };
  const renderPasswordInput = () => {
    const eyeIcon = isPasswordVisible
      ? require("./assests/eye.png")
      : require("./assests/eye-off.png");
    const renderTooltipContent = () =>
      passwordContentTooltip || (
        <View style={styles.passwordTooltipContainer}>
          <Text style={styles.passwordTooltipTextStyle}>
            Incorrect{" "}
            <Text style={styles.passwordTooltipRedTextStyle}>password</Text>
          </Text>
        </View>
      );
    return (
      !disablePasswordInput && (
        <View style={styles.passwordTextInputContainer}>
          {!disablePasswordTooltip && isPasswordTooltipVisible && (
            <Tooltip>{renderTooltipContent()}</Tooltip>
          )}
          <TextInput
            placeholder={passwordPlaceholder}
            secureTextEntry={!isPasswordVisible}
            onChangeText={handlePasswordChange}
            enableIcon
            iconImageSource={eyeIcon}
            autoCapitalize="none"
            onFocus={() => {
              setPasswordTooltipVisible(false);
            }}
            onIconPress={handleEyePress}
            {...passwordTextInputProps}
          />
        </View>
      )
    );
  };
  const renderTextInputContainer = () => {
    return (
      customTextInputs || (
        <View style={[styles.textInputContainer, textInputContainerStyle]}>
          {renderEmailInput()}
          {renderPasswordInput()}
          {textInputChildren}
        </View>
      )
    );
  };
  const renderLoginButton = () =>
    customLoginButton || (
      <TouchableComponent
        style={[styles.loginButtonStyle, loginButtonStyle]}
        onPress={() => {
          handleEmailValidation();
          onLoginPress?.();
        }}
      >
        <Text style={[styles.loginTextStyle, loginTextStyle]}>
          {loginButtonText}
        </Text>
      </TouchableComponent>
    );
  const renderSignUp = () =>
    customSignupButton ||
    (!disableSignup && (
      <TouchableComponent
        style={[styles.signupStyle, signupStyle]}
        onPress={onSignupPress}
      >
        <Text style={[styles.signupTextStyle, signupTextStyle]}>
          {signupText}
        </Text>
      </TouchableComponent>
    ));
  const renderDivider = () =>
    customDivider ||
    (!disableDivider && <View style={[styles.dividerStyle, dividerStyle]} />);

  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle="dark-content" />
      {renderLogo()}
      {renderTextInputContainer()}
      {renderLoginButton()}
      {renderSignUp()}
      {renderDivider()}
      {/* <View style={styles.socialLoginContainer}>
      {customSocialLoginButtons || renderDefaultSocialLoginButtons()}
    </View> */}
      {children}
    </SafeAreaView>
  );
};
export default LoginScreen;
//# sourceMappingURL=LoginScreen.js.map
