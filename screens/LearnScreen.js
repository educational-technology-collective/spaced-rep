import { createStackNavigator } from "@react-navigation/stack";
import LearnScreenMain from "./LearnScreenMain";
import LearnScreenCard from "./LearnScreenCard";
import CardHeader from "../CardComponent/CardHeader";
import { useState } from "react";

export default function LearnScreen() {
  const Stack = createStackNavigator();

  const [stats, setStats] = useState({
    total: 40,
    finished: 10,
    forgetNum: 0,
    littleNum: 0,
    muchNum: 0,
    wellNum: 0,
  });

  function evaluationClick(index) {
    
    
    switch (index) {
      case 0:
        setStats({...stats, forgetNum: stats.forgetNum + 1, finished: stats.finished + 1});
        break;

      case 1:
        setStats({...stats, littleNum: stats.littleNum + 1, finished: stats.finished + 1});
        break;
      case 2:
        setStats({...stats, muchNum: stats.muchNum + 1, finished: stats.finished + 1});
        break;

      case 3:
        setStats({...stats, wellNum: stats.wellNum + 1, finished: stats.finished + 1});
        break;
    };
  }

  return (
    <Stack.Navigator>
      {/* Stack Navigator that jumps to card screen from main screen */}
      <Stack.Screen
        name="LearnScreenMain"
        component={LearnScreenMain}
        options={{ headerShown: false }}
        initialParams={{stats: stats}}
      />
      <Stack.Screen
        name="LearnScreenCard"
        component={LearnScreenCard}
        options={{ header: () => <CardHeader /> }}
        initialParams={{stats: stats, chooseLevel: {evaluationClick}}}
      />
    </Stack.Navigator>
  );
}
