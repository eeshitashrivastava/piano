import SoundFontPlayer from "soundfont-player";
import AudioContext from "../AudioContext";

const NullSoundFontPlayerNoteAudio = {
  stop() {},
};

const NullSoundFontPlayer = {
  //play null sound and then stop
  play() {
    return NullSoundFontPlayerNoteAudio;
  },
};
const AudioPlayer = () => {
  //Audio Context
  const audioContext = AudioContext && new AudioContext();

  //initial value for soundPlayer
  let soundPlayer = NullSoundFontPlayer;

  //setInstrument: add context with the instrument, instrument name
  const Player = {
    setInstrument(instrumentName) {
      SoundFontPlayer.instrument(audioContext, instrumentName)
        .then((soundfontPlayer) => {
          //assign the player from package acc to context and name
          soundPlayer = soundfontPlayer;
        })
        .catch((e) => {
          //add null sound if any error
          soundPlayer = NullSoundFontPlayer;
        });
    },
    playNote(note) {
      //if soundplayer is null, play refers to our function otherwise it refers to the function returned by package
      soundPlayer.play(note);
    },
  };
  return Player;
};

export default AudioPlayer;
