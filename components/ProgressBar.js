import {View, Text, StyleSheet, Animated} from 'react-native'

export default function ProgressBar(props)
{
   const wi = props.width;
    return(
     
      <View style = {styles.box}>
        <Text style = {styles.headingText}>Today's Task 📚</Text>
       <Text style = {styles.groupText}>
          <Text style={styles.numberText}>{props.number}  </Text>
          <Text style = {styles.reaminingText}>Remaining Cards 🎴</Text>
       </Text>
      
       <View style={styles.bar}>  
         <Animated.View style={[{backgroundColor: 'green', width: wi}, StyleSheet.absoluteFill]} />
       </View>

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
        paddingTop: 15,
     },

     headingText: {
      paddingLeft: 20,
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
      fontWeight: 'bold',
      color: '#614344',
      textDecorationLine: 'underline',
     },

     reaminingText:
     {
        fontSize: 23,
        fontWeight: 600
     },

     bar:{
      height: 15,
      marginTop: 30,
      width: '100%',
      backgroundColor: 'white',
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 5,
      marginLeft: 1,
      marginRight: 1
     },
  }
)