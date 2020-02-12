import React from 'react';


/*
SOURCES
‘http://soundbible.com/2175-Street.html’
‘http://soundbible.com/1085-Halogen-Light.html’
‘http://soundbible.com/1317-Sci-Fi-Robot.html’
‘http://soundbible.com/2000-City-Centre.html’
‘http://soundbible.com/2218-Service-Bell-Help.html’
‘http://soundbible.com/835-Pen-Clicking.html’
‘http://soundbible.com/1698-Public-Transit-Bus.html’
‘http://soundbible.com/1817-Party-Horn.html’
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
  {Q: 'street-daniel_simon.mp3'},
  {W: 'Halogen Light-SoundBible.com-1664817471.mp3'},
  {E: 'Sci-Fi-Robot-SoundBible.com-481033379.mp3'},
  {A: 'City_Centre-Hopeinawe-377331566.mp3'},
  {S: 'my-drum-machine/src/service-bell_daniel_simion.mp3'},
  {D: 'Pen-Clicking-SoundBible.com-482574858.mp3'},
  {Z: 'Public-Transit-Bus-SoundBible.com-671541921.mp3'},
  {X: 'party_horn-Mike_Koenig-76599891.mp3'},
  {C: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', KC: 67}
];





class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    
    
    
    
  }
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
