let button1 = document.getElementById('next');
let button2 = document.getElementById('previous');
let image1 = document.querySelector('#img1');
let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");
let image4 = document.getElementById("img4");
let image5 = document.getElementById("img5");

button1.addEventListener('click', function (e) {
    image1.style.width = 400 + "px";
    image2.style.width = 400 + "px";
    image3.style.width = 400 + "px";
    image4.style.width = 400 + "px";
    image5.style.width = 400 + "px";
});

button2.addEventListener('click', function (e) {
    image1.style.width = 50 + "px";
    image2.style.width = 50 + "px";
    image3.style.width = 50 + "px";
    image4.style.width = 50 + "px";
    image5.style.width = 50 + "px";

})
