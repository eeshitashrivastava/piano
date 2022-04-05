import React, { useEffect } from "react";
import AudioPlayer from "../../components/AudioComponents/AudioPlayer";
import PianoKeyboardComponent from "../../components/PianoKeyboardComponent";

const MainContainer = () => {
  const audioPlayer = AudioPlayer();

  useEffect(() => {
    //we can use other instruments also by adding its name instead of piano
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, []);

  const handlePlayNote = (note) => {
    audioPlayer.playNote(note);
  };

  return (
    <div>
      <h1 className="heading">Virtual Piano</h1>
      <h3>Play piano Online!</h3>
      <PianoKeyboardComponent handlePlayNote={handlePlayNote} />
    </div>
  );
}

export default MainContainer;