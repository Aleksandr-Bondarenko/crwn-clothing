import "./custom-button.styles.scss";

const CustomButton = ({ children, otherCustomButtonProps }) => (
  <button className="custom-button">{children}</button>
);

export default CustomButton;
