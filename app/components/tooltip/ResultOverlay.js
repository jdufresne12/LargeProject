import React, { useRef, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import passImage from "../../assests/pass.png";
import failImage from "../../assests/fail.png";

const ResultOverlay = ({ score, onClose }) => {
    const navigation = useNavigation();
    const result = score >= 6 ? "PASS" : "FAIL";

    const scale = useRef(new Animated.Value(0)).current;
    const pulse = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.spring(scale, {
                toValue: 1,
                tension: 100,
                friction: 1,
                useNativeDriver: true,
            }),
            Animated.loop(
                Animated.sequence([
                    Animated.timing(pulse, {
                        toValue: 1.1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(pulse, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                ])
            ),
        ]).start();
    }, []);

    const handleOverlayPress = () => {
        onClose();
        navigation.navigate("GameMenu");
    };

    const animatedStyle = {
        transform: [{ scale }],
    };

    const pulseStyle = {
        transform: [{ scale: pulse }],
    };

    return (
        <TouchableOpacity
            style={styles.overlay}
            onPress={handleOverlayPress}
            activeOpacity={1}
        >
            <Animated.View style={[styles.imageContainer, animatedStyle]}>
                <Animated.Image
                    source={result === "PASS" ? passImage : failImage}
                    style={[styles.image, pulseStyle]}
                />
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,1)",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    imageContainer: {
        width: "60%",
        height: "60%",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});

export default ResultOverlay;
