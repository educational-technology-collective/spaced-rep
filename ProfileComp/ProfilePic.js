import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function ProfilePic()
{
  return (
    <View style={imageUploaderStyles.container}>
       
            <View style={imageUploaderStyles.uploadBtnContainer}>
                <TouchableOpacity onPress={() => {}} style={imageUploaderStyles.uploadBtn} >
                    <Text> Image</Text>
                    {/* <AntDesign name="camera" size={20} color="black" /> */}
                </TouchableOpacity>
            </View>
    </View>
);
};

const imageUploaderStyles=StyleSheet.create({
  container:{
      elevation:2,
      height:130,
      width:130,
      backgroundColor:'#efefef',
      position:'relative',
      borderRadius:999,
      overflow:'hidden',
      alignSelf: 'center',
  },
  uploadBtnContainer:{
      opacity:0.7,
      position:'absolute',
      right:0,
      bottom:0,
      backgroundColor:'lightgrey',
      width:'100%',
      height:'25%',
  },
  uploadBtn:{
      display:'flex',
      alignItems:"center",
      justifyContent:'center'
  }
})