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

Taken from Steven Youhana - Originally Accessed 12 February 2020
*/

// Define Constant

const SOUNDS = [
  { Q: 'Drum-Roll-SoundBible.com-1599301580.mp3' },
  { W: 'Halogen Light-SoundBible.com-1664817471.mp3' },
  { E: 'Sci-Fi-Robot-SoundBible.com-481033379.mp3' },
  { A: 'City_Centre-Hopeinawe-377331566.mp3' },
  { S: 'service-bell_daniel_simion.mp3' },
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
      case 0: setIt('Drum Roll'); break;
      case 1: setIt('Halogen Light'); break;
      case 2: setIt('Sci Fi Robot'); break;
      case 3: setIt('City Centre'); break;
      case 4: setIt('Service Bell'); break;
      case 5: setIt('Pen Clicking'); break;
      case 6: setIt('Public Transit Bus'); break;
      case 7: setIt('Party Horn'); break;
      case 8: setIt('Typewriter'); break;
      default: setIt('You Rock!'); break;
    }
  }

handleKey = (event) => {
    switch(event) {
      case SOUNDS[0]: 
        this.toPlay = document.getElementById('Q');        
        this.toPlay.play(); 
        this.setDisplay(0);
        break;
      case SOUNDS[1]: 
        this.toPlay = document.getElementById('W');
        this.toPlay.play();
        this.setDisplay(1);
        break;
      case SOUNDS[2]: 
        this.toPlay = document.getElementById('E');
        this.toPlay.play();
        this.setDisplay(2);
        break;
      case SOUNDS[3]: 
        this.toPlay = document.getElementById('A');
        this.toPlay.play(); 
        this.setDisplay(3);
        break;
      case SOUNDS[4]: 
        this.toPlay = document.getElementById('S');
        this.toPlay.play();
        this.setDisplay(4);
        break;
      case SOUNDS[5]: 
        this.toPlay = document.getElementById('D'); 
        this.toPlay.play();
        this.setDisplay(5);
        break;
      case SOUNDS[6]: 
        this.toPlay = document.getElementById('Z'); 
        this.toPlay.play();
        this.setDisplay(6);
        break;
      case SOUNDS[7]: 
        this.toPlay = document.getElementById('X');
        this.toPlay.play(); 
        this.setDisplay(7);
        break;
      case SOUNDS[8]: 
        this.toPlay = document.getElementById('C'); 
        this.toPlay.play(); 
        this.setDisplay(8);
        break;
    }
    
  }

 componentWillMount() {
    this.build = SOUNDS.map( (e,i) => {
      return  <DrumPad index={i} name={Object.keys(e)} playAudio={this.playAudio} src={e[Object.keys(e)]} color={this.state.padColor}/>;
    });
  }

  render() {
    return (
      <div id="drum-machine" onClick={this.playAudio} onKeyDown={this.handleKey} tabIndex="0" >
      <Info />
        <div id="display">
          <h2 className='text-center'>{this.state.display}</h2>
        </div> 
        <div id="view">
          <div id='btn-group' className="text-center">
             {this.build}
          </div>
        </div>
    </div>
    );
  }
}
export default DrumMachine;
