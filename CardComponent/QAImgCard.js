import QACard from "./QACard";
import {Image, View, StyleSheet} from 'react-native'

export default function QAImgCard(props)
{
  return(
    <View style = {styles.overall}>
      <View style = {styles.img}>
    <Image source={{uri: props.obj.content.imgURL}} style ={styles.image}/> 
    </View>
    <View style = {styles.card}>
    <QACard obj = {props.obj}/>
    </View>
    </View>
  )
};

const styles = StyleSheet.create({
  overall: {
    flex: 1,
  },

  img: {
    flex: 2,
    
  },

  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch'
  },

  card: {
    flex: 5,
  }
})