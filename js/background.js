const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const eq = Math.floor(Math.random() * images.length);
const chosenImage = images[eq];
const bgAlpha = document.createElement("div");
bgAlpha.classList.add("bgAlpha");
const bgImage = document.createElement("img");
bgImage.classList.add("bg");
bgImage.src = `resources/img/${chosenImage}`;

document.body.appendChild(bgAlpha);
document.body.appendChild(bgImage);
