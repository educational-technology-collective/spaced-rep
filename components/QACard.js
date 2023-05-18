import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native'

export default function QACard()
{

  const [textLength, setLength] = useState(0);

  return(
    <LinearGradient style = {styles.overall} colors = {['#0056D2', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', '#0056D2']}>

    
    <View style = {styles.questionBox}>
      <Text>The Reason is That</Text>
    </View>

    <View style = {styles.textInputBox}>
      <TextInput placeholder='Type Your Response' multiline onChangeText={(value) => {setLength(value.length)}} maxLength={100}></TextInput>
      <Text style={styles.charactersCount}>Characters: {textLength}/100</Text>
    </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create(
  {
      overall:{
        flex: 1,
        flexDirection: 'column',
        
      },
      questionBox: {
        flex: 3,
        marginTop: 30,
        marginHorizontal: 20,
        borderWidth: 3,
        borderRadius: 5,
        height: 200,
        
        alignItems: 'center'
      },

      textInputBox:{
        flex: 2,
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom: 30,
        borderWidth: 3,
        borderRadius: 5,
        height: 200,
        paddingLeft: 5,
      },

      charactersCount: {
        fontWeight: '900',
        textAlign: 'right',
        marginTop: 'auto'
      }
  }
)