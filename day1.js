if (5<7) {
  console.log("this is always true");
}

if (5>7) {
    console.log("this will never be true");
}   else {
        console.log("this is so not true!");
}

if(prompt("how are you feeling") === "sad") {
    console.log("feel better soon");
}

if (prompt("guess the secret number!") !== 3) {
    console.log("warning, you guessed wrong!");
}

if (prompt("enter your password:") === "password123") {
    alert("Welcome!");
}    else {
        window.location = "google.com";
}

var x = 5;

if (x > 10) {
    console.log("more");
}   else {
        console.log("less");
}
var x =11;
var y = (x > 10) ? console.log("more") : console.log("less");
