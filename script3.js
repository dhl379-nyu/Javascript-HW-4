let mainBox = document.getElementsByClassName('mainBox')[0];
let cat = document.getElementById('cat');

let data = {
  "clothes": ["hat2.png", "glasses2.png", "mustache2.png", "belt2.png"],
  "cat": "cat2.jpg",
  "color": "black"
}

let newImage = document.createElement('img');
newImage.src = data['cat'];
cat.appendChild(newImage);
cat.style.left = (window.innerWidth / 2) + "px";

document.body.style.backgroundColor = data['color'];

for (var i = 0; i < data['clothes'].length; i++) {
  var imageContainer = document.createElement('div');
  imageContainer.classList.add("decoration");
  var image = document.createElement('img');
  var source = data['clothes'][i];
  image.src = source;
  imageContainer.appendChild(image);
  clothes4.appendChild(imageContainer);
}

let decoration0 = document.getElementsByClassName('decoration')[0];
let decoration1 = document.getElementsByClassName('decoration')[1];
let decoration2 = document.getElementsByClassName('decoration')[2];
let decoration3 = document.getElementsByClassName('decoration')[3];


document.addEventListener("DOMContentLoaded", function() {

  decoration0.addEventListener("click", move0);

  function move0() {
    decoration0.style.left = (cat.offsetLeft + 250) + "px";
    decoration0.style.top = "110px";
  }

  decoration1.addEventListener("click", move1);

  function move1() {
    decoration1.style.left = (cat.offsetLeft + 245) + "px";
    decoration1.style.top = "210px";
  }

  decoration2.addEventListener("click", move2);

  function move2() {
    decoration2.style.left = (cat.offsetLeft + 269) + "px";
    decoration2.style.top = "253px";
  }

  decoration3.addEventListener("click", move3);

  function move3() {
    decoration3.style.left = (cat.offsetLeft + 200) + "px";
    decoration3.style.top = "560px";
    var box = document.createElement('div');
    box.classList.add('box');
    mainBox.appendChild(box);
    box.innerHTML = "Merry Christmas";
    box.style.fontSize = "10vmin";
    box.style.fontFamily = "serif";
    box.style.position = "absolute";
    box.style.top = "300px";
    box.style.left = "100px";
    box.style.color = "white";
  }




})
