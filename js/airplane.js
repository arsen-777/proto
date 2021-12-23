"use strict";

const Airplane = {
  takeOff() {
    airplaneOne.isFlying = true;
  },
  lands() {
    airplaneOne.isFlying = false;
  },
};

const airplaneOne = {
  __proto__: Airplane,
  name: "Mic",
  isFlying: false,
};

console.log(airplaneOne.name);
console.log(airplaneOne.isFlying); // false
airplaneOne.takeOff();
console.log(airplaneOne.isFlying); // true
airplaneOne.lands();
console.log(airplaneOne.isFlying);
