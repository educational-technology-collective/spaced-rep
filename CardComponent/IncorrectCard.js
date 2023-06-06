import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useState } from "react";

//A separate component for the incorrectcard component. Just with Red Color when pressed
export default function IncorrectCard(props) {
  const [boxStyle, setStyle] = useState(styles.answerBox);
  function onPressHandler() {
    props.setCorrectHandler();
    setStyle(styles.incorrectBox);
  }
  return (
    <TouchableOpacity
      style={boxStyle}
      onPress={onPressHandler}
      disabled={props.showEval}
    >
      <Text style={styles.text}>
        <Text style={{ color: "#0056D2" }}>{props.letter}. </Text>
        <Text>{props.choice.option} </Text>
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  answerBox: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 3,
    marginHorizontal: 20,
    marginTop: 4,
    marginBottom: 4,
  },

  incorrectBox: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 3,
    marginHorizontal: 20,
    marginTop: 5,
    backgroundColor: "#FF7477",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",

    padding: 15,
  },
});
