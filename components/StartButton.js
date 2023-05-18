import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function StartButton(props) {
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate("LearnScreenCard");
  }

  if (!props.finished) {
    return (
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.button}>
          <Text style={styles.text}>Review Cards</Text>
        </View>
      </TouchableOpacity>
    );
  }
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
