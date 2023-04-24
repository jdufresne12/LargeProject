import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const Timer = ({ isTimerActive }) => {
    const [time, setTime] = React.useState(90);

    React.useEffect(() => {
        if (!isTimerActive) {
            return;
        }

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
    }, [isTimerActive]);

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
        padding: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        width: 100,
        marginLeft: 8
    },
    timerText: {
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Timer;
