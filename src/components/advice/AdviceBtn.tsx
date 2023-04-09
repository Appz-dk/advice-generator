import classes from "./AdviceBtn.module.css";
import dice from "../../assets/images/icon-dice.svg";

type AdviceBtnProps = {
  getNewAdvice: () => void;
};

const AdviceBtn: React.FC<AdviceBtnProps> = ({ getNewAdvice }) => {
  return (
    <button className={classes.button} aria-label="Get new advice" onClick={getNewAdvice}>
      <img className={classes.dice} src={dice} alt="A dice, placed within a neon green circle" />
    </button>
  );
};

export default AdviceBtn;
