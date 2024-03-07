// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Global variable to store the classifier
let classifier;

// Label (start by showing listening)
let label = "listening";

// Teachable Machine model URL:
let soundModelURL = 'https://teachablemachine.withgoogle.com/models/CB2msEbIw/model.json';

function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModelURL);
}

function setup() {
  createCanvas(400, 240);

  classifier.classify(gotResult);
}

function draw() {
  background(0, 45, 180);




  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  text("Currently singing:", (2 * width) / 4, height/6);

  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text(label, (2 * width) / 4, height / 2);



}


function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }

  label = results[0].label;
}
