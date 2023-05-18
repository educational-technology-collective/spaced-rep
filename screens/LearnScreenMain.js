import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import Streak from "../components/Streak";
import ProgressBar from "../components/ProgressBar"
import { StyleSheet, View, Text } from "react-native";
import StartButton from "../components/StartButton";
import IntroName from "../components/IntroName";
import { LinearGradient } from 'expo-linear-gradient';


export default function LearnScreenMain() {
  return (
    <LinearGradient style={styles.container} colors={['#0056D2', 'white', 'white', 'white', '#0056D2']}>
      
      <View style={styles.top}>
        <TopBar />
      </View>

      <View style={styles.intro}>
        <IntroName name = 'Haytham'/>
      </View>

      <View style = {styles.streak}>
       <Streak number = {3} />
      </View>

      <View style = {styles.progressBar}>
        <ProgressBar number={40} width = {'60%'}/>
      </View>

      <View style = {styles.button}>
        <StartButton finished = {false}/>
      </View>

    </LinearGradient>
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

  intro:{
    flex: 1,
    justifyContent: 'center'
  },

  streak: {
    flex: 2,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems:'center'
  },

  progressBar: {
    flex: 3,
    justifyContent: 'center'

  },

  button:{
    flex: 3,
    justifyContent: 'center'
  }
});
