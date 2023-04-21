import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme"

const Timer = () => {
    const [time, setTime] = React.useState(90);

    React.useEffect(() => {
        const countdown = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(countdown);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <View style={styles.timerContainer}>
            <Text style={styles.timerText}>
                {minutes > 0 ? `${minutes}m` : ""} {seconds}s
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timerContainer: {
        position: "absolute",
        alignItems: "center",
        top: -25,
        left: -100,
        padding: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        width: 100,
    },
    timerText: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Timer;
