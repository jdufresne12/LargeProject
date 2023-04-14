import { Dimensions, StyleSheet, } from "react-native";
import { COLORS, SIZES } from "../constants/theme.js";
const { width: ScreenWidth } = Dimensions.get("screen");
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
    },
    earth: {
        display: 'flex',
        justifyContent: "center",
        marginTop: 100,
    },
    menuContainer:{
        flex: 1,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40
    },
    row:{
        flexDirection: 'row',
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
        marginTop: 20
    },
    svgBuffer: {
        marginTop: 40,
    }
});