import * as React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { COLORS } from "../../constants/theme";

const Counter = ({ count, incrementCount }) => {
    return (
        <View style={styles.counterContainer}>
            <Text style={styles.counterText}>{count}/10</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    counterContainer: {
        position: "absolute",
        alignItems: "center",
        top: -25,
        right: -100,
        padding: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        width: 100,
    },
    counterText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    counterButton: {
        marginTop: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        padding: 10,
    },
    counterButtonText: {
        color: "white",
        fontSize: 16,
    },
});

export default Counter;
