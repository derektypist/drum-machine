import React from 'react';


/*
SOURCES
‘http://soundbible.com/716-Drum-Roll.html’
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

// Define Constant

const SOUNDS = [
  { Q: 'Drum-Roll-SoundBible.com-1599301580.mp3' },
  { W: 'Halogen Light-SoundBible.com-1664817471.mp3' },
  { E: 'Sci-Fi-Robot-SoundBible.com-481033379.mp3' },
  { A: 'City_Centre-Hopeinawe-377331566.mp3' },
  { S: 'my-drum-machine/src/service-bell_daniel_simion.mp3' },
  { D: 'Pen-Clicking-SoundBible.com-482574858.mp3' },
  { Z: 'Public-Transit-Bus-SoundBible.com-671541921.mp3' },
  { X: 'party_horn-Mike_Koenig-76599891.mp3' },
  { C: 'Typewriter-SoundBible.com-285954942.mp3' }
];

// Set Up Components

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Novice Drummer",
      padColor: 'lavender',
      displayColor: 'lightgreen'
    };

    this.toPlay = null;
    this.playAudio = this.playAudio.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
    this.build = null;

  }

  playAudio(btn) {
    if (btn.target.id >= 0 && btn.target.id <= 8) {
      this.toPlay = document.getElementById(Object.keys(SOUNDS[btn.target.id]));
      this.toPlay.currentTime = 0;
      for (const e in SOUNDS) {
        if (e === btn.target.id) this.url = SOUNDS[btn.target.id];
        this.toPlay.play();
      }
    }
    this.setDisplay(parseInt(btn.target.id, 10));
  }
  
   setDisplay(hit) {
    if(hit >= 0 && hit <= 8) {
      let rgb = [Math.floor(Math.random()*254),Math.floor(Math.random()*254),Math.floor(Math.random()*254)];
      document.getElementById("display").style.background = `rgb(${rgb[1]},${rgb[0]},${rgb[2]})`;
      document.getElementById("view").style.background = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
      document.getElementById(hit).style.background = 'white';
    }
   setTimeout(()=> {
        document.getElementById(hit).style.background = 'lavender';
      },200);
    
    let setIt = (theHit) => {
      // console.log(theHit);
      this.setState({
        display: theHit
      });
    };
    
    switch(hit) {
      case 0: setIt('Kick'); break;
      case 1: setIt('That snare!'); break;
      case 2: setIt('hat El'); break;
      case 3: setIt('hat'); break;
      case 4: setIt('Impact hit'); break;
      case 5: setIt('Rim'); break;
      case 6: setIt('Funk 1'); break;
      case 7: setIt('Funk 2'); break;
      case 8: setIt('Funk 3'); break;
      default: setIt('You Rock!'); break;
    }
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
