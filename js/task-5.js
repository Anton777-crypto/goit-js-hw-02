"use strict";
function checkAge(age) {
  if (age < 0) {
    return "Invalid age";
  } else if (age <= 18) {
    return "You are a minor";
  } else if (age >= 18 || age <= 65) {
    return "You are an adult";
  } else if (age > 65) {
    return "You are a senior";
  }
}
console.log(checkAge(18));
function checkAge1(age) {
  switch (true) {
    case age < 0:
      return "Invalid age";
    case age <= 18:
      return "You are a minor";
    case age <= 65:
      return "You are an adult";
    default:
      return "You are a senior";
  }
}
console.log(checkAge1(18));

function checkAge1(age) {
  return age < 0
    ? "Invalid age"
    : age <= 18
    ? "You are a minor"
    : age <= 65
    ? "You are an adult"
    : "You are a senior";
}
console.log(checkAge1(-1));
