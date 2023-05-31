import { View, Text, StyleSheet } from "react-native";

export default function IndicationBlock(props) {
  const styles = StyleSheet.create({
    borderView: {
      borderRadius: 3,
      borderWidth: 4,
      height: 100,
      width: 95,
      alignItems: "center",
      borderColor: "#0056D2",
      backgroundColor: props.red ? "#FF7477" : "#84DCC6", //This Depends on Props.red with given formula
    },

    textInside: {
      marginTop: 4,
      fontSize: 14,
      fontWeight: "500",
      padding: 2,
    },
    textEmoji: {
      marginTop: 4,
      fontSize: 25,
      padding: 1,
    },
  });

  //Each Individual Indication Level Block
  return (
    <View style={styles.borderView}>
      <Text style={styles.textEmoji}>{props.emoji}</Text>
      <Text style={styles.textInside}>{props.text}</Text>
      <Text style={styles.textInside}>{props.number} cards</Text>
    </View>
  );
}
