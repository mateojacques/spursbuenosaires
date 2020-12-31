//MOBILE MENU

let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");
let closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(0px)";
});

closeBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(200px)";
});

//CLUB PAGE DROPDOWN

let arrows = document.getElementsByClassName("arrow");

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", () => {
    if (arrows[i].style.transform == "") {
      arrows[i].style.transform = "rotate(90deg)";
    } else {
      arrows[i].style.transform = "";
    }
  });
}

let titles = document.getElementsByClassName("club-item__title");
let contents = document.getElementsByClassName("club-item__content");

for (let titleIndex = 0; titleIndex < titles.length; titleIndex++) {
  titles[titleIndex].addEventListener("click", () => {
    if (arrows[titleIndex].style.transform == "") {
      arrows[titleIndex].style.transform = "rotate(90deg)";
      for (let contIndex = 0; contIndex < contents.length; contIndex++) {
        if (contIndex == titleIndex) {
          contents[contIndex].style.maxHeight = "2000px";
        } else {
        }
      }
    } else {
      arrows[titleIndex].style.transform = "";
      for (let contIndex = 0; contIndex < contents.length; contIndex++) {
        if (contIndex == titleIndex) {
          contents[contIndex].style.maxHeight = "0px";
        } else {
        }
      }
    }
  });
}