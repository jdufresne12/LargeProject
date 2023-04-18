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
       alignSelf: 'center'
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
        padding: 40,
        paddingTop: 15,
        zIndex: 1
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
        paddingBottom: 75,
        zIndex: 2, // Add this line
    },
    divider: {
        width: ScreenWidth * 0.75, // Set the width of each divider to half of the screen width
        height: 25, // Adjust this value to change the height of the dividers
        backgroundColor: COLORS.primary, // Change this to the desired divider color
        zIndex: 1,
    },
    dividerLeft: {
        transform: [
            { translateY: 30 }, // Move the left divider down by half of the height
            { skewX: "45deg" }, // Rotate the left divider
            { rotate: "30deg" },
            { scaleX: 1 },
        ],
        zIndex: 2,
    },
    dividerRight: {
        transform: [
            { translateY: 30 }, // Move the right divider down by half of the height
            { skewX: "-45deg" }, // Rotate the right divider
            { rotate: "-30deg" },
            { scaleX: 1 },
        ],
        zIndex: 2,
    },
});
