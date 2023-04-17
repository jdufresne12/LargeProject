import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import LottieReactNative from "lottie-react-native";
import LottieReactWeb from "lottie-react-web";

import animationData from "./assests/animation.json";

const LottieAnimation = ({ style }) => {
    return (
        <View style={[style.container, style]}>
            {Platform.OS === "web" ? (
                <LottieReactWeb
                    options={{
                        animationData: animationData,
                        loop: true,
                        autoplay: true,
                        rendererSettings: {
                            preserveAspectRatio: "none", // This will stretch the animation
                        },
                    }}
                    width="100%"
                    height="100%"
                    background="transparent" // This will set the background to transparent
                />
            ) : (
                <LottieReactNative
                    source={animationData}
                    loop
                    autoPlay
                    resizeMode="cover"
                />
            )}
        </View>
    );
};

export default LottieAnimation;
