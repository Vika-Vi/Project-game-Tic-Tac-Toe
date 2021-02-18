function generateRandomColor() {
  // console.log("print");
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function changeBackgroundColor() {
  let colorBg = document.getElementById("color-overlay");
  let randomTo360 = Math.round(Math.random()*360);
  //console.log(randomTo360);
  colorBg.style.backgroundColor = generateRandomColor();
}
export function changeBackground() {
  setInterval(changeBackgroundColor, 300);
}



// 