import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let icons = ["♦", "♥", "♠", "♣"];
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  function changeCard() {
    let randomIcons = Math.floor(Math.random() * icons.length);
    let randomNumbers = Math.floor(Math.random() * numbers.length);

    document.getElementsByClassName("icons")[0].textContent = icons[randomIcons];
    document.getElementsByClassName("icons")[1].textContent = icons[randomIcons];
    document.getElementById("numbers").textContent = numbers[randomNumbers];

    let hand = icons[randomIcons]

    if (hand === "♦" || hand === "♥") {
      document.getElementsByClassName("icons")[0].style.color = "red";
      document.getElementsByClassName("icons")[1].style.color = "red";
      document.getElementById("numbers").style.color = "black";
    }
   
    console.log(hand);
    return hand;


  }

  changeCard()

  


};
