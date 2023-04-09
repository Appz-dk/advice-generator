import { useEffect, useState } from "react";
import Card from "../Card";
import AdviceBtn from "./AdviceBtn";
import AdviceText from "./AdviceText";
import Divider from "./Divider";
import { TAdvice, getRandomAdvice } from "../../api/getRandomAdvice";

const DEFAULT_ADVICE = {
  id: "-1",
  text: "Technology doesn't always work as intended...",
};

const Advice = () => {
  const [advice, setAdvice] = useState<TAdvice>(DEFAULT_ADVICE);

  const setNewAdvice = async () => {
    setAdvice(await getRandomAdvice());
  };

  // Fetching first advice on page render
  useEffect(() => {
    // IIFE: Immediately Invoked Function Expression
    (async () => {
      setAdvice(await getRandomAdvice());
    })();
  }, []);

  return (
    <Card>
      <AdviceText advice={advice} />
      <Divider />
      <AdviceBtn getNewAdvice={setNewAdvice} />
    </Card>
  );
};

export default Advice;
