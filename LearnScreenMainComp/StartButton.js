import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function StartButton(props) {
  const navigation = useNavigation();

  function reviewCardHandler() {
    navigation.navigate("LearnScreenCard");
  }

  function statisticsHandler() {
    navigation.navigate("StatisticsScreen");
  }

  if (!props.finished) {
    return (
      <TouchableOpacity onPress={reviewCardHandler}>
        <View style={styles.button}>
          <Text style={styles.text}>Review Cards</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={statisticsHandler}>
      <View style={styles.button}>
        <Text style={styles.text}>Today's Statistics</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    height: 60,
    marginHorizontal: 60,
    backgroundColor: "#0056D2",
    borderRadius: 20,
  },

  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Times New Roman",
  },
});
