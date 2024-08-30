const form = document.getElementById("form");
const btn = document.getElementById("Enter");
const dataBase = [];

function validateForm() {
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const message = form.elements.message.value

  if (name === "" || email === "" || password === "" || message === "") {
    alert("Incorrect, Please Enter in all fields");
    return;
  }

  alert("Message sent");
  console.log("Form was sucssesfully submitted");
  dataBase.push({
    Name: name,
    Email: email,
    Password: password,
    Message: message,
  });
  console.log(dataBase);
}

btn.onclick = validateForm; 

let myInput = document.getElementById("password");
let letter = document.getElementById("lower-letter");
let capital = document.getElementById("upper-letter");
let number = document.getElementById("number");
let length = document.getElementById("length");

myInput.onfocus = function() {
  document.getElementById("messege").style.display = "block";
}

myInput.onblur = function() {
  document.getElementById("messege").style.display = "none";
}

myInput.onkeyup = function() {
  let lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  let upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  let numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

const background = document.getElementById("parent");
const secondBackground = document.getElementById("work");
const thirdBackground = document.getElementById("pages");
const anchor = document.getElementById(".a-anchor");
const toggle = document.getElementById("toggle");
const inputs = {
  1: document.getElementById("name"),
  2: document.getElementById("email"),
  3: document.getElementById("password"),
  4: document.getElementById("message")
};

function darkMode() {
  background.style.backgroundColor = "rgb(29, 29, 29)";
  background.style.color = "white";
  secondBackground.style.backgroundColor = "black";
  thirdBackground.style.backgroundColor = "rgb(29, 29, 29)";
  anchor.style.color = "white";
  inputs.style.backgroundColor = "rgb(29, 29, 29)";
  inputs.style.color = "white";
}

toggle.onclick = darkMode;