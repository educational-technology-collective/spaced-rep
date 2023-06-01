import {SafeAreaView, Text, StyleSheet} from 'react-native'

export default function CollaborationBar(){
return (
  <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
    <Text style={styles.text}>Community</Text>
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