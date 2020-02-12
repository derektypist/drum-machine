# Drum Machine
 
Welcome to Drum Machine.  The purpose of this project is to have functionality similar to
https://codepen.io/freeCodeCamp/full/MJyNMd.

## UX

There are 9 keys on the keyboard - Q, W, E, A, S, D, Z, X, C.

Power On Bank Off
-----------------

On Load - Heater Kit

* Q Pressed - Heater 1
* W Pressed - Heater 2
* E Pressed - Heater 3
* A Pressed - Heater 4
* S Pressed - Clap
* D Pressed - Open HH
* Z Pressed - Kick n' Hat
* X Pressed - Kick
* C Pressed - Closed HH

Power On Bank On
----------------

On Load - Smooth Piano Kit

* Q Pressed - Chord 1
* W Pressed - Chord 2
* E Pressed - Chord 3
* A Pressed - Shaker
* S Pressed - Open HH
* D Pressed - Closed HH
* Z Pressed - Punchy Kick
* X Pressed - Side Stick
* C Pressed - Snare

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

## Credits


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
    