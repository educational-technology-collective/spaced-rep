import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//This is just the Profile & Settings Bar
export default function ProfileBar() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <Text style={styles.text}>Profile & Settings</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
