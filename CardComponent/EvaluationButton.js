import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

//This is the four individual evaluation buttons.
export default function EvaluationButton(props) {
  const route = useRoute();
  const stats = route.params.stats;
  const navigation = useNavigation();

  //Function that updates the statistics accordingly
  function evaluationClick(index) {
    switch (index) {
      //When User Clicks Forget
      case 0:
        stats.forgetNum++;
        stats.finished++;
        navigation.setParams({ stats: stats });
        break;

      //When User Clicks Little
      case 1:
        stats.littleNum++;
        stats.finished++;
        navigation.setParams({ stats: stats });
        break;

      //When User Clicks Much
      case 2:
        stats.muchNum++;
        stats.finished++;
        navigation.setParams({ stats: stats });
        break;

      //When User Clicks Well
      case 3:
        stats.wellNum++;
        stats.finished++;
        navigation.setParams({ stats: stats });
        break;
    }
  }

  return (
    <TouchableOpacity
      onPress={() => {
        evaluationClick(props.index);
      }}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    borderWidth: 3,
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0056D2",
    borderColor: "grey",
  },

  text: {
    fontSize: 16,
    fontWeight: "500",
    padding: 5,
    color: "white",
  },
});
