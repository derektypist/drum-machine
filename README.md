# Drum Machine
 
Welcome to Drum Machine.  The purpose of this project is to have functionality similar to
https://codepen.io/freeCodeCamp/full/MJyNMd.

## UX

There are 9 keys on the keyboard - Q, W, E, A, S, D, Z, X, C.  The display has an initial background
colour of light blue and the view has a background color of lime.  The drum pad when active has a
background color of yellow.  On clicking the drum pad, the background color is white.

SOUNDS
------

* Q - 'Drum-Roll-SoundBible.com-1599301580.mp3'
* W - 'Halogen Light-SoundBible.com-1664817471.mp3'
* E: 'Sci-Fi-Robot-SoundBible.com-481033379.mp3'
* A: 'City_Centre-Hopeinawe-377331566.mp3'
* S: 'service-bell_daniel_simion.mp3'
* D: 'Pen-Clicking-SoundBible.com-482574858.mp3'
* Z: 'Public-Transit-Bus-SoundBible.com-671541921.mp3'
* X: 'party_horn-Mike_Koenig-76599891.mp3'
* C: 'Typewriter-SoundBible.com-285954942.mp3'

NAMES ON DISPLAY
----------------

Initial State - Novice Drummer.

Drum Roll, Halogen Light, Sci Fi Robot, City Centre, Service Bell, Pen Clicking,
Public Transit Bus, Party Horn and Typewriter.  Otherwise it is You Rock.

Q has index 0, W has index 1, E has index 2 and so on.

### User Stories

Taken from https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine

Outer Container with id=drum-machine

Within #drum-machine, an element must have an id of display.

Within #drum-machine, 9 clickable drum pad elements with class=drum-pad.  Unique ID that describes the
audio drum pad will be set up to trigger.  Inner text that corresponds to one of the following keys on the
keyboard: Q, W, E, A, S, D, Z, X, C.

Within each .drum-pad, there should be an HTML5 audio element which has a 
src attribute pointing to an audio clip, a class name of clip, 
and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", 
pressing the W key should trigger the drum pad which contains the string "W", etc.).

When a .drum-pad is triggered, a string describing the associated 
audio clip is displayed as the inner text of the #display element (each string must be unique).

[Wireframes](wireframes/wireframe-drum-machine.png) are supplied.

## Features

Drum Machine has 9 keys.

## Technologies

This project uses HTML5, CSS3, Bootstrap 4.4.1 and React.  Other Technologies include Google Fonts and HTML5 Audio.

## Testing

Ensure all user stories have been met.

## Deployment

This project is deployed on [GitHub Pages](https://derektypist.github.io/drum-machine)

Remote set up at

    git remote add origin https://github.com/derektypist/drum-machine
    
Use commands npm run build and npm run deploy to update any changes.

## Credits

### Content

Written by me, although other sources (e.g. React Components taken from Steven Youhana in freecodecamp.org) have been used.

### Media

Uses Audio Clips, downloaded from the [Sound Bible Website](https://www.soundbible.com).

### Acknowledgements

Steven Youhana in freecodecamp.org - Drum Machine Audio Element Forum.

[Drum Machine Audio Element Forum](https://www.freecodecamp.org/forum/t/drum-machine-audio-element/210860) accessed
on 12 February 2020.

https://www.soundbible.com - Accessed 12 February 2020

    Drum Roll Sounds at http://soundbible.com/716-Drum-Roll.html
    Halogen Light at http://soundbible.com/1085-Halogen-Light.html
    Sci-Fi Robot Sounds at http://soundbible.com/1317-Sci-Fi-Robot.html
    City Centre Sounds at http://soundbible.com/2000-City-Centre.html
    Service Bell Help Sounds at http://soundbible.com/2218-Service-Bell-Help.html
    Pen Clicking Sounds at http://soundbible.com/835-Pen-Clicking.html
    Public Transit Bus Sounds at http://soundbible.com/1698-Public-Transit-Bus.html
    Party Horn Sounds at http://soundbible.com/1817-Party-Horn.html
    Typewriter Sounds at http://soundbible.com/827-Typewriter.html
    