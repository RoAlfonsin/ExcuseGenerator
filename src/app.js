/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

let who = [
  "The dog",
  "My grandma",
  "His turtle",
  "My bird",
  "Our cat",
  "Their hamster",
  "Your fish",
  "The neighbor's parrot",
  "A stray rabbit"
];
let action = [
  "ate",
  "peed",
  "crushed",
  "broke",
  "spilled",
  "burned",
  "ripped",
  "lost",
  "melted"
];
let what = [
  "my homework",
  "the keys",
  "the car",
  "the computer",
  "the phone",
  "the wallet",
  "the house"
];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
  "after the game",
  "before bedtime"
];

function get_rand_number(list_length) {
  let answer = parseInt(Math.random() * 10000) % list_length;
  return answer;
}

function create_excuse() {
  let answer = "";
  answer += who[get_rand_number(who.length)];
  answer += " ";
  answer += action[get_rand_number(action.length)];
  answer += " ";
  answer += what[get_rand_number(what.length)];
  answer += " ";
  answer += when[get_rand_number(when.length)];
  answer += ".";
  return answer;
}

window.onload = function() {
  //write your code here
  document.querySelector("#excuse_intro").innerHTML =
    "OMG! you will not believe me but...";
  document.querySelector("#excuse_ending").innerHTML = create_excuse();
};
