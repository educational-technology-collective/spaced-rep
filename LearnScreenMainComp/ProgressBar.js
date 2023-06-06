import { View, Text, StyleSheet, Animated } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function ProgressBar() {
  const route = useRoute();
  const stats = route.params.stats;

  //This is to determine the proportion of progress bar to be filled
  let wi = stats.finished / stats.total;
  wi = wi.toFixed(2);
  wi *= 100;
  //Convert the progress to string with percent
  const widthPercent = wi.toString() + "%";

  return (
    // This is the Layout of the Progress Bar Portion with Texts
    <View style={styles.box}>
      <Text style={styles.headingText}>Today's Task 📚</Text>
      <Text style={styles.groupText}>
        <Text style={styles.numberText}>{stats.total - stats.finished} </Text>
        <Text style={styles.reaminingText}>Remaining Cards 🎴</Text>
      </Text>

      {/* This is the actual bar */}
      <View style={styles.bar}>
        <Animated.View
          style={[
            { backgroundColor: "green", width: widthPercent },
            StyleSheet.absoluteFill,
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 20,
    height: 180,
    borderWidth: 5,
    marginHorizontal: 35,
    paddingTop: 15,
  },

  headingText: {
    paddingLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#0056D2",
  },

  groupText: {
    marginTop: 30,
    alignSelf: "center",
  },

  numberText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#614344",
    textDecorationLine: "underline",
  },

  reaminingText: {
    fontSize: 23,
    fontWeight: 600,
  },

  bar: {
    height: 15,
    marginTop: 30,
    width: "100%",
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 1,
    marginRight: 1,
  },
});
