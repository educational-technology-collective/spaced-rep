import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import ReviewIndication from "../StatisticsComp/ReviewIndication";
import { useEffect } from "react";

export default function StatisticsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const stats = route.params.stats;

  //This allows swipe back to the main page instead of a previous card
  //Not useful right now as swipe is disabled
  // useEffect(() => {
  //   const { routes } = navigation.getState();

  //   const filteredRoutes = routes.filter(
  //     (route) => route.name !== "LearnScreenCard"
  //   );

  //   navigation.reset({
  //     index: filteredRoutes.length - 1,
  //     routes: filteredRoutes,
  //   });
  // }, []);

  return (
    <LinearGradient
      style={styles.overall}
      colors={[
        "#0056D2",
        "white",
        "white",
        "white",
        "white",
        "white",
        "#0056D2",
      ]}
    >
      {/* For the Number of Cards Complete Text */}
      <View style={styles.completeTextView}>
        <Text style={styles.completeText}>You Have Completed</Text>
        <Text></Text>
      </View>
      <Text style={styles.groupText}>
        <Text style={styles.numberText}>{stats.finished}</Text>
        <Text style={styles.cardText}> Cards</Text>
      </Text>

      {/* For the 4 Indication Blocks */}
      <View style={styles.indication}>
        <ReviewIndication />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  overall: {
    flex: 1,
    flexDirection: "column",
  },

  groupText: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "center",
  },

  completeTextView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  completeText: {
    fontSize: 30,
    fontWeight: "800",
    fontFamily: "Verdana",
    alignSelf: "center",
    justifyContent: "center",
  },

  numberText: {
    fontSize: 30,
    fontWeight: "800",
    fontFamily: "Verdana",
    textDecorationLine: "underline",
    color: "#0056D2",
  },

  cardText: {
    fontSize: 30,
    fontWeight: "800",
    fontFamily: "Verdana",
  },

  indication: {
    flex: 2,
    justifyContent: "flex-start",
  },
});
