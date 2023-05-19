import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function EvaluationButton(props) {
  return (
    <TouchableOpacity onPress={() => {}}>
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
