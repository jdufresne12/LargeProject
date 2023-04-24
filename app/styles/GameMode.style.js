import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme.js";
const { width: ScreenWidth } = Dimensions.get("screen");
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
    },
    textContainer: {
        backgroundColor: COLORS.bg,
        paddingHorizontal: 40,
        paddingTop: 30,
        zIndex: 2,
    },
    animationContainer: {
        width: "100%",
        height: 200, // Adjust this value to change the height of the container
        justifyContent: "center", // Add this to center the animation vertically
        alignItems: "center", // Add this to center the animation horizontally
    },
    earth: {
        flex: 1,
        alignSelf: "center",
        marginBottom: -150,
    },
    info: {
        flexDirection: 'column',
        marginTop: -20,
        marginBottom: 50,
        marginRight: 115
    },
    animationWrapper: {
        width: "100%", // Increase the width to stretch the animation
        height: "300%", // Increase the height to stretch the animation
        overflow: "hidden",
    },
    animation: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        zIndex: -1,
        position: "absolute",
        top: 0,
    },
    menuContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        zIndex: 1,
    },
    row: {
        flexDirection: "row",
        marginBottom: 20,
    },
    menuChoiceBtn: {
        flex: 1,
        marginHorizontal: 10,
        height: 50,
        width: ScreenWidth * 0.4,
        backgroundColor: COLORS.secondary,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 32,
        elevation: 5,
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowColor: "#166080",
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    subjectPrompt: {
        fontSize: 40,
        textAlign: "center",
        color: COLORS.primary,
        marginTop: 20,
    },
    svgBuffer: {
        marginTop: 40,
    },
    dividerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        width: ScreenWidth,
        marginBottom: 50,
        zIndex: -1,
    },
    divider: {
        height: 25, // Adjust this value to change the height of the dividers
    },
    gameContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    gameModeChoiceBtn: {
        flex: 1,
        marginHorizontal: 10,
        height: 70,
        // width: ScreenWidth * 0.9,
        width: "auto",
        padding: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 0,
        elevation: 5,
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowColor: "#166080",
        shadownOffset: {
            width: 0,
            height: 3,
        },
        top: "27%",
        position: "absolute",
        zIndex: 1,
    },
});
