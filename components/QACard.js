import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SelfEvaluation from "./SelfEvaluation";
import SeenTimesComp from "./SeenTimesComp";
import InputBox from "./InputBox";

export default function QACard(props) {
  const [questionBoxText, setText] = useState(props.obj.content.question);

  const [showEval, setEval] = useState(false);

  const [isQuestion, setIsQuestion] = useState(true);

  function flipCard() {
    setEval(true);
    isQuestion
      ? setText(props.obj.content.answer)
      : setText(props.obj.content.question);
    setIsQuestion(!isQuestion);
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
      <TouchableOpacity onPress={flipCard} style={styles.questionBox}>
        <Text style={styles.questionText}>{questionBoxText}</Text>
      </TouchableOpacity>

      {/* Component For How Many Times Have Seen */}
      <SeenTimesComp obj={props.obj} />

      {/* Component For the TextInput Box */}
      <InputBox />

      {/* Component For the Four Levels of Indication Section */}
      <View style={styles.modal}>{showEval ? <SelfEvaluation /> : null}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  overall: {
    flex: 1,
    flexDirection: "column",
  },
  questionBox: {
    flex: 2,
    marginTop: 30,
    marginHorizontal: 20,
    borderWidth: 3,
    borderRadius: 5,
    height: 150,

    alignItems: "center",
  },

  questionText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  modal: {
    flex: 2,
  },

  confidenceLevel: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    fontFamily: "Verdana",
  },

  buttonView: {
    flexDirection: "row",
  },
});
