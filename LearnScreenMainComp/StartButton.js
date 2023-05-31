import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function StartButton(props) {
  const navigation = useNavigation();

  //This handler will jump to learning cards when cards are not all finished
  function reviewCardHandler() {
    navigation.navigate("LearnScreenCard");
  }

  //This handler will jump to statistics page when cards finished
  function statisticsHandler() {
    navigation.navigate("StatisticsScreen");
  }

  //Conditional Statements that will decide whether the button should jump to
  //cards or to the statistics page
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
        <Text style={styles.text}>Today's Summary</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
});
