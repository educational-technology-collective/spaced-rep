import { View, Text, StyleSheet } from "react-native";

export default function SeenTimesComp(props) {
  return (
    <View style={styles.seenTimes}>
      <Text style={styles.seenText}>
        You have seen this {props.obj.seenTimes} times
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  seenTimes: {
    flex: 1,
    justifyContent: 'center'
  },

  seenText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
    right: 5,
  },
});
