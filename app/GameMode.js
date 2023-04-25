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
import { useEffect } from "react";
import PausedScreen from "./components/tooltip/PausedScreen";
import PlayScreen from "./components/tooltip/PlayScreen";

import ResultOverlay from "./components/tooltip/ResultOverlay";

import GameContext from "./GameContext";

const GameMode = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { category } = route.params || {};

    const [questions, setQuestions] = React.useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

    const currentQuestion = questions[currentQuestionIndex];

    const [count, setCount] = React.useState(0);

    const incrementCount = (selectedAnswer) => {
        if (selectedAnswer === currentQuestion.answer) {
            setCount((prevCount) => prevCount + 1);
        }
    };

    const fetchQuestions = async (category) => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/gamemode?category=${category}&limit=10`
            );
            const data = await response.json();
            console.log(data);
            setQuestions(data);
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    };

    useEffect(() => {
        if (category) {
            fetchQuestions(category);
        }
    }, [category]);

    const [showResultOverlay, setShowResultOverlay] = React.useState(false);

    const resetGameState = () => {
        setCurrentQuestionIndex(0);
        setCount(0);
        setShowResultOverlay(false);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", resetGameState);
        return unsubscribe;
    }, [navigation]);

    const [hasGameStarted, setHasGameStarted] = React.useState(false);

    React.useEffect(() => {
        setHasGameStarted(true);
    }, []);

    const { isPaused } = React.useContext(GameContext);

    const handleTimeUp = () => {
        setShowResultOverlay(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView scrollEnabled={false}>
                <View style={styles.dividerContainer}>
                    <Background />
                </View>
                <View style={styles.earth}>
                    <Timer
                        isTimerActive={
                            hasGameStarted && !showResultOverlay && !isPaused
                        }
                        onTimeUp={handleTimeUp}
                    />
                    <Earth />
                    {currentQuestion && (
                        <TouchableOpacity
                            style={styles.gameModeChoiceBtn}
                            disabled={true}
                        >
                            {/* Display the question */}
                            <Text>{currentQuestion.question}</Text>
                        </TouchableOpacity>
                    )}
                    <Counter count={count} />
                </View>
                <View>
                    <Divider />
                </View>
                <View style={styles.menuContainer}>
                    {currentQuestion &&
                        currentQuestion.options.map((option, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <View key={index} style={styles.row}>
                                        <TouchableOpacity
                                            style={styles.menuChoiceBtn}
                                            onPress={() => {
                                                if (!hasGameStarted) {
                                                    setHasGameStarted(true);
                                                }
                                                setCurrentQuestionIndex(
                                                    (prevIndex) => prevIndex + 1
                                                );
                                                incrementCount(option);
                                                if (
                                                    currentQuestionIndex ===
                                                    questions.length - 1
                                                ) {
                                                    setShowResultOverlay(true);
                                                }
                                            }}
                                        >
                                            <Text>{option}</Text>
                                        </TouchableOpacity>
                                        {currentQuestion.options[index + 1] && (
                                            <TouchableOpacity
                                                style={styles.menuChoiceBtn}
                                                onPress={() => {
                                                    if (!hasGameStarted) {
                                                        setHasGameStarted(true);
                                                    }
                                                    setCurrentQuestionIndex(
                                                        (prevIndex) =>
                                                            prevIndex + 1
                                                    );
                                                    incrementCount(
                                                        currentQuestion.options[
                                                            index + 1
                                                        ]
                                                    );
                                                    if (
                                                        currentQuestionIndex ===
                                                        questions.length - 1
                                                    ) {
                                                        setShowResultOverlay(
                                                            true
                                                        );
                                                    }
                                                }}
                                            >
                                                <Text>
                                                    {
                                                        currentQuestion.options[
                                                            index + 1
                                                        ]
                                                    }
                                                </Text>
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                );
                            } else {
                                return null;
                            }
                        })}
                </View>
            </ScrollView>
            {showResultOverlay && (
                <ResultOverlay
                    score={count}
                    onClose={() => {
                        resetGameState();
                    }}
                />
            )}
        </SafeAreaView>
    );
};

export default GameMode;
