import { createStackNavigator } from "@react-navigation/stack";
import LearnScreenMain from "./LearnScreenMain";
import LearnScreenCard from "./LearnScreenCard";
import CardHeader from "../components/CardHeader";

export default function LearnScreen()
{
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator>
      <Stack.Screen name = 'LearnScreenMain' component = {LearnScreenMain} options={{headerShown: false}}/>
      <Stack.Screen name = 'LearnScreenCard' component = {LearnScreenCard} options={{header: () => <CardHeader done = {20} total = {30}/>}}/>
    </Stack.Navigator>
  )
};