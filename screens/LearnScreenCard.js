import QACard from "../CardComponent/QACard";
import QAImgCard from "../CardComponent/QAImgCard";
import MCQCard from "../CardComponent/MCQCard";
import { cardCollection } from "../exampleData";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function LearnScreenCard() {
  const route = useRoute();

  const [counter, setCounter] = useState(0);

  function moveCounter() {
    setCounter(counter + 1);
  }

  if (counter === cardCollection.length) {
    const navigation = useNavigation();
    return navigation.navigate("StatisticsScreen");
  }

  let obj = cardCollection[counter];

  let component;

  if (obj.type === "qa") {
    component = <QACard obj={obj} nextCard={moveCounter} />;
  } else if (obj.type === "qaimg") {
    component = <QAImgCard obj={obj} nextCard={moveCounter} />;
  } else {
    component = <MCQCard obj={obj} nextCard={moveCounter} />;
  }

  return component;
}
