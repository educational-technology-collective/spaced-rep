import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
export default function EvaluationButton(props) {
  const route = useRoute();
  const stats = route.params.stats;
  const navigation = useNavigation();

  function evaluationClick(index) {
    switch (index) {
      case 0:
        stats.forgetNum++;
        stats.finished++;
        if (stats.finished !== stats.total)
          navigation.setParams({ stats: stats });
        break;

      case 1:
        stats.littleNum++;
        stats.finished++;
        if (stats.finished !== stats.total)
          navigation.setParams({ stats: stats });
        break;
      case 2:
        stats.muchNum++;
        stats.finished++;
        if (stats.finished !== stats.total)
          navigation.setParams({ stats: stats });
        break;

      case 3:
        stats.wellNum++;
        stats.finished++;
        if (stats.finished !== stats.total)
          navigation.setParams({ stats: stats });
        break;
    }
  }

  function onPressHandler() {
    evaluationClick(props.index);
    props.nextCard();
  }

  return (
    <TouchableOpacity onPress={onPressHandler}>
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
    fontFamily: "Verdana",
    padding: 5,
    color: "white",
  },
});
