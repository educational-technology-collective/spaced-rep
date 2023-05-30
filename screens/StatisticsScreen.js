import {View, Text, StyleSheet} from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import IndicationBlock from '../StatisticsComp/IndicationBlock';


export default function StatisticsScreen()
{
  const navigation = useNavigation();
  const route = useRoute();

//  navigation.navigate('LearnScreenMain');

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
    <View style = {styles.completeTextView}>
    <Text style = {styles.completeText}>You Have Completed</Text>
    </View> 
    <Text style = {styles.groupText}>
      <Text style = {styles.numberText}>{route.params.stats.finished}</Text>
      <Text style = {styles.cardText}> Cards</Text>
    </Text>

    <View>
      <Text>Review Indication: </Text>
    <IndicationBlock />
    </View>
    </LinearGradient>

  )
};

const styles = StyleSheet.create({
  overall: {
    flex: 1,
    flexDirection: 'column'
  },


  groupText:{
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'center'
  },

  completeTextView:
  {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  completeText:{
    fontSize: 30,
    fontWeight: '800',
    fontFamily: 'Verdana',
    alignSelf: 'center',
    justifyContent: 'center'
  },

  numberText:{
    fontSize: 30,
    fontWeight: '800',
    fontFamily: 'Verdana',
    textDecorationLine: 'underline',
    color: "#0056D2",
  },

  cardText:{
    fontSize: 30,
    fontWeight: '800',
    fontFamily: 'Verdana',
  }


})

