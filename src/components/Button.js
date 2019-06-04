import './Button.css';
const Button = (props) => {
  return (
    <div
      className={`button ${
        props.type === 'primary' ? 'primary' : 'secondary'
      } ${props.disabled ? 'disabled' : ''}`}
      onClick={() => props.handleClick(props.children)}
      disabled={props.disabled}
      type={props.type}
    >
      {props.children}
    </div>
  );
};
export default Button;
