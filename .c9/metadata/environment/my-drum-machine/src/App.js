{"changed":true,"filter":false,"title":"App.js","tooltip":"/my-drum-machine/src/App.js","value":"import React from 'react';\n\n\n/*\nSOURCES\n‘http://soundbible.com/716-Drum-Roll.html’\n‘http://soundbible.com/1085-Halogen-Light.html’\n‘http://soundbible.com/1317-Sci-Fi-Robot.html’\n‘http://soundbible.com/2000-City-Centre.html’\n‘http://soundbible.com/2218-Service-Bell-Help.html’\n‘http://soundbible.com/835-Pen-Clicking.html’\n‘http://soundbible.com/1698-Public-Transit-Bus.html’\n‘http://soundbible.com/1817-Party-Horn.html’\n\nTaken from Steven Youhana - Originally Accessed 12 February 2020\n*/\n\n// Define Constant\n\nconst SOUNDS = [\n  { Q: 'Drum-Roll-SoundBible.com-1599301580.mp3' },\n  { W: 'Halogen Light-SoundBible.com-1664817471.mp3' },\n  { E: 'Sci-Fi-Robot-SoundBible.com-481033379.mp3' },\n  { A: 'City_Centre-Hopeinawe-377331566.mp3' },\n  { S: 'service-bell_daniel_simion.mp3' },\n  { D: 'Pen-Clicking-SoundBible.com-482574858.mp3' },\n  { Z: 'Public-Transit-Bus-SoundBible.com-671541921.mp3' },\n  { X: 'party_horn-Mike_Koenig-76599891.mp3' },\n  { C: 'Typewriter-SoundBible.com-285954942.mp3' }\n];\n\n// Set Up Components\n\nclass DrumMachine extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      display: \"Novice Drummer\",\n      padColor: 'lavender',\n      displayColor: 'lightgreen'\n    };\n\n    this.toPlay = null;\n    this.playAudio = this.playAudio.bind(this);\n    this.setDisplay = this.setDisplay.bind(this);\n    this.build = null;\n\n  }\n\n  playAudio(btn) {\n    if (btn.target.id >= 0 && btn.target.id <= 8) {\n      this.toPlay = document.getElementById(Object.keys(SOUNDS[btn.target.id]));\n      this.toPlay.currentTime = 0;\n      for (const e in SOUNDS) {\n        if (e === btn.target.id) this.url = SOUNDS[btn.target.id];\n        this.toPlay.play();\n      }\n    }\n    this.setDisplay(parseInt(btn.target.id, 10));\n  }\n  \n   setDisplay(hit) {\n    if(hit >= 0 && hit <= 8) {\n      let rgb = [Math.floor(Math.random()*254),Math.floor(Math.random()*254),Math.floor(Math.random()*254)];\n      document.getElementById(\"display\").style.background = `rgb(${rgb[1]},${rgb[0]},${rgb[2]})`;\n      document.getElementById(\"view\").style.background = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;\n      document.getElementById(hit).style.background = 'white';\n    }\n   setTimeout(()=> {\n        document.getElementById(hit).style.background = 'lavender';\n      },200);\n    \n    let setIt = (theHit) => {\n      // console.log(theHit);\n      this.setState({\n        display: theHit\n      });\n    };\n    \n    switch(hit) {\n      case 0: setIt('Drum Roll'); break;\n      case 1: setIt('Halogen Light'); break;\n      case 2: setIt('Sci Fi Robot'); break;\n      case 3: setIt('City Centre'); break;\n      case 4: setIt('Service Bell'); break;\n      case 5: setIt('Pen Clicking'); break;\n      case 6: setIt('Public Transit Bus'); break;\n      case 7: setIt('Party Horn'); break;\n      case 8: setIt('Typewriter'); break;\n      default: setIt('You Rock!'); break;\n    }\n  }\n\nhandleKey = (event) => {\n    switch(event) {\n      case SOUNDS[0]: \n        this.toPlay = document.getElementById('Q');        \n        this.toPlay.play(); \n        this.setDisplay(0);\n        break;\n      case SOUNDS[1]: \n        this.toPlay = document.getElementById('W');\n        this.toPlay.play();\n        this.setDisplay(1);\n        break;\n      case SOUNDS[2]: \n        this.toPlay = document.getElementById('E');\n        this.toPlay.play();\n        this.setDisplay(2);\n        break;\n      case SOUNDS[3]: \n        this.toPlay = document.getElementById('A');\n        this.toPlay.play(); \n        this.setDisplay(3);\n        break;\n      case SOUNDS[4]: \n        this.toPlay = document.getElementById('S');\n        this.toPlay.play();\n        this.setDisplay(4);\n        break;\n      case SOUNDS[5]: \n        this.toPlay = document.getElementById('D'); \n        this.toPlay.play();\n        this.setDisplay(5);\n        break;\n      case SOUNDS[6]: \n        this.toPlay = document.getElementById('Z'); \n        this.toPlay.play();\n        this.setDisplay(6);\n        break;\n      case SOUNDS[7]: \n        this.toPlay = document.getElementById('X');\n        this.toPlay.play(); \n        this.setDisplay(7);\n        break;\n      case SOUNDS[8]: \n        this.toPlay = document.getElementById('C'); \n        this.toPlay.play(); \n        this.setDisplay(8);\n        break;\n    }\n    \n  }\n\n componentWillMount() {\n    this.build = SOUNDS.map( (e,i) => {\n      return  <DrumPad index={i} name={Object.keys(e)} playAudio={this.playAudio} src={e[Object.keys(e)]} color={this.state.padColor}/>;\n    });\n  }\n\n  render() {\n    return (\n      <div id=\"drum-machine\" onClick={this.playAudio} onKeyDown={this.handleKey} tabIndex=\"0\" >\n      <Info />\n        <div id=\"display\">\n          <h2 className='text-center'>{this.state.display}</h2>\n        </div> \n        <div id=\"view\">\n          <div id='btn-group' className=\"text-center\">\n             {this.build}\n          </div>\n        </div>\n    </div>\n    );\n  }\n}\n\n\nexport default DrumMachine;\n","undoManager":{"mark":99,"position":100,"stack":[[{"start":{"row":60,"column":4},"end":{"row":67,"column":5},"action":"insert","lines":["if(btn.target.id >= 0 && btn.target.id <= 8) {      ","    this.toPlay = document.getElementById(Object.keys(SOUNDS[btn.target.id])[0])","    this.toPlay.currentTime = 0;","    for(const e in SOUNDS) {","      if(e === btn.target.id) this.url = SOUNDS[btn.target.id][Object.keys(SOUNDS[e])[0]];      ","      this.toPlay.play();","      }","    }"],"id":179}],[{"start":{"row":61,"column":76},"end":{"row":61,"column":79},"action":"remove","lines":["[0]"],"id":180}],[{"start":{"row":61,"column":76},"end":{"row":61,"column":77},"action":"remove","lines":[")"],"id":181}],[{"start":{"row":61,"column":76},"end":{"row":61,"column":77},"action":"insert","lines":[")"],"id":182},{"start":{"row":61,"column":77},"end":{"row":61,"column":78},"action":"insert","lines":[";"]}],[{"start":{"row":64,"column":85},"end":{"row":64,"column":88},"action":"remove","lines":["[0]"],"id":183}],[{"start":{"row":67,"column":5},"end":{"row":68,"column":0},"action":"insert","lines":["",""],"id":184},{"start":{"row":68,"column":0},"end":{"row":68,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":68,"column":4},"end":{"row":68,"column":45},"action":"insert","lines":["this.setDisplay(parseInt(btn.target.id));"],"id":185}],[{"start":{"row":68,"column":42},"end":{"row":68,"column":43},"action":"remove","lines":[")"],"id":186}],[{"start":{"row":68,"column":42},"end":{"row":68,"column":43},"action":"insert","lines":[")"],"id":187}],[{"start":{"row":68,"column":43},"end":{"row":68,"column":44},"action":"insert","lines":[")"],"id":188}],[{"start":{"row":68,"column":43},"end":{"row":68,"column":44},"action":"remove","lines":[")"],"id":189}],[{"start":{"row":68,"column":43},"end":{"row":68,"column":44},"action":"insert","lines":[","],"id":190},{"start":{"row":68,"column":44},"end":{"row":68,"column":45},"action":"insert","lines":["1"]},{"start":{"row":68,"column":45},"end":{"row":68,"column":46},"action":"insert","lines":["0"]}],[{"start":{"row":68,"column":43},"end":{"row":68,"column":46},"action":"remove","lines":[",10"],"id":191}],[{"start":{"row":68,"column":44},"end":{"row":68,"column":45},"action":"insert","lines":[","],"id":192}],[{"start":{"row":68,"column":44},"end":{"row":68,"column":45},"action":"remove","lines":[","],"id":193},{"start":{"row":68,"column":43},"end":{"row":68,"column":44},"action":"remove","lines":[")"]}],[{"start":{"row":68,"column":43},"end":{"row":68,"column":45},"action":"insert","lines":["()"],"id":194}],[{"start":{"row":68,"column":43},"end":{"row":68,"column":45},"action":"remove","lines":["()"],"id":195}],[{"start":{"row":68,"column":43},"end":{"row":68,"column":44},"action":"insert","lines":[")"],"id":196}],[{"start":{"row":64,"column":62},"end":{"row":64,"column":86},"action":"remove","lines":["[Object.keys(SOUNDS[e])]"],"id":197}],[{"start":{"row":61,"column":42},"end":{"row":61,"column":54},"action":"remove","lines":["Object.keys("],"id":198}],[{"start":{"row":61,"column":63},"end":{"row":61,"column":64},"action":"remove","lines":[")"],"id":199}],[{"start":{"row":61,"column":41},"end":{"row":61,"column":64},"action":"remove","lines":["(SOUNDS[btn.target.id])"],"id":200}],[{"start":{"row":61,"column":41},"end":{"row":61,"column":75},"action":"insert","lines":["Object.keys(SOUNDS[btn.target.id])"],"id":201}],[{"start":{"row":61,"column":41},"end":{"row":61,"column":42},"action":"insert","lines":["("],"id":202}],[{"start":{"row":61,"column":76},"end":{"row":61,"column":77},"action":"insert","lines":[")"],"id":203}],[{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"insert","lines":[" "],"id":204},{"start":{"row":30,"column":48},"end":{"row":30,"column":49},"action":"insert","lines":[" "]},{"start":{"row":31,"column":3},"end":{"row":31,"column":4},"action":"insert","lines":[" "]},{"start":{"row":31,"column":52},"end":{"row":31,"column":53},"action":"insert","lines":[" "]},{"start":{"row":32,"column":3},"end":{"row":32,"column":4},"action":"insert","lines":[" "]},{"start":{"row":32,"column":50},"end":{"row":32,"column":51},"action":"insert","lines":[" "]},{"start":{"row":33,"column":3},"end":{"row":33,"column":4},"action":"insert","lines":[" "]},{"start":{"row":33,"column":44},"end":{"row":33,"column":45},"action":"insert","lines":[" "]},{"start":{"row":34,"column":3},"end":{"row":34,"column":4},"action":"insert","lines":[" "]},{"start":{"row":34,"column":59},"end":{"row":34,"column":60},"action":"insert","lines":[" "]},{"start":{"row":35,"column":3},"end":{"row":35,"column":4},"action":"insert","lines":[" "]},{"start":{"row":35,"column":50},"end":{"row":35,"column":51},"action":"insert","lines":[" "]},{"start":{"row":36,"column":3},"end":{"row":36,"column":4},"action":"insert","lines":[" "]},{"start":{"row":36,"column":56},"end":{"row":36,"column":57},"action":"insert","lines":[" "]},{"start":{"row":37,"column":3},"end":{"row":37,"column":4},"action":"insert","lines":[" "]},{"start":{"row":37,"column":44},"end":{"row":37,"column":45},"action":"insert","lines":[" "]},{"start":{"row":38,"column":3},"end":{"row":38,"column":4},"action":"insert","lines":[" "]},{"start":{"row":38,"column":48},"end":{"row":38,"column":49},"action":"insert","lines":[" "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":4},"action":"remove","lines":["    "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":4},"action":"remove","lines":["    "]},{"start":{"row":58,"column":0},"end":{"row":58,"column":2},"action":"remove","lines":["  "]},{"start":{"row":60,"column":6},"end":{"row":60,"column":7},"action":"insert","lines":[" "]},{"start":{"row":60,"column":51},"end":{"row":60,"column":55},"action":"remove","lines":["    "]},{"start":{"row":60,"column":51},"end":{"row":61,"column":0},"action":"insert","lines":["",""]},{"start":{"row":61,"column":2},"end":{"row":62,"column":0},"action":"remove","lines":["",""]},{"start":{"row":62,"column":4},"end":{"row":62,"column":6},"action":"insert","lines":["  "]},{"start":{"row":63,"column":0},"end":{"row":63,"column":2},"action":"insert","lines":["  "]},{"start":{"row":63,"column":9},"end":{"row":63,"column":10},"action":"insert","lines":[" "]},{"start":{"row":64,"column":6},"end":{"row":64,"column":8},"action":"insert","lines":["  "]},{"start":{"row":64,"column":10},"end":{"row":64,"column":11},"action":"insert","lines":[" "]},{"start":{"row":64,"column":66},"end":{"row":64,"column":70},"action":"remove","lines":["    "]},{"start":{"row":64,"column":66},"end":{"row":65,"column":0},"action":"insert","lines":["",""]},{"start":{"row":65,"column":2},"end":{"row":66,"column":0},"action":"remove","lines":["",""]},{"start":{"row":70,"column":0},"end":{"row":70,"column":2},"action":"remove","lines":["  "]},{"start":{"row":72,"column":0},"end":{"row":72,"column":2},"action":"insert","lines":["  "]},{"start":{"row":73,"column":0},"end":{"row":73,"column":2},"action":"insert","lines":["  "]},{"start":{"row":89,"column":0},"end":{"row":89,"column":2},"action":"insert","lines":["  "]},{"start":{"row":90,"column":0},"end":{"row":90,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":69,"column":3},"end":{"row":70,"column":0},"action":"insert","lines":["",""],"id":205},{"start":{"row":70,"column":0},"end":{"row":70,"column":2},"action":"insert","lines":["  "]},{"start":{"row":70,"column":2},"end":{"row":71,"column":0},"action":"insert","lines":["",""]},{"start":{"row":71,"column":0},"end":{"row":71,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":71,"column":2},"end":{"row":101,"column":3},"action":"insert","lines":[" setDisplay(hit) {","    if(hit >= 0 && hit <= 8) {","      let rgb = [Math.floor(Math.random()*254),Math.floor(Math.random()*254),Math.floor(Math.random()*254)];","      document.getElementById(\"display\").style.background = `rgb(${rgb[1]},${rgb[0]},${rgb[2]})`","      document.getElementById(\"view\").style.background = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`","      document.getElementById(hit).style.background = 'white';","    }","   setTimeout(()=> {","        document.getElementById(hit).style.background = 'yellow';","      },200)","    ","    let setIt = (theHit) => {","      // console.log(theHit);","      this.setState({","        display: theHit","      });","    }","    ","    switch(hit) {","      case 0: setIt('Kick'); break;","      case 1: setIt('That snare!'); break;","      case 2: setIt('hat El'); break;","      case 3: setIt('hat'); break;","      case 4: setIt('Impact hit'); break;","      case 5: setIt('Rim'); break;","      case 6: setIt('Funk 1'); break;","      case 7: setIt('Funk 2'); break;","      case 8: setIt('Funk 3'); break;","      default: setIt('You Rock!'); break;","    }","  }"],"id":206}],[{"start":{"row":79,"column":57},"end":{"row":79,"column":63},"action":"remove","lines":["yellow"],"id":207},{"start":{"row":79,"column":57},"end":{"row":79,"column":58},"action":"insert","lines":["l"]},{"start":{"row":79,"column":58},"end":{"row":79,"column":59},"action":"insert","lines":["a"]},{"start":{"row":79,"column":59},"end":{"row":79,"column":60},"action":"insert","lines":["v"]},{"start":{"row":79,"column":60},"end":{"row":79,"column":61},"action":"insert","lines":["e"]},{"start":{"row":79,"column":61},"end":{"row":79,"column":62},"action":"insert","lines":["n"]},{"start":{"row":79,"column":62},"end":{"row":79,"column":63},"action":"insert","lines":["d"]},{"start":{"row":79,"column":63},"end":{"row":79,"column":64},"action":"insert","lines":["e"]},{"start":{"row":79,"column":64},"end":{"row":79,"column":65},"action":"insert","lines":["r"]}],[{"start":{"row":80,"column":12},"end":{"row":80,"column":13},"action":"insert","lines":[";"],"id":208}],[{"start":{"row":74,"column":96},"end":{"row":74,"column":97},"action":"insert","lines":[";"],"id":209}],[{"start":{"row":75,"column":93},"end":{"row":75,"column":94},"action":"insert","lines":[";"],"id":210}],[{"start":{"row":68,"column":42},"end":{"row":68,"column":43},"action":"insert","lines":[","],"id":211}],[{"start":{"row":68,"column":43},"end":{"row":68,"column":44},"action":"insert","lines":[" "],"id":212},{"start":{"row":68,"column":44},"end":{"row":68,"column":45},"action":"insert","lines":["1"]},{"start":{"row":68,"column":45},"end":{"row":68,"column":46},"action":"insert","lines":["0"]}],[{"start":{"row":87,"column":5},"end":{"row":87,"column":6},"action":"insert","lines":[";"],"id":213}],[{"start":{"row":13,"column":0},"end":{"row":22,"column":60},"action":"remove","lines":["‘https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3 25’","‘https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3 37’","‘https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3 17’","‘https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3 29’","‘https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3 28’","‘https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3 17’","‘https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3 33’","‘https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3 40’","‘https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3 35’","‘https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3 46’"],"id":214},{"start":{"row":12,"column":44},"end":{"row":13,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":80,"column":21},"end":{"row":80,"column":25},"action":"remove","lines":["Kick"],"id":215},{"start":{"row":80,"column":21},"end":{"row":80,"column":22},"action":"insert","lines":["D"]},{"start":{"row":80,"column":22},"end":{"row":80,"column":23},"action":"insert","lines":["r"]},{"start":{"row":80,"column":23},"end":{"row":80,"column":24},"action":"insert","lines":["u"]},{"start":{"row":80,"column":24},"end":{"row":80,"column":25},"action":"insert","lines":["m"]}],[{"start":{"row":80,"column":25},"end":{"row":80,"column":26},"action":"insert","lines":[" "],"id":216},{"start":{"row":80,"column":26},"end":{"row":80,"column":27},"action":"insert","lines":["R"]},{"start":{"row":80,"column":27},"end":{"row":80,"column":28},"action":"insert","lines":["o"]},{"start":{"row":80,"column":28},"end":{"row":80,"column":29},"action":"insert","lines":["l"]},{"start":{"row":80,"column":29},"end":{"row":80,"column":30},"action":"insert","lines":["l"]}],[{"start":{"row":81,"column":21},"end":{"row":81,"column":32},"action":"remove","lines":["That snare!"],"id":217},{"start":{"row":81,"column":21},"end":{"row":81,"column":22},"action":"insert","lines":["H"]},{"start":{"row":81,"column":22},"end":{"row":81,"column":23},"action":"insert","lines":["a"]},{"start":{"row":81,"column":23},"end":{"row":81,"column":24},"action":"insert","lines":["l"]},{"start":{"row":81,"column":24},"end":{"row":81,"column":25},"action":"insert","lines":["o"]},{"start":{"row":81,"column":25},"end":{"row":81,"column":26},"action":"insert","lines":["g"]},{"start":{"row":81,"column":26},"end":{"row":81,"column":27},"action":"insert","lines":["e"]},{"start":{"row":81,"column":27},"end":{"row":81,"column":28},"action":"insert","lines":["n"]}],[{"start":{"row":81,"column":28},"end":{"row":81,"column":29},"action":"insert","lines":[" "],"id":218},{"start":{"row":81,"column":29},"end":{"row":81,"column":30},"action":"insert","lines":["L"]},{"start":{"row":81,"column":30},"end":{"row":81,"column":31},"action":"insert","lines":["i"]},{"start":{"row":81,"column":31},"end":{"row":81,"column":32},"action":"insert","lines":["g"]},{"start":{"row":81,"column":32},"end":{"row":81,"column":33},"action":"insert","lines":["h"]},{"start":{"row":81,"column":33},"end":{"row":81,"column":34},"action":"insert","lines":["t"]}],[{"start":{"row":82,"column":21},"end":{"row":82,"column":27},"action":"remove","lines":["hat El"],"id":219},{"start":{"row":82,"column":21},"end":{"row":82,"column":22},"action":"insert","lines":["S"]},{"start":{"row":82,"column":22},"end":{"row":82,"column":23},"action":"insert","lines":["c"]},{"start":{"row":82,"column":23},"end":{"row":82,"column":24},"action":"insert","lines":["i"]}],[{"start":{"row":82,"column":24},"end":{"row":82,"column":25},"action":"insert","lines":[" "],"id":220},{"start":{"row":82,"column":25},"end":{"row":82,"column":26},"action":"insert","lines":["F"]},{"start":{"row":82,"column":26},"end":{"row":82,"column":27},"action":"insert","lines":["i"]}],[{"start":{"row":82,"column":27},"end":{"row":82,"column":28},"action":"insert","lines":[" "],"id":221},{"start":{"row":82,"column":28},"end":{"row":82,"column":29},"action":"insert","lines":["R"]},{"start":{"row":82,"column":29},"end":{"row":82,"column":30},"action":"insert","lines":["o"]},{"start":{"row":82,"column":30},"end":{"row":82,"column":31},"action":"insert","lines":["b"]},{"start":{"row":82,"column":31},"end":{"row":82,"column":32},"action":"insert","lines":["o"]},{"start":{"row":82,"column":32},"end":{"row":82,"column":33},"action":"insert","lines":["t"]}],[{"start":{"row":83,"column":21},"end":{"row":83,"column":24},"action":"remove","lines":["hat"],"id":222},{"start":{"row":83,"column":21},"end":{"row":83,"column":22},"action":"insert","lines":["C"]},{"start":{"row":83,"column":22},"end":{"row":83,"column":23},"action":"insert","lines":["i"]},{"start":{"row":83,"column":23},"end":{"row":83,"column":24},"action":"insert","lines":["t"]},{"start":{"row":83,"column":24},"end":{"row":83,"column":25},"action":"insert","lines":["y"]}],[{"start":{"row":83,"column":25},"end":{"row":83,"column":26},"action":"insert","lines":[" "],"id":223},{"start":{"row":83,"column":26},"end":{"row":83,"column":27},"action":"insert","lines":["C"]},{"start":{"row":83,"column":27},"end":{"row":83,"column":28},"action":"insert","lines":["e"]},{"start":{"row":83,"column":28},"end":{"row":83,"column":29},"action":"insert","lines":["n"]},{"start":{"row":83,"column":29},"end":{"row":83,"column":30},"action":"insert","lines":["t"]},{"start":{"row":83,"column":30},"end":{"row":83,"column":31},"action":"insert","lines":["r"]},{"start":{"row":83,"column":31},"end":{"row":83,"column":32},"action":"insert","lines":["e"]}],[{"start":{"row":24,"column":8},"end":{"row":24,"column":28},"action":"remove","lines":["my-drum-machine/src/"],"id":224}],[{"start":{"row":84,"column":21},"end":{"row":84,"column":31},"action":"remove","lines":["Impact hit"],"id":225},{"start":{"row":84,"column":21},"end":{"row":84,"column":22},"action":"insert","lines":["S"]},{"start":{"row":84,"column":22},"end":{"row":84,"column":23},"action":"insert","lines":["e"]},{"start":{"row":84,"column":23},"end":{"row":84,"column":24},"action":"insert","lines":["r"]},{"start":{"row":84,"column":24},"end":{"row":84,"column":25},"action":"insert","lines":["v"]},{"start":{"row":84,"column":25},"end":{"row":84,"column":26},"action":"insert","lines":["i"]},{"start":{"row":84,"column":26},"end":{"row":84,"column":27},"action":"insert","lines":["c"]},{"start":{"row":84,"column":27},"end":{"row":84,"column":28},"action":"insert","lines":["e"]}],[{"start":{"row":84,"column":28},"end":{"row":84,"column":29},"action":"insert","lines":[" "],"id":226},{"start":{"row":84,"column":29},"end":{"row":84,"column":30},"action":"insert","lines":["B"]},{"start":{"row":84,"column":30},"end":{"row":84,"column":31},"action":"insert","lines":["e"]},{"start":{"row":84,"column":31},"end":{"row":84,"column":32},"action":"insert","lines":["l"]},{"start":{"row":84,"column":32},"end":{"row":84,"column":33},"action":"insert","lines":["l"]}],[{"start":{"row":85,"column":21},"end":{"row":85,"column":24},"action":"remove","lines":["Rim"],"id":227},{"start":{"row":85,"column":21},"end":{"row":85,"column":22},"action":"insert","lines":["P"]},{"start":{"row":85,"column":22},"end":{"row":85,"column":23},"action":"insert","lines":["e"]},{"start":{"row":85,"column":23},"end":{"row":85,"column":24},"action":"insert","lines":["n"]}],[{"start":{"row":85,"column":24},"end":{"row":85,"column":25},"action":"insert","lines":[" "],"id":228},{"start":{"row":85,"column":25},"end":{"row":85,"column":26},"action":"insert","lines":["C"]},{"start":{"row":85,"column":26},"end":{"row":85,"column":27},"action":"insert","lines":["l"]},{"start":{"row":85,"column":27},"end":{"row":85,"column":28},"action":"insert","lines":["i"]},{"start":{"row":85,"column":28},"end":{"row":85,"column":29},"action":"insert","lines":["c"]},{"start":{"row":85,"column":29},"end":{"row":85,"column":30},"action":"insert","lines":["k"]},{"start":{"row":85,"column":30},"end":{"row":85,"column":31},"action":"insert","lines":["i"]},{"start":{"row":85,"column":31},"end":{"row":85,"column":32},"action":"insert","lines":["n"]},{"start":{"row":85,"column":32},"end":{"row":85,"column":33},"action":"insert","lines":["g"]}],[{"start":{"row":86,"column":21},"end":{"row":86,"column":27},"action":"remove","lines":["Funk 1"],"id":229},{"start":{"row":86,"column":21},"end":{"row":86,"column":22},"action":"insert","lines":["P"]},{"start":{"row":86,"column":22},"end":{"row":86,"column":23},"action":"insert","lines":["u"]},{"start":{"row":86,"column":23},"end":{"row":86,"column":24},"action":"insert","lines":["b"]},{"start":{"row":86,"column":24},"end":{"row":86,"column":25},"action":"insert","lines":["l"]},{"start":{"row":86,"column":25},"end":{"row":86,"column":26},"action":"insert","lines":["i"]},{"start":{"row":86,"column":26},"end":{"row":86,"column":27},"action":"insert","lines":["c"]}],[{"start":{"row":86,"column":27},"end":{"row":86,"column":28},"action":"insert","lines":[" "],"id":230},{"start":{"row":86,"column":28},"end":{"row":86,"column":29},"action":"insert","lines":["T"]},{"start":{"row":86,"column":29},"end":{"row":86,"column":30},"action":"insert","lines":["r"]},{"start":{"row":86,"column":30},"end":{"row":86,"column":31},"action":"insert","lines":["a"]},{"start":{"row":86,"column":31},"end":{"row":86,"column":32},"action":"insert","lines":["n"]},{"start":{"row":86,"column":32},"end":{"row":86,"column":33},"action":"insert","lines":["s"]},{"start":{"row":86,"column":33},"end":{"row":86,"column":34},"action":"insert","lines":["i"]},{"start":{"row":86,"column":34},"end":{"row":86,"column":35},"action":"insert","lines":["t"]}],[{"start":{"row":86,"column":35},"end":{"row":86,"column":36},"action":"insert","lines":[" "],"id":231},{"start":{"row":86,"column":36},"end":{"row":86,"column":37},"action":"insert","lines":["B"]},{"start":{"row":86,"column":37},"end":{"row":86,"column":38},"action":"insert","lines":["u"]},{"start":{"row":86,"column":38},"end":{"row":86,"column":39},"action":"insert","lines":["s"]}],[{"start":{"row":87,"column":21},"end":{"row":87,"column":27},"action":"remove","lines":["Funk 2"],"id":232},{"start":{"row":87,"column":21},"end":{"row":87,"column":22},"action":"insert","lines":["P"]},{"start":{"row":87,"column":22},"end":{"row":87,"column":23},"action":"insert","lines":["a"]},{"start":{"row":87,"column":23},"end":{"row":87,"column":24},"action":"insert","lines":["r"]},{"start":{"row":87,"column":24},"end":{"row":87,"column":25},"action":"insert","lines":["t"]},{"start":{"row":87,"column":25},"end":{"row":87,"column":26},"action":"insert","lines":["y"]}],[{"start":{"row":87,"column":26},"end":{"row":87,"column":27},"action":"insert","lines":[" "],"id":233},{"start":{"row":87,"column":27},"end":{"row":87,"column":28},"action":"insert","lines":["H"]},{"start":{"row":87,"column":28},"end":{"row":87,"column":29},"action":"insert","lines":["o"]},{"start":{"row":87,"column":29},"end":{"row":87,"column":30},"action":"insert","lines":["r"]},{"start":{"row":87,"column":30},"end":{"row":87,"column":31},"action":"insert","lines":["n"]}],[{"start":{"row":88,"column":21},"end":{"row":88,"column":27},"action":"remove","lines":["Funk 3"],"id":234},{"start":{"row":88,"column":21},"end":{"row":88,"column":22},"action":"insert","lines":["T"]},{"start":{"row":88,"column":22},"end":{"row":88,"column":23},"action":"insert","lines":["y"]},{"start":{"row":88,"column":23},"end":{"row":88,"column":24},"action":"insert","lines":["p"]},{"start":{"row":88,"column":24},"end":{"row":88,"column":25},"action":"insert","lines":["e"]},{"start":{"row":88,"column":25},"end":{"row":88,"column":26},"action":"insert","lines":["w"]},{"start":{"row":88,"column":26},"end":{"row":88,"column":27},"action":"insert","lines":["r"]},{"start":{"row":88,"column":27},"end":{"row":88,"column":28},"action":"insert","lines":["i"]},{"start":{"row":88,"column":28},"end":{"row":88,"column":29},"action":"insert","lines":["t"]},{"start":{"row":88,"column":29},"end":{"row":88,"column":30},"action":"insert","lines":["e"]},{"start":{"row":88,"column":30},"end":{"row":88,"column":31},"action":"insert","lines":["r"]}],[{"start":{"row":92,"column":0},"end":{"row":93,"column":0},"action":"insert","lines":["",""],"id":235},{"start":{"row":93,"column":0},"end":{"row":94,"column":0},"action":"insert","lines":["",""]},{"start":{"row":94,"column":0},"end":{"row":95,"column":0},"action":"insert","lines":["",""]},{"start":{"row":95,"column":0},"end":{"row":96,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":93,"column":0},"end":{"row":142,"column":3},"action":"insert","lines":["handleKey = (event) => {","    switch(event.keyCode) {","      case SOUNDS[0].KC: ","        this.toPlay = document.getElementById('Q');        ","        this.toPlay.play(); ","        this.setDisplay(0)","        break;","      case SOUNDS[1].KC: ","        this.toPlay = document.getElementById('W');","        this.toPlay.play();","        this.setDisplay(1);","        break;","      case SOUNDS[2].KC: ","        this.toPlay = document.getElementById('E');","        this.toPlay.play();","        this.setDisplay(2);","        break;","      case SOUNDS[3].KC: ","        this.toPlay = document.getElementById('A');","        this.toPlay.play(); ","        this.setDisplay(3);","        break;","      case SOUNDS[4].KC: ","        this.toPlay = document.getElementById('S');","        this.toPlay.play();","        this.setDisplay(4);","        break;","      case SOUNDS[5].KC: ","        this.toPlay = document.getElementById('D'); ","        this.toPlay.play();","        this.setDisplay(5);","        break;","      case SOUNDS[6].KC: ","        this.toPlay = document.getElementById('Z'); ","        this.toPlay.play();","        this.setDisplay(6)","        break;","      case SOUNDS[7].KC: ","        this.toPlay = document.getElementById('X');","        this.toPlay.play(); ","        this.setDisplay(7)","        break;","      case SOUNDS[8].KC: ","        this.toPlay = document.getElementById('C'); ","        this.toPlay.play(); ","        this.setDisplay(8)","        break;","    }","    ","  }"],"id":236}],[{"start":{"row":98,"column":26},"end":{"row":98,"column":27},"action":"insert","lines":[";"],"id":237}],[{"start":{"row":94,"column":16},"end":{"row":94,"column":24},"action":"remove","lines":[".keyCode"],"id":238}],[{"start":{"row":95,"column":20},"end":{"row":95,"column":23},"action":"remove","lines":[".KC"],"id":239}],[{"start":{"row":100,"column":20},"end":{"row":100,"column":23},"action":"remove","lines":[".KC"],"id":240}],[{"start":{"row":105,"column":20},"end":{"row":105,"column":23},"action":"remove","lines":[".KC"],"id":241}],[{"start":{"row":110,"column":20},"end":{"row":110,"column":23},"action":"remove","lines":[".KC"],"id":242}],[{"start":{"row":115,"column":20},"end":{"row":115,"column":23},"action":"remove","lines":[".KC"],"id":243}],[{"start":{"row":120,"column":20},"end":{"row":120,"column":23},"action":"remove","lines":[".KC"],"id":244}],[{"start":{"row":128,"column":26},"end":{"row":128,"column":27},"action":"insert","lines":[";"],"id":245}],[{"start":{"row":133,"column":26},"end":{"row":133,"column":27},"action":"insert","lines":[";"],"id":246}],[{"start":{"row":138,"column":26},"end":{"row":138,"column":27},"action":"insert","lines":[";"],"id":247}],[{"start":{"row":125,"column":20},"end":{"row":125,"column":23},"action":"remove","lines":[".KC"],"id":248}],[{"start":{"row":130,"column":20},"end":{"row":130,"column":23},"action":"remove","lines":[".KC"],"id":249}],[{"start":{"row":135,"column":20},"end":{"row":135,"column":23},"action":"remove","lines":[".KC"],"id":250}],[{"start":{"row":144,"column":0},"end":{"row":193,"column":3},"action":"insert","lines":["handleKey = (event) => {","    switch(event.keyCode) {","      case SOUNDS[0].KC: ","        this.toPlay = document.getElementById('Q');        ","        this.toPlay.play(); ","        this.setDisplay(0)","        break;","      case SOUNDS[1].KC: ","        this.toPlay = document.getElementById('W');","        this.toPlay.play();","        this.setDisplay(1);","        break;","      case SOUNDS[2].KC: ","        this.toPlay = document.getElementById('E');","        this.toPlay.play();","        this.setDisplay(2);","        break;","      case SOUNDS[3].KC: ","        this.toPlay = document.getElementById('A');","        this.toPlay.play(); ","        this.setDisplay(3);","        break;","      case SOUNDS[4].KC: ","        this.toPlay = document.getElementById('S');","        this.toPlay.play();","        this.setDisplay(4);","        break;","      case SOUNDS[5].KC: ","        this.toPlay = document.getElementById('D'); ","        this.toPlay.play();","        this.setDisplay(5);","        break;","      case SOUNDS[6].KC: ","        this.toPlay = document.getElementById('Z'); ","        this.toPlay.play();","        this.setDisplay(6)","        break;","      case SOUNDS[7].KC: ","        this.toPlay = document.getElementById('X');","        this.toPlay.play(); ","        this.setDisplay(7)","        break;","      case SOUNDS[8].KC: ","        this.toPlay = document.getElementById('C'); ","        this.toPlay.play(); ","        this.setDisplay(8)","        break;","    }","    ","  }"],"id":251}],[{"start":{"row":144,"column":0},"end":{"row":193,"column":3},"action":"remove","lines":["handleKey = (event) => {","    switch(event.keyCode) {","      case SOUNDS[0].KC: ","        this.toPlay = document.getElementById('Q');        ","        this.toPlay.play(); ","        this.setDisplay(0)","        break;","      case SOUNDS[1].KC: ","        this.toPlay = document.getElementById('W');","        this.toPlay.play();","        this.setDisplay(1);","        break;","      case SOUNDS[2].KC: ","        this.toPlay = document.getElementById('E');","        this.toPlay.play();","        this.setDisplay(2);","        break;","      case SOUNDS[3].KC: ","        this.toPlay = document.getElementById('A');","        this.toPlay.play(); ","        this.setDisplay(3);","        break;","      case SOUNDS[4].KC: ","        this.toPlay = document.getElementById('S');","        this.toPlay.play();","        this.setDisplay(4);","        break;","      case SOUNDS[5].KC: ","        this.toPlay = document.getElementById('D'); ","        this.toPlay.play();","        this.setDisplay(5);","        break;","      case SOUNDS[6].KC: ","        this.toPlay = document.getElementById('Z'); ","        this.toPlay.play();","        this.setDisplay(6)","        break;","      case SOUNDS[7].KC: ","        this.toPlay = document.getElementById('X');","        this.toPlay.play(); ","        this.setDisplay(7)","        break;","      case SOUNDS[8].KC: ","        this.toPlay = document.getElementById('C'); ","        this.toPlay.play(); ","        this.setDisplay(8)","        break;","    }","    ","  }"]}],[{"start":{"row":144,"column":0},"end":{"row":148,"column":3},"action":"insert","lines":[" componentWillMount() {","    this.build = SOUNDS.map( (e,i) => {","      return  <DrumPad index={i} name={Object.keys(e)[0]} playAudio={this.playAudio} src={e[Object.keys(e)[0]]} color={this.state.padColor}/>","    });","  }"],"id":253}],[{"start":{"row":146,"column":53},"end":{"row":146,"column":56},"action":"remove","lines":["[0]"],"id":254}],[{"start":{"row":146,"column":138},"end":{"row":146,"column":139},"action":"insert","lines":[";"],"id":255}],[{"start":{"row":146,"column":103},"end":{"row":146,"column":106},"action":"remove","lines":["[0]"],"id":256}],[{"start":{"row":152,"column":6},"end":{"row":167,"column":10},"action":"remove","lines":["<div className=\"App\">","      <header className=\"App-header\">","        ","        <p>","          Edit <code>src/App.js</code> and save to reload.","        </p>","        <a","          className=\"App-link\"","          href=\"https://reactjs.org\"","          target=\"_blank\"","          rel=\"noopener noreferrer\"","        >","          Learn React","        </a>","      </header>","    </div>"],"id":257}],[{"start":{"row":152,"column":6},"end":{"row":162,"column":10},"action":"insert","lines":["<div id='drum-machine' onClick={this.playAudio} onKeyDown={this.handleKey} tabIndex='0' >","      <Info />","        <div id='display'>","          <h2 className='text-center'>{this.state.display}</h2>","        </div> ","        <div id='view'>","          <div id='btn-group' className='text-center'>","             {this.build}","          </div>","        </div>","    </div>"],"id":258}],[{"start":{"row":152,"column":14},"end":{"row":152,"column":15},"action":"remove","lines":["'"],"id":259}],[{"start":{"row":152,"column":14},"end":{"row":152,"column":15},"action":"insert","lines":["\""],"id":260}],[{"start":{"row":152,"column":27},"end":{"row":152,"column":28},"action":"remove","lines":["'"],"id":261}],[{"start":{"row":152,"column":27},"end":{"row":152,"column":28},"action":"insert","lines":["\""],"id":262}],[{"start":{"row":154,"column":16},"end":{"row":154,"column":17},"action":"remove","lines":["'"],"id":263}],[{"start":{"row":154,"column":16},"end":{"row":154,"column":17},"action":"insert","lines":["\""],"id":264}],[{"start":{"row":154,"column":24},"end":{"row":154,"column":25},"action":"remove","lines":["'"],"id":265}],[{"start":{"row":154,"column":24},"end":{"row":154,"column":25},"action":"insert","lines":["\""],"id":266}],[{"start":{"row":152,"column":90},"end":{"row":152,"column":91},"action":"remove","lines":["'"],"id":267}],[{"start":{"row":152,"column":90},"end":{"row":152,"column":91},"action":"insert","lines":["\""],"id":268}],[{"start":{"row":152,"column":92},"end":{"row":152,"column":93},"action":"remove","lines":["'"],"id":269}],[{"start":{"row":152,"column":92},"end":{"row":152,"column":93},"action":"insert","lines":["\""],"id":270}],[{"start":{"row":157,"column":16},"end":{"row":157,"column":17},"action":"remove","lines":["'"],"id":271}],[{"start":{"row":157,"column":16},"end":{"row":157,"column":17},"action":"insert","lines":["\""],"id":272}],[{"start":{"row":157,"column":21},"end":{"row":157,"column":22},"action":"remove","lines":["'"],"id":273}],[{"start":{"row":157,"column":21},"end":{"row":157,"column":22},"action":"insert","lines":["\""],"id":274}],[{"start":{"row":158,"column":40},"end":{"row":158,"column":41},"action":"remove","lines":["'"],"id":275}],[{"start":{"row":158,"column":40},"end":{"row":158,"column":41},"action":"insert","lines":["\""],"id":276}],[{"start":{"row":158,"column":52},"end":{"row":158,"column":53},"action":"remove","lines":["'"],"id":277}],[{"start":{"row":158,"column":52},"end":{"row":158,"column":53},"action":"insert","lines":["\""],"id":278}],[{"start":{"row":165,"column":1},"end":{"row":166,"column":0},"action":"insert","lines":["",""],"id":279},{"start":{"row":166,"column":0},"end":{"row":167,"column":0},"action":"insert","lines":["",""]}]]},"ace":{"folds":[{"start":{"row":33,"column":43},"end":{"row":165,"column":0},"placeholder":"..."}],"scrolltop":340.5,"scrollleft":0,"selection":{"start":{"row":167,"column":0},"end":{"row":167,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":20,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1581605520262}