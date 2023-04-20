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


const GameMode = ({ category }) => {
    const navigation = useNavigation();

    React.useEffect(() => {
        if (category) {
            console.log("Selected category:", category);
            // Your game mode logic based on the selected category goes here
        }
    }, [category]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView scrollEnabled={false}>
                <View style={styles.dividerContainer}>
                    <Background />
                </View>
                <View style={styles.earth}>
                    <Earth />
                    <TouchableOpacity style={styles.menuChoiceBtn}>
                            <Text>Math</Text>
                    </TouchableOpacity>
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

export default GameMode;