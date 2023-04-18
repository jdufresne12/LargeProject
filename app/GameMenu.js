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
import Background from "./components/tooltip/animatedBackground";
import Earth from "./assests/icons/Earth";
import { Dimensions, StyleSheet } from "react-native";
import Svg, { Polygon, Path } from "react-native-svg";
const { width: ScreenWidth } = Dimensions.get("screen");
import Divider from "./assests/icons/divider"


const GameMenu = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* <View style={styles.textContainer}>
                    <Text style={styles.subjectPrompt}>
                        What are we going to test you on today?
                    </Text>
                </View> */}
                <View style={styles.dividerContainer}>
                    <Background />
                </View>
                <View style={styles.earth}>
                    <Earth />
                </View>
                <View>
                    <Divider />
                </View>
                <View style={styles.menuContainer}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.menuChoiceBtn}>
                            <Text>Math</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuChoiceBtn}>
                            <Text>Sports</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.menuChoiceBtn}>
                            <Text>Music</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuChoiceBtn}>
                            <Text>Geography</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default GameMenu;
