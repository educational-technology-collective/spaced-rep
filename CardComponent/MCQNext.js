import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function MCQNext(){

  return(
    <TouchableOpacity style={styles.nextOverall} onPress={() => {}}>
      <View style={styles.nextContainer}>
        <Text style={styles.text}>Continue</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    nextOverall:{
      flex: 2,
      justifyContent: 'center'
    },

    nextContainer:{
      borderRadius: 20,
      borderWidth: 2,
      backgroundColor: "#0056D2",
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      marginHorizontal: 20
    },

    text:{
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white'
    }
})