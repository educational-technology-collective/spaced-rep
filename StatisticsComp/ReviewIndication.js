import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import IndicationBlock from "./IndicationBlock";

export default function ReviewIndication() {
  const route = useRoute();
  const stats = route.params.stats;

  const redForget = stats.forgetNum >= stats.total / 4;
  const redLittle = stats.littleNum >= stats.total / 4;
  const redMuch = stats.littleNum < stats.total / 4;
  const redWell = stats.wellNum < stats.total / 4;
  return (
    <View>
      <Text style={styles.text}>Review Indication: </Text>
      <Text></Text>
      <View style={styles.blocks}>
        <IndicationBlock
          emoji="🙁"
          text="You Forget"
          number={stats.forgetNum}
          red={redForget}
        />
        <IndicationBlock
          emoji="😐"
          text="Know Little"
          number={stats.littleNum}
          red={redLittle}
        />
        <IndicationBlock
          emoji="😅"
          text="Know Much"
          number={stats.muchNum}
          red={redMuch}
        />
        <IndicationBlock
          emoji="😀"
          text="Know Well"
          number={stats.wellNum}
          red={redWell}
        />
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
