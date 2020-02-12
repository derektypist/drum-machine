import React from 'react';


/*
SOURCES
‘https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3 81’
‘https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3 50’
‘https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3 23’
‘https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3 28’
‘https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3 22’
‘https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3 29’
‘https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3 30’
‘https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3 43’
‘https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3 25’
‘https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3 37’
‘https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3 17’
‘https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3 29’
‘https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3 28’
‘https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3 17’
‘https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3 33’
‘https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3 40’
‘https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3 35’
‘https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3 46’

Taken from Steven Youhana - Originally Accessed 12 February 2020
*/

const SOUNDS = [
  {Q:  'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', KC: 81},
  {W: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', KC: 87},
  {E: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', KC: 69},
  {A: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', KC: 65},
  {S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", KC: 83},
  {D: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', KC: 68},
  {Z: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', KC: 90},
  {X: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', KC: 88},
  {C: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', KC: 67}
];





class DrumMachine extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default DrumMachine;
