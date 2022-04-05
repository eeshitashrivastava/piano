import PianoButtonComponent from "./PianoButtonComponent";
import "./pianoComponent.css";
import { useEffect, useState } from "react";
import keyboardMapArray from "../../constants/keyboardMapArray";

const PianoKeyboardComponent = (props) => {
  const [pressedKeysArray, setPressedKeys] = useState([]);

  const handleKeyDown = (e) => {
    let keyNotation = e.key === "Shift" ? e.key : e.key.toUpperCase();
    let noteObj = keyboardMapArray.find((keyObj) => {
      return keyObj.keyNotation === keyNotation;
    });
    let note = noteObj.basenote + noteObj.octave;
    handlePress(keyNotation, note);
  };

  const handleKeyUp = (e) => {
    let keyNotation = e.key === "Shift" ? e.key : e.key.toUpperCase();
    handleUnpress(keyNotation);
  };

  const handlePress = (keyNotation, note) => {
    setPressedKeys((prevState) => {
      let arr = [...prevState, keyNotation];
      return arr;
    });
    props.handlePlayNote(note);
  };

  const handleUnpress = (keyNotation) => {
    setPressedKeys((prevState) => {
      let arr = [...prevState];
      arr = prevState.filter((element) => element !== keyNotation);
      return arr;
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <ul className="keyboard">
      {keyboardMapArray.map((keyObj, i) => {
        return (
          <PianoButtonComponent
            key={i}
            className={keyObj.className}
            keyNotation={keyObj.keyNotation}
            note={keyObj.basenote + keyObj.octave}
            isPressed={pressedKeysArray.includes(keyObj.keyNotation)}
            handlePress={handlePress}
            handleUnpress={handleUnpress}
          />
        );
      })}
    </ul>
  );
};

export default PianoKeyboardComponent;
