import {View, Text, StyleSheet} from 'react-native'

export default function ProgressBar(props)
{
    return(
      <View style = {styles.box}>
        <Text style = {styles.headingText}>Today's Task</Text>
       <Text style = {styles.groupText}>
          <Text style={styles.numberText}>{props.number}  </Text>
          <Text style = {styles.reaminingText}>remaining cards</Text>
       </Text>
      </View>
    );
};

const styles = StyleSheet.create(
  {
     box: {
        borderRadius: 20,
        height: 180,
        borderWidth: 5,
        marginHorizontal: 35,
        paddingLeft: 20,
        paddingTop: 15,
     },

     headingText: {
      fontSize: 25,
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: '#0056D2'
     },

     groupText:{
      marginTop: 30,
      alignSelf: 'center',
     },

     numberText:{
      fontSize: 30,
      textDecorationLine: 'underline',
     },

     reaminingText:
     {
        fontSize: 20,
        color: '#48A9A6',
        fontWeight: 600
     }
  }
)