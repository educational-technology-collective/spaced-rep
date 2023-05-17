import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import LearnScreen from "./screens/LearnScreen";
import CollaborationScreen from "./screens/CollaborationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    //This is the Container For the Whole App
    <NavigationContainer>
      <Tab.Navigator
      activeColor="#F3B3A6"
      inactiveColor="#FDFEFE"
      safeAreaInsets={{bottom: 5}}
      barStyle={{backgroundColor: '#0056D2'}}
      screenOptions={({route}) => ({
        //This is for the icons of each screen
        tabBarIcon: ({focused, color='blue', size}) => {
          let iconName;

          if(route.name === 'Learn')
          {
            iconName = 'clipboard-list';
          }
          else if(route.name === 'Collaboration')
          {
            iconName = 'users';
          }
          else if(route.name === 'Profile')
          {
            iconName = 'user-secret';
          }
          return <FontAwesome5 name = {iconName} size = {25} color = {focused ? '#7B9E87' : 'black'} />
        },
        
      })}
     >
        <Tab.Screen name="Learn" component={LearnScreen}/>

        <Tab.Screen name="Collaboration" component={CollaborationScreen} />

        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

})
