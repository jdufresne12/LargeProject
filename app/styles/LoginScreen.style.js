import { Dimensions, StyleSheet, } from "react-native";
import { COLORS, SIZES } from '../constants/theme'
const { width: ScreenWidth } = Dimensions.get("screen");
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
    },
    logoImageStyle: {
        width: 200,
        height: 200,
        alignSelf: "center",
    },
    welcomeMessage1: {
        marginTop: 100, 
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
        color: COLORS.primary,
    },
    welcomeMessage2: {
        marginTop: 20, 
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: COLORS.secondary,
    },
    textInputContainer: {
        marginTop: 60,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
    passwordTextInputContainer: {
        marginTop: 14,
        alignItems: "center",
        justifyContent: "center",
    },
    loginButtonStyle: {
        height: 40,
        width: ScreenWidth * 0.9,
        backgroundColor: COLORS.primary,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 40,
        elevation: 5,
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowColor: "#166080",
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    loginTextStyle: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "bold",
    },
    signupStyle: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    signupTextStyle: {
        color: COLORS.secondary,
    },
    dividerStyle: {
        height: 0.5,
        marginTop: 24,
        marginBottom: 12,
        borderRadius: 16,
        width: ScreenWidth * 0.8,
        alignSelf: "center",
        backgroundColor: "#ccc",
    },
    socialLoginContainer: {
        marginTop: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    eyeIconContainer: {
        right: 16,
        top: 14,
        position: "absolute",
    },
    eyeIcon: {
        width: 24,
        height: 24,
        tintColor: "#ccc",
    },
    shakeText: {
        color: "red",
        marginTop: 8,
        marginLeft: 12,
        marginRight: "auto",
    },
    emailTextInputContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    emailTooltipContainer: {
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    emailTooltipTextStyle: {
        fontSize: 16,
    },
    emailTooltipRedTextStyle: {
        fontWeight: "bold",
        color: "red",
    },
    emailTooltipContentStyle: {
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    emailTooltipBackgroundStyle: {
        backgroundColor: "transparent",
    },
    passwordTooltipStyle: {
        marginTop: 30,
    },
    passwordTooltipContainer: {
        padding: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    passwordTooltipTextStyle: {
        fontSize: 16,
    },
    passwordTooltipRedTextStyle: {
        fontWeight: "bold",
        color: "red",
    },
    passwordTooltipBackgroundStyle: {
        backgroundColor: "transparent",
    },
    passwordTooltipContentStyle: {
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
});
//# sourceMappingURL=LoginScreen.style.js.map