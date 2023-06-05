import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import SeenTimesComp from "./SeenTimesComp";
import SelfEvaluation from "./SelfEvaluation";
import CorrectCard, { correctStyles } from "./CorrectCard";
import IncorrectCard from "./IncorrectCard";
import MCQNext from "./MCQNext";
export default function MCQCard(props) {
  const [showEval, setEval] = useState(false);

  const [correctStyle, setCorrectStyle] = useState(correctStyles.answerBox);

  //This helps setting the correctBox to green color when triggered
  function setCorrectFunc() {
    setEval(true);
    setCorrectStyle(correctStyles.correctBox);
  }

  //Function to shuffle the choices of the array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate random number
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  const [randomArray, setRandomArray] = useState([]);

  //This just makes the choices shuffle only once. And not change after clicking
  useEffect(
    function () {
      setRandomArray(shuffleArray(props.obj.content.answer));
    },
    [props.obj.content.answer]
  );

  //Used DCBA twice because React Native renders the object twice
  const letterArray = ["D", "C", "B", "A", "D", "C", "B", "A"];

  //Function that renders the components when using the FlatList
  function renderChoice(item) {
    return item.isCorrect ? (
      <CorrectCard
        letter={letterArray.pop()}
        correctBoxStyle={correctStyle}
        choice={item}
        setCorrectHandler={setCorrectFunc}
        showEval={showEval}
      />
    ) : (
      <IncorrectCard
        setCorrectHandler={setCorrectFunc}
        letter={letterArray.pop()}
        choice={item}
        showEval={showEval}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.overall}
      colors={[
        "#0056D2",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "white",
        "#0056D2",
      ]}
    >
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>{props.obj.content.question}</Text>
      </View>

      <SeenTimesComp obj={props.obj} />

      <View style={styles.allChoices}>
        <FlatList
          data={randomArray}
          renderItem={({ item }) => renderChoice(item)}
        />
      </View>

      {/* This is to show the evaluation buttons after user made choice */}
      {showEval ? <MCQNext /> : null}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  overall: {
    flex: 1,
    flexDirection: "column",
  },
  questionBox: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 20,
    borderWidth: 3,
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },

  questionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  allChoices: {
    flex: 3,
    justifyContent: "flex-start",
    marginTop: 15,
  },
});
