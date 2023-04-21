import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
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
        fontSize: 35,
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
    errorText: {
        fontWeight: "bold",
        color: "red",
    },
    errorBox: {
        borderColor: "red",
        borderWidth: 10,
        backgroundColor: "#ffffff",
        height: 120,
        width: ScreenWidth >= 400 ? ScreenWidth / 3 : ScreenWidth - 100,
    },
    errorIcon: {
        position: "relative",
        right: 10,
        top: 50,
    },
    errorBorder: {
        borderColor: "red",
        borderWidth: 3,
        backgroundColor: "red",
    },

    inputContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 50,
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
    textInputContainer: {
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
    inputBox: {
        borderColor: "red",
        borderWidth: 4,
        borderRadius: 5,
        height: 40,
        paddingHorizontal: 10,
        width: "100%",
    },
});
//# sourceMappingURL=LoginScreen.style.js.map
