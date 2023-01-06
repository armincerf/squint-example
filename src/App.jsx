import { useState as react_useState, useEffect as react_useEffect } from 'react'
import {  } from './VisxExample'
import {  } from '@mui/material/Box'
import {  } from '@mui/material/Button'
import {  } from '@mui/material/TextField'
import {  } from '@mui/material/Typography'
import { first, atom, reset_BANG_, shuffle, remove, get, rand_int, nth, deref } from 'squint-cljs/core.js'
import Visx from './VisxExample';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
var animalsData = [({ "sound": "Moo Moo", "animal": "Cow", "language": "English" }), ({ "sound": "Miau Miau", "animal": "Cat", "language": "Spanish" }), ({ "sound": "Bark Bark", "animal": "Dog", "language": "German" })]
;
var testatom = atom(null)
;
var Game = function (p__1) {
let map__23 = p__1;
let sound4 = get(map__23, "sound");
let animal5 = get(map__23, "animal");
let language6 = get(map__23, "language");
let vec__710 = react_useState("");
let guess11 = nth(vec__710, 0, null);
let set_guess12 = nth(vec__710, 1, null);
let correct_QMARK_13 = (animal5 === guess11);
let test14 = deref(testatom);
react_useEffect(function () {
return set_guess12("");
}, [test14]);
return <Box><Typography variant="h4">What animal is this?</Typography> <Typography variant="h6">{sound4}</Typography> <TextField label="Animal" value={guess11} onChange={function (_PERCENT_1) {
return set_guess12(get(get(_PERCENT_1, "target"), "value"));
}}></TextField> {(correct_QMARK_13) ? (<Typography variant="h4">Correct!</Typography>) : (null)}</Box>;
}
;
var App = function () {
let vec__1518 = react_useState(first(shuffle(animalsData)));
let animal19 = nth(vec__1518, 0, null);
let set_animal20 = nth(vec__1518, 1, null);
return <Box sx={({ "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center" })}><Box sx={({ "display": "flex", "flexDirection": "column", "gap": "1rem", "alignItems": "center", "justifyContent": "center", "width": "100%" })}><Typography variant="h1">Hello, alex</Typography> <Game {...animal19}></Game> <Visx width={400} height={400}></Visx> <Button variant="contained" color="primary" onClick={function () {
reset_BANG_(testatom, rand_int(100));
return set_animal20(first(shuffle(remove(function (p__21) {
let map__2223 = p__21;
let sound24 = get(map__2223, "sound");
return (sound24 === get(animal19, "sound"));
}, animalsData))));
}}>New Game</Button></Box></Box>;
}
;

export { animalsData, testatom, Game, App }
