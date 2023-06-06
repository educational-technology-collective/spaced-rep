import {View, Text, StyleSheet} from 'react-native'
import CollaborationBar from '../CollaborationComp/CollaborationBar';
import { LinearGradient } from 'expo-linear-gradient';

export default function CollaborationScreen()
{
  return(
    <LinearGradient
    style={styles.overall}
    colors={["#0056D2", "white", "white", "white", "#0056D2"]}
  >
    
      <View style = {styles.top}>
        <CollaborationBar />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  overall: {
    flex: 1,
  },
  top: {
    backgroundColor: "#0056D2",
  },
})