import QACard from "../CardComponent/QACard";
import QAImgCard from "../CardComponent/QAImgCard";
import MCQCard from "../CardComponent/MCQCard";
import { cardCollection } from "../exampleData";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function LearnScreenCard() {
  const route = useRoute();
  const stats = route.params.stats;

  const navigation = useNavigation();

  //Navigate to the Statistics Page after finishing cards
  //It prompts a warning that is not fixed yet.
  if (stats.finished === stats.total) {
    navigation.navigate("StatisticsScreen");
    return;
  }

  let obj = cardCollection[stats.finished];

  let component;

  if (obj.type === "qa") {
    component = <QACard obj={obj} />;
  } else if (obj.type === "qaimg") {
    component = <QAImgCard obj={obj} />;
  } else {
    component = <MCQCard obj={obj} />;
  }

  return component;
}
