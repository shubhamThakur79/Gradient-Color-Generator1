let btn1 = document.querySelector("#mybtn1");
let btn2 = document.querySelector("#mybtn2");


let colorGenerator = () => {
  let myHexaValue = "0123456789abcdef";
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    color = color + (myHexaValue[Math.floor(Math.random() * 16)]);

  }
  return color;
}

let rgb1 = "#00d4ff";
let rgb2 = "#643385";

btn1.addEventListener("click", () => {
  // function 1 here
  let rgb1 = colorGenerator();

  let body = document.querySelector("body");
  body.style.background = `linear-gradient(to right,${rgb1}, ${rgb2})`;
  const copyCode = document.querySelector(".copy-code");
  copyCode.innerHTML = `linear-gradient(to right,${rgb1}, ${rgb2})`;
  btn1.innerHTML = rgb1;

})

//  function 2
btn2.addEventListener("click", () => {
  let rgb2 = colorGenerator();
  let body = document.querySelector("body");
  body.style.background = `linear-gradient(to right,${rgb2}, ${rgb1})`;
  const copyCode = document.querySelector(".copy-code");
  copyCode.innerHTML = `linear-gradient(to right,${rgb2}, ${rgb1})`;
  btn2.innerHTML = rgb2;


})
const copyCode = document.querySelector(".copy-code");
copyCode.addEventListener("click", () => {
  navigator.clipboard.writeText(copyCode.innerHTML);
  alert("copy in clipboard");
})