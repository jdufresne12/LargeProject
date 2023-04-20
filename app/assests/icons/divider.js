import React from "react";
import { View } from "react-native";
import Svg, { Line } from "react-native-svg";
import { Dimensions, StyleSheet } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");
import { COLORS } from "../../constants/theme";
// import styles from "../../styles/GameMenu.style";

const MySvgLine = () => {
    const strokeWidth = 10;
    const halfStrokeWidth = strokeWidth / 2;

    return (
        <View style={styles.container}>
            <Svg height="200" width="100%">
                <Line
                    x1="0%"
                    y1="25%"
                    x2="50%"
                    y2="98%"
                    stroke={COLORS.primary}
                    strokeWidth={strokeWidth}
                />
                <Line
                    x1="49.9%"
                    y1="98%"
                    x2="100%"
                    y2="25%"
                    stroke={COLORS.primary}
                    strokeWidth={strokeWidth}
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
    },
});

export default MySvgLine;
