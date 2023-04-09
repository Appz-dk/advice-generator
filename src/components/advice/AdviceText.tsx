import classes from "./AdviceText.module.css";

const AdviceText = () => {
  return (
    <div className={classes["container"]}>
      {/* TODO: Edit h1 tag to something else if used on page already with an h1 */}
      <h1 className={classes.title}>Advice #117</h1>
      <q className={classes.quote}>
        It is easy to situp and take notice, what's difficult is getting up and taking action
      </q>
    </div>
  );
};

export default AdviceText;
