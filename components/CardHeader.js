import {View, Text, SafeAreaView, StyleSheet, Pressable, Touchable, TouchableOpacity, Button} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
export default function CardHeader(props)
{
  const navigation = useNavigation();
  function backHandler()
  {
    navigation.navigate('LearnScreenMain');
  };

  return(
    <SafeAreaView style = {styles.container} edges={['top', 'left', 'right']}>
    <View style = {styles.backView}>
    <TouchableOpacity onPress={backHandler}>
     <Text style = {styles.back}><FontAwesomeIcon name = {'long-arrow-left'} size = {20}/> Back</Text>
    </TouchableOpacity>
    </View>
    <View style = {styles.textView}>
      <Text style = {styles.text}>{props.done} / {props.total} cards</Text>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
      text: {
        
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
      },
      container: {
        backgroundColor: '#0056D2',
        flexDirection: 'row',
      },
      back:{  
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        left: 10,
        
      },
      backView: {
        flex: 1,
      },
      textView: {
        flex: 1,
        alignItems: 'flex-end',
      }
      
  }
)