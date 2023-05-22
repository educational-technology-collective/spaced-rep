import { View, Text, StyleSheet } from "react-native";
import EvaluationButton from "./EvaluationButton";

export default function SelfEvaluation() {
  return (
    <View style={styles.evaluationContainer}>
      <Text style={styles.headerText}>Confidence Level Indication</Text>
      <View style={styles.buttons}>
        <EvaluationButton text="Forget" />
        <EvaluationButton text="Little" />
        <EvaluationButton text="Much" />
        <EvaluationButton text="Well" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  evaluationContainer: {
    flex: 1,
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
