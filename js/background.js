const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const eq = Math.floor(Math.random() * images.length);
const chosenImage = images[eq];

const bgImage = document.createElement("img");
bgImage.classList.add("bg");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
