import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import IndicationBlock from "./IndicationBlock";

export default function ReviewIndication() {
  const route = useRoute();
  const stats = route.params.stats;

  return (
    <View>
      <Text style={styles.text}>Review Indication: </Text>
      <Text></Text>
      <View style={styles.blocks}>
        <IndicationBlock
          emoji="🙁"
          text="You Forget"
          number={stats.forgetNum}
        />
        <IndicationBlock
          emoji="😐"
          text="Know Little"
          number={stats.littleNum}
        />
        <IndicationBlock emoji="😅" text="Know Much" number={stats.muchNum} />
        <IndicationBlock emoji="😀" text="Know Well" number={stats.wellNum} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blocks: {
    justifyContent: "space-around",
    flexDirection: "row",
  },

  text: {
    fontSize: 30,
    fontWeight: "600",
    color: "#AA4465",
    textAlign: "center",
  },
});
