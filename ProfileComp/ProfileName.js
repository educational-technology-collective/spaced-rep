import {View, Text, StyleSheet} from 'react-native'
import { AntDesign, Fontisto} from '@expo/vector-icons';
export default function ProfileName(props)
{
  return(
  <View style = {styles.container}>
    <Text>Name  <Fontisto name='person' size={20} /></Text>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
})

