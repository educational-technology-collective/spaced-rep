import QACard from "../components/QACard";
import { cardCollection } from "../exampleData";

export default function LearnScreenCard() {
  const f1 = cardCollection[0];

  return <QACard obj={f1} />;
}
