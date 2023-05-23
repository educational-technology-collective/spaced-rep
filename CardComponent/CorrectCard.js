import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import {useState} from 'react'

export default function CorrectCard(props)
{
  
  return (
  <TouchableOpacity style = {props.correctBoxStyle} onPress = {props.setCorrectHandler} disabled={props.showEval}>
    <Text style = {correctStyles.text}>
      <Text style = {{color: "#0056D2"}}>{props.letter}. </Text>
      <Text >{props.choice.option} </Text>
    </Text>
  </TouchableOpacity>

  )
};

export const correctStyles = StyleSheet.create({

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
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15
  },
})