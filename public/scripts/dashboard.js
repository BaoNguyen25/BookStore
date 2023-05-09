//toogle navbar
'use strict';

let el = document.getElementById("wrapper");
let toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};

//others
let navbar_highlight = document.getElementById('home-link').classList.add('active');
