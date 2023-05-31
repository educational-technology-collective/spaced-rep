import { createStackNavigator } from "@react-navigation/stack";
import LearnScreenMain from "./LearnScreenMain";
import LearnScreenCard from "./LearnScreenCard";
import CardHeader from "../CardComponent/CardHeader";
import { useState } from "react";
import StatisticsScreen from "./StatisticsScreen";
import StatisticsHeader from "../StatisticsComp/StatisticsHeader";
import { cardCollection } from "../exampleData";

export default function LearnScreen() {
  const Stack = createStackNavigator();

  const [stats, setStats] = useState({
    total: cardCollection.length,
    finished: 0,
    forgetNum: 0,
    littleNum: 0,
    muchNum: 0,
    wellNum: 0,
  });

  return (
    <Stack.Navigator>
      {/* Stack Navigator that jumps between screens */}

      {/* Main Page, which is also the default page */}
      <Stack.Screen
        name="LearnScreenMain"
        component={LearnScreenMain}
        options={{ headerShown: false }}
        initialParams={{ stats: stats }}
      />

      {/* Each Individual Card Page as you go through */}
      <Stack.Screen
        name="LearnScreenCard"
        component={LearnScreenCard}
        options={{ header: () => <CardHeader /> }}
        initialParams={{ stats: stats }}
      />

      {/* The Statistics Page */}
      <Stack.Screen
        name="StatisticsScreen"
        component={StatisticsScreen}
        options={{ header: () => <StatisticsHeader /> }}
        initialParams={{ stats: stats }}
        back
      />
    </Stack.Navigator>
  );
}
