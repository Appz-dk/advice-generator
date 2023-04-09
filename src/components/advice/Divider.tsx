import classes from "./Divider.module.css";

import desktopDivider from "../../assets/images/pattern-divider-desktop.svg";

const Divider = () => {
  return (
    <div className={classes.container}>
      <img
        className={classes.divider}
        alt="A divider: 2 flat horizontal lines seperated, by something resembling a quote, in the middle"
      />
    </div>
  );
};

export default Divider;
