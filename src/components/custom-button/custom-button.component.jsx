import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  handleClick,
  inverted,
  isGoogleSignIn,
  ...otherCustomButtonProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    onClick={handleClick}
    {...otherCustomButtonProps}
  >
    {children}
  </button>
);

export default CustomButton;
