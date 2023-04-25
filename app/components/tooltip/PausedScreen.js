import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../constants/theme"
import Pause from "../../assests/icons/Pause";
const { width: ScreenWidth } = Dimensions.get("screen");

const PausedScreen = () => {
    return(
        <View style={styles.pausedButton}>
            <Pause />
        </View>
    );
}
export default PausedScreen;

const styles = StyleSheet.create({
    screenContainer: {
        position: "absolute",
        alignItems: "center",
        width: ScreenWidth,
        height: 2500,
        padding: 10,
        backgroundColor: COLORS.gray,
    },
    pausedText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    pausedButton: {
        position: "absolute",
        alignItems: "center",
        marginLeft: 15,
        padding: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        width: 100,
    }
});
