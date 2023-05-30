import { View, Text, StyleSheet } from "react-native";

export default function IndicationBlock(props) {
  return (
    <View style={styles.borderView}>
      <Text style={styles.textInside}>{props.emoji}</Text>
      <Text style={styles.textInside}>{props.text}</Text>
      <Text style={styles.textInside}>{props.number} cards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  borderView: {
    borderRadius: 3,
    borderWidth: 4,
    height: 100,
    width: 95,
    alignItems: "center",
    borderColor: "#0056D2",
  },

  textInside: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "500",
    padding: 2,
  },
});
