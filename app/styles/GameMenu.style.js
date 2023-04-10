import { Dimensions, StyleSheet, } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#277F93",
    },
    menuContainer:{
        padding: 60,
    },
    menuChoiceBtn: {
        height: 50,
        width: ScreenWidth * 0.4,
        backgroundColor: "#FFF",
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
});