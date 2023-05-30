import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function StatisticsHeader()
{
  const navigation = useNavigation();

  function backHandler() {
    navigation.navigate("LearnScreenMain");
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View>
        {/* For the Back Arrow to go back to main page */}
        <TouchableOpacity onPress={backHandler}>
          <Text style={styles.back}>
            <FontAwesomeIcon name={"long-arrow-left"} size={20} /> Back
          </Text>
        </TouchableOpacity>
      </View>
       <View style={styles.textView}>
        <Text style={styles.text}>
         Summary
        </Text> 
      </View> 
    </SafeAreaView>
  );
};


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
  
  textView: {
    marginLeft: 155
  },
});


