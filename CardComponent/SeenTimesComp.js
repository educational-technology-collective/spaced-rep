import { Text, StyleSheet, Keyboard, Pressable } from "react-native";

//Component that displays the number of times the user has seen the card
export default function SeenTimesComp(props) {
  return (
    <Pressable
      style={styles.seenTimes}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Text style={styles.seenText}>
        You have seen this {props.obj.seenTimes} times
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  seenTimes: {
    flex: 1,
    justifyContent: "center",
  },

  seenText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
    right: 5,
  },
});
