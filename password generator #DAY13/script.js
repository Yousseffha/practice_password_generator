let password = document.getElementById("password");
let btn = document.getElementById("btn");
let str =
  "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN1234567890/*@#[(]){}&!.+-/$£<>éçè^,;:=";

let passwordLength = 10;

function GeneratePassword() {
  password.innerHTML = "";
  for (let i = 0; i < passwordLength; i++) {
    let char = document.createElement("span");
    char.innerHTML = str[Math.floor(Math.random() * str.length)];
    password.append(char);
  }
}

btn.addEventListener("click", GeneratePassword);
