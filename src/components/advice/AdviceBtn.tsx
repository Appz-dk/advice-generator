import classes from "./AdviceBtn.module.css";
import dice from "../../assets/images/icon-dice.svg";

const AdviceBtn = () => {
  return (
    <button className={classes.button}>
      <img className={classes.dice} src={dice} />
    </button>
  );
};

export default AdviceBtn;
