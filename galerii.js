//Kood loob muutuja nimega slideIndex ja määrab selle väärtuseks 1. See muutuja jälgib praegust kuvatavat slaidi.
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}
//Funktsioon showSlides vastutab slaidide näitamise eest. See võtab parameetri n, mis on kuvatava slaidi number.
function showSlides(n) {
    //Funktsiooni sees saab kood kõigepealt kõik elemendid klassinimega "slide",
    //kasutades meetodit document.getElementsByClassName ja salvestab need muutujasse nimega slaidid.
    let slides = document.getElementsByClassName("slide");
    //Kui n on väiksem kui 1, määratakse slideIndex slaidide koguarvule,
    //mis tähendab, et slaidiseanss algab viimasest slaidist
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}