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

import styles from "./styles/GameMenu.style";

const GameMenu = () => {
    const navigation = useNavigation();
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuChoiceBtn}>
                    <Text>Addition</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuChoiceBtn}>
                    <Text>Subtraction</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuChoiceBtn}>
                    <Text>Multiplication</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default GameMenu;