import { View, Text, StyleSheet } from "react-native";

export default function IntroName(props) {
  return <Text style={styles.text}>Hey, {props.name}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Verdana",
    alignSelf: "center",
  },
});
