import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { Text, StyleSheet } from "react-native";
export default function Streak(props) {
  return (
    <Text style={styles.texts}>
      Streak Days: {props.number}{" "}
      <FontAwesome5Icon name="fire-alt" color="red" size={25} />
    </Text>
  );
}

const styles = StyleSheet.create({
  texts: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Verdana",
  },
});
