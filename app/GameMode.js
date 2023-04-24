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

import questionsData from "./assests/questionsData.json";
import ResultOverlay from "./components/tooltip/ResultOverlay";

import GameContext from "./GameContext";

const GameMode = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { category } = route.params || {};

    // // Add states for questions and the current question index
    // const [questions, setQuestions] = React.useState([]);
    // const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

    // // Get the current question and choices
    // const currentQuestion = questions[currentQuestionIndex];
    // const choices = currentQuestion ? currentQuestion.choices : [];

    // // Add a state for the count
    // const [count, setCount] = React.useState(0);

    // // Function to update the count
    // const incrementCount = () => {
    //     setCount((prevCount) => prevCount + 1);
    // };

    // // Fetch questions from the API based on the selected category
    // const fetchQuestions = async (category) => {
    //     try {
    //         const response = await fetch(
    //             `https://your-api-endpoint/questions?category=${category}&limit=10`
    //         );
    //         const data = await response.json();
    //         setQuestions(data);
    //     } catch (error) {
    //         console.error("Error fetching questions:", error);
    //     }
    // };

    const [showResultOverlay, setShowResultOverlay] = React.useState(false);

    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const currentQuestion = questionsData.questions[currentQuestionIndex];
    const [count, setCount] = React.useState(0);

    const incrementCount = (selectedAnswer) => {
        if (selectedAnswer === currentQuestion.answer) {
            setCount((prevCount) => prevCount + 1);
        }
    };

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

    // const [isPaused, setIsPaused] = React.useState(false);
    // const handlePause = () => {
    //     setIsPaused(!isPaused);
    //     console.log(isPaused);
    // };

    // React.useEffect(() => {
    //     if (category) {
    //         console.log("Selected category:", category);
    //         // Fetch questions when the category is selected
    //         fetchQuestions(category);
    //     }
    // }, [category]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView scrollEnabled={false}>
                <View style={styles.dividerContainer}>
                    <Background />
                </View>
                <View style={styles.info}>
                    <View style={{ alignSelf: "flex-start" }}>
                        <Timer
                            isTimerActive={
                                hasGameStarted &&
                                !showResultOverlay &&
                                !isPaused
                            }
                        />
                    </View>
                    <View style={{ alignSelf: "flex-end" }}>
                        <Counter count={count} />
                    </View>
                    {/* <TouchableOpacity onPress={handlePause}>
                        {isPaused ? <PlayScreen /> : <PausedScreen />}
                    </TouchableOpacity> */}
                </View>
                <View style={styles.earth}>
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
                    {/* Pass the count and incrementCount function to the Counter component */}
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
                                                    currentQuestionIndex === 9
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
                                                        9
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
