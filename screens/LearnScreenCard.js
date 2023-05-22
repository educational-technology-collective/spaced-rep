import QACard from "../CardComponent/QACard";
import QAImgCard from "../CardComponent/QAImgCard";
import MCQCard from "../CardComponent/MCQCard";
import { cardCollection } from "../exampleData";

export default function LearnScreenCard() {
  const f1 = cardCollection[2];

  return <MCQCard obj={f1} />;
}
