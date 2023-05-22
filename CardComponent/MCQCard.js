import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import SeenTimesComp from "./SeenTimesComp";
export default function MCQCard(props) {
  const [questionBoxText, setText] = useState(props.obj.content.question);

  return(
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
      <View style = {styles.questionBox}>
      <Text style={styles.questionText}>{questionBoxText}</Text>
      </View>

      <SeenTimesComp obj={props.obj} />

      

    </LinearGradient>
  );
}

const styles = StyleSheet.create({ overall: {
    flex: 1,
    flexDirection: "column",
  },
  questionBox: {
    flex: 1,
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
  },});
