import * as React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import TextInput from "react-native-text-input-interactive";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "./constants/theme";
import styles from "./styles/GameMenu.style";
import Earth from "./assests/icons/Earth";
import LottieAnimation from "./LottieAnimation";

const GameMenu = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.textContainer}>
                    <Text style={styles.subjectPrompt}>
                        What are we going to test you today?
                    </Text>
                </View>
                <Text style={styles.svgBuffer}></Text>
                {/* <Earth style={styles.earth} /> */}
                <View style={styles.animationContainer}>
                    
                    <View style={styles.animationWrapper}>
                        <LottieAnimation
                            style={styles.animation}
                            resizeMode="cover"
                        />
                    </View>
                </View>
                <View style={styles.dividerContainer}>
                    {" "}
                    {/* Add a container for the dividers */}
                    <View style={[styles.divider, styles.dividerLeft]} />{" "}
                    {/* Add left divider */}
                    <View style={[styles.divider, styles.dividerRight]} />{" "}
                    {/* Add right divider */}
                </View>
                <View style={styles.menuContainer}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.menuChoiceBtn}>
                            <Text>Subject1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuChoiceBtn}>
                            <Text>Subject2</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.menuChoiceBtn}>
                            <Text>Subject3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuChoiceBtn}>
                            <Text>Subject4</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default GameMenu;
