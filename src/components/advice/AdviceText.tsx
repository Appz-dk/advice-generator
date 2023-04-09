import { TAdvice } from "../../api/getRandomAdvice";
import classes from "./AdviceText.module.css";

type AdviceTextProps = {
  advice: TAdvice;
};

const AdviceText: React.FC<AdviceTextProps> = ({ advice }) => {
  return (
    <div className={classes["container"]}>
      {/* TODO: Edit h1 tag to something else if used on page already with an h1 */}
      <h1 className={classes.title}>Advice #{advice.id}</h1>
      <q className={classes.quote}>{advice.text}</q>
    </div>
  );
};

export default AdviceText;
