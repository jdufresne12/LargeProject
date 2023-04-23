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

    useEffect(() => {
        Animated.spring(scale, {
            toValue: 1,
            tension: 150,
            friction: 10,
            useNativeDriver: true,
        }).start();
    }, []);

    const handleOverlayPress = () => {
        onClose();
        navigation.navigate("GameMenu");
    };

    const animatedStyle = {
        transform: [{ scale }],
    };

    return (
        <TouchableOpacity
            style={styles.overlay}
            onPress={handleOverlayPress}
            activeOpacity={1}
        >
            <Animated.View style={[styles.imageContainer, animatedStyle]}>
                {result === "PASS" ? (
                    <Image source={passImage} style={styles.image} />
                ) : (
                    <Image source={failImage} style={styles.image} />
                )}
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
        backgroundColor: "rgba(0, 0, 0, 0.5)",
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
