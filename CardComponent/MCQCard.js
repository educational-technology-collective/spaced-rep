import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import SeenTimesComp from "./SeenTimesComp";
import MCQIndChoice from "./MCQIndChoice";
import EvaluationButton from "./EvaluationButton";
import SelfEvaluation from "./SelfEvaluation";
export default function MCQCard(props) {

  const [showEval, setEval] = useState(false);
  

  
  function choiceHandler()
  {
      setEval(true);
      
  }

  

  return(
    <LinearGradient
    style={styles.overall}
    colors={[
      "#0056D2",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "#0056D2",
    ]}
  >
      <View style = {styles.questionBox}>
      <Text style={styles.questionText}>{props.obj.content.question}</Text>
      </View>

      <SeenTimesComp obj={props.obj} />

      <View style = {styles.allChoices}>
  <TouchableOpacity style ={styles.answerBox}>
    <Text style = {styles.text}>
      <Text style = {{color: "#0056D2"}}>A. </Text>
      <Text style = {styles.hangingText}>{props.obj.content.answer[0].option} </Text>
    </Text>
  </TouchableOpacity>
  <TouchableOpacity style ={styles.answerBox}>
  <Text style = {styles.text}>
      <Text style = {{color: "#0056D2"}}>B. </Text>
      <Text style = {styles.hangingText}>{props.obj.content.answer[1].option} </Text>
    </Text>
</TouchableOpacity>
<TouchableOpacity style ={styles.correctBox}>
<Text style = {styles.text}>
      <Text style = {{color: "#0056D2"}}>C. </Text>
      <Text style = {styles.hangingText}>{props.obj.content.answer[2].option} </Text>
    </Text>
</TouchableOpacity>
<TouchableOpacity style ={styles.answerBox}>
<Text style = {styles.text}>
      <Text style = {{color: "#0056D2"}}>D. </Text>
      <Text style = {styles.hangingText}>{props.obj.content.answer[3].option} </Text>
    </Text>
</TouchableOpacity>
</View>

      {showEval ? <SelfEvaluation /> : null }

    </LinearGradient>
  );
}

const styles = StyleSheet.create({ overall: {
    flex: 1,
    flexDirection: "column",
  },
  questionBox: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 20,
    borderWidth: 3,
    borderRadius: 5,
    height: 150,

    alignItems: "center",
  },

  questionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  allChoices:{
    flex: 3,
    justifyContent: 'flex-start',
    marginBottom: 15,
    
  },
  answerBox: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 3,
    marginHorizontal: 20,
    marginTop: 5,
    
  },


  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },});
