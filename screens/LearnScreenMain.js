import TopBar from "../LearnScreenMainComp/TopBar";
import ProgressBar from "../LearnScreenMainComp/ProgressBar";
import { StyleSheet, View } from "react-native";
import StartButton from "../LearnScreenMainComp/StartButton";
import IntroName from "../LearnScreenMainComp/IntroName";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from '@react-navigation/native';

export default function LearnScreenMain() {
  
  const route = useRoute();

  return (
    <LinearGradient
      style={styles.container}
      colors={["#0056D2", "white", "white", "white", "#0056D2"]}
    >
      {/* Top Bar With the App Name */}
      <View style={styles.top}>
        <TopBar />
      </View>

      {/* Welcoming Message for the user */}
      <View style={styles.intro}>
        <IntroName name="Haytham" />
      </View>

      {/* Streak that is not used right now */}
      {/* <View style = {styles.streak}>
       <Streak number = {3} />
      </View> */}

      {/* The Progress Bar Portion */}
      <View style={styles.progressBar}>
        <ProgressBar number={route.params.stats.total - route.params.stats.finished} width={"60%"} />
      </View>

      {/* The Button used to jump to the card screen */}
      <View style={styles.button}>
        <StartButton finished={false}/>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  top: {
    flex: 1,
    backgroundColor: "#0056D2",
  },

  intro: {
    flex: 2,
    justifyContent: "center",
  },

  streak: {
    flex: 2,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  progressBar: {
    flex: 4,
    justifyContent: "center",
  },

  button: {
    flex: 4,
    justifyContent: "center",
  },
});
