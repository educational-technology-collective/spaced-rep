import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import {useState} from 'react'

export default function MCQIndChoice(props)
{
  const [boxStyle, setStyle] = useState(styles.answerBox);
  function onPressHandler()
  {
    props.choiceHandler();
    if(props.isCorrect)
    {
      setStyle(styles.correctBox);
    }
    else
    {
      setStyle(styles.incorrectBox);
      
    }
  }
  return (
  <TouchableOpacity style = {boxStyle} onPress = {onPressHandler}>
    <Text style = {styles.text}>
      <Text style = {{color: "#0056D2"}}>{props.letter}. </Text>
      <Text >{props.choice.option} </Text>
    </Text>
  </TouchableOpacity>

  )
};

const styles = StyleSheet.create({
  allChoices:{
    flex: 3,
    justifyContent: 'flex-start'
    
  },

  answerBox: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 3,
    marginHorizontal: 20,
    marginTop: 4,
    marginBottom: 4,
  },

  correctBox: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 3,
    marginHorizontal: 20,
    marginTop: 5,
    backgroundColor: '#84DCC6'
  },

  incorrectBox: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 3,
    marginHorizontal: 20,
    marginTop: 5,
    backgroundColor: '#FF7477'
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
 


})