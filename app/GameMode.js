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
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS, SIZES } from "./constants/theme";
import styles from "./styles/GameMode.style";
import Background from "./components/tooltip/animatedBackground";
import Earth from "./assests/icons/Earth";
import { Dimensions, StyleSheet } from "react-native";
import Svg, { Polygon, Path } from "react-native-svg";
const { width: ScreenWidth } = Dimensions.get("screen");
import Divider from "./assests/icons/divider";
import Timer from "./components/tooltip/Timer";
import Counter from "./components/tooltip/Counter";

const GameMode = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { category } = route.params || {};

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
                    <Timer />
                    <Earth />
                    <TouchableOpacity style={styles.gameModeChoiceBtn}>
                        <Text>{category}</Text>
                    </TouchableOpacity>
                    <Counter />
                </View>
                {/* <View>
                    
                </View> */}
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
