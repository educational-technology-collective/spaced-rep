import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

//The LearnScreenCard Header with Back Arrow and Numbert of Cards Finished
export default function CardHeader() {
  const navigation = useNavigation();
  const route = useRoute();
  const stats = route.params.stats;
  function backHandler() {
    navigation.navigate("LearnScreenMain");
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.backView}>
        {/* For the Back Arrow to go back to main page */}
        <TouchableOpacity onPress={backHandler}>
          <Text style={styles.back}>
            <FontAwesomeIcon name={"long-arrow-left"} size={20} /> Back
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>
          {stats.finished} / {stats.total} cards
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  container: {
    backgroundColor: "#0056D2",
    flexDirection: "row",
  },
  back: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    left: 10,
  },
  backView: {
    flex: 1,
  },
  textView: {
    flex: 1,
    alignItems: "flex-end",
  },
});
