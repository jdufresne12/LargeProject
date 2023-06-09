import React from "react";
import { View, Platform } from "react-native";
import Svg, { Line } from "react-native-svg";
import { Dimensions, StyleSheet } from "react-native";
const { width: ScreenWidth } = Dimensions.get("screen");
import { COLORS } from "../../constants/theme";

const MySvgLine = () => {
    const strokeWidth = 10;
    const halfStrokeWidth = strokeWidth / 2;

    return (
        <View style={styles.container}>
            <Svg height="200" width="100%">
                {Platform.OS === "web" && (
                    <>
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
                    </>
                )}
                {Platform.OS !== "web" && (
                    <>
                        <Line
                            x1="-1%"
                            y1="25%"
                            x2="50.5%"
                            y2="98%"
                            stroke={COLORS.primary}
                            strokeWidth={strokeWidth}
                        />
                        <Line
                            x1="49%"
                            y1="98%"
                            x2="101%"
                            y2="25%"
                            stroke={COLORS.primary}
                            strokeWidth={strokeWidth}
                        />
                    </>
                )}
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