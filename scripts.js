//Use this file to implement Part One of your project

var animal = {};

animal.username = "Gilly the Pig";

animal["tagline"] = "Giggity";

var noises = noiseArray;
animal.noises = noises;

var count = 0;
for (var key in animal) {
  count++; // count = count +1;
  if (key === "username") {
    console.log("Hi my name is " + animal[key]);
  } else if (key === "tagline") {
    console.log("I like to say " + animal[key]);
  }
}

// Create an array for noises for animal
var noiseArray = ["noise1", "oink"];

noiseArray.unshift("noise0");
noiseArray.push("noise2");

noiseArray[3] = ("yeehaw");

animal.noises = noiseArray;
console.log(animal);

//Create an array to store the collection of animals
var animals = [];

animals.push(animal);

var quackers = {
  username: "DaffyDuck",
  tagline: "Yippeee!",
  noises: ["quack", "honk", "sneeze", "growl"]
};

//adds quackers to animals array at number 1, because .length is longer
//than the array by 1 since array starts at 0
animals[animals.length] = quackers;

console.log(animals);

var honkers = {
  username: "Danny the Giraffe",
  tagline: "Dammit Danny",
  noises: ["yo", "saturday", "yessir"]
};

var bubs = {
  username: "Jessica the Flamingo",
  tagline: "Don't bother me",
  noises: ["you're so annoying", "bubs"]
};

animals.unshift(honkers, bubs);

console.log(animals.length);
