import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import Streak from "../components/Streak";
import ProgressBar from "../components/ProgressBar"
import { StyleSheet, View, Text } from "react-native";

export default function LearnScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TopBar />
      </View>

      <View style = {styles.streak}>
       <Streak number = {2} />
      </View>

      <View style = {styles.progressBar}>
        <ProgressBar number={40}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  top: {
    flex: 1,
    backgroundColor: "#0056D2",
  },

  streak: {
    flex: 4,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems:'center'
  },

  progressBar: {
    flex: 5,
    justifyContent: 'center'

  }
});
