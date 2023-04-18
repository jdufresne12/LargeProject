import React from "react";
import { View, StyleSheet, Platform } from "react-native";
// import LottieWeb from "lottie-react";
// import LottieView from 'lottie-react-native';


const LottieAnimation = ({ style }) => {
    return (
        <View style={[style.container, style]}>
            {Platform.OS === "web" ? (
                <LottieWeb
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
                <LottieNative
                    source={require("./assests/animation.json")}
                    loop
                    autoPlay
                    resizeMode="cover"
                />
            )}
        </View>
    );
};

export default LottieAnimation;