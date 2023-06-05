import { View, Text, StyleSheet } from "react-native";
import EvaluationButton from "./EvaluationButton";

//Component Containing Four Buttons of Self-Evaluation
export default function SelfEvaluation() {
  return (
    <View style={styles.evaluationContainer}>
      <Text style={styles.headerText}>Confidence Level Indication</Text>
      <View style={styles.buttons}>
        {/* Button For Forget */}
        <EvaluationButton text="Forget" index={0} />

        {/* Button for Little */}
        <EvaluationButton text="Little" index={1} />

        {/* Button for Much */}
        <EvaluationButton text="Much" index={2} />

        {/* Button for Well */}
        <EvaluationButton text="Well" index={3} />
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
    textAlign: "center",
  },

  buttons: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
});
