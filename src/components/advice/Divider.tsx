import classes from "./Divider.module.css";

import desktopDivider from "../../assets/images/pattern-divider-desktop.svg";

const Divider = () => {
  return (
    <div className={classes.container}>
      <img className={classes.divider} />
    </div>
  );
};

export default Divider;
