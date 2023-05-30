import { View, Text, StyleSheet } from "react-native";
import EvaluationButton from "./EvaluationButton";

export default function SelfEvaluation(props) {
  return (
    <View style={styles.evaluationContainer}>
      <Text style={styles.headerText}>Confidence Level Indication</Text>
      <View style={styles.buttons}>
        <EvaluationButton text="Forget" index={0} nextCard={props.nextCard} />
        <EvaluationButton text="Little" index={1} nextCard={props.nextCard} />
        <EvaluationButton text="Much" index={2} nextCard={props.nextCard} />
        <EvaluationButton text="Well" index={3} nextCard={props.nextCard} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  evaluationContainer: {
    flex: 2,
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "#0056D2",
    fontFamily: "Verdana",
    textAlign: "center",
  },

  buttons: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
});
