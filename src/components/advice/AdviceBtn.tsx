import classes from "./AdviceBtn.module.css";
import dice from "../../assets/images/icon-dice.svg";

type AdviceBtnProps = {
  getNewAdvice: () => void;
};

const AdviceBtn: React.FC<AdviceBtnProps> = ({ getNewAdvice }) => {
  return (
    <button className={classes.button} onClick={getNewAdvice}>
      <img className={classes.dice} src={dice} />
    </button>
  );
};

export default AdviceBtn;
