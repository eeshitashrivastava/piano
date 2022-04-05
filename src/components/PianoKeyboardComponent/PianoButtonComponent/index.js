import "./pianoButtonComponent.css";

const PianoButtonComponent = (props) => {
  return (
    <li
      className={props.className + (props.isPressed ? " pressed" : "")}
      onMouseDown={() => props.handlePress(props.keyNotation, props.note)}
      onMouseUp={() => props.handleUnpress(props.keyNotation)}
      onMouseLeave={() => props.handleUnpress(props.keyNotation)}
    >
      {props.keyNotation}
    </li>
  );
};

export default PianoButtonComponent;
