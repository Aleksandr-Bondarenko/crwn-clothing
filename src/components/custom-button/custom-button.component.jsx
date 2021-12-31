import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  handleClick,
  isGoogleSignIn,
  ...otherCustomButtonProps
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    onClick={handleClick}
    {...otherCustomButtonProps}
  >
    {children}
  </button>
);

export default CustomButton;
