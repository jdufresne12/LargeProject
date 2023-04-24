import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { COLORS } from '../../constants/theme'
import Play from "../../assests/icons/Play";
const { width: ScreenWidth } = Dimensions.get("screen");

const PlayScreen = () => {
    return(
        <View style={styles.pausedButton}>
            <Play />
        </View>
    );
}
export default PlayScreen;

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
