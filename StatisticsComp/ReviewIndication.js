import {View, Text, StyleSheet} from 'react-native'
import IndicationBlock from './IndicationBlock'

export default function ReviewIndication()
{

  return(
    <View>
    <Text style = {styles.text}>Review Indication: </Text>
    <Text></Text>
    <View style = {styles.blocks}>
      <IndicationBlock emoji = '🙁' text = 'You Forget'/>
      <IndicationBlock emoji = '😐' text = 'Know Little'/>
      <IndicationBlock emoji = '😅' text = 'Know Much'/>
      <IndicationBlock emoji = '😀' text = 'Know Well'/>
    </View>
    </View>
  )

};

const styles = StyleSheet.create({
  blocks: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  text: {
    fontSize: 30,
    fontWeight: '600',
    color: '#AA4465',
    textAlign: 'center'
  }
})