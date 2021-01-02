//INTRO ANIMATION 

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to(".intro-text", {y: "0px", duration: 2});
tl.to(".away", {opacity: 0, duration: 1});
tl.to(".intro", {y: "100%", duration: 2, delay: 1});



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
let titles = document.getElementsByClassName("club-item__title");
let contents = document.getElementsByClassName("club-item__content");

//TITLE DROPDOWN

for (let titleIndex = 0; titleIndex < titles.length; titleIndex++) {
  titles[titleIndex].addEventListener("click", () => {
    if (arrows[titleIndex].style.transform == "") {
      arrows[titleIndex].style.transform = "rotate(90deg)";
      for (let contIndex = 0; contIndex < contents.length; contIndex++) {
        if (contIndex == titleIndex) {
          contents[contIndex].style.maxHeight = "8000px";
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

//ARROW DROPDOWN

for (let arrIndex = 0; arrIndex < arrows.length; arrIndex++) {
    arrows[arrIndex].addEventListener("click", () => {
      if (arrows[arrIndex].style.transform == "") {
        arrows[arrIndex].style.transform = "rotate(90deg)";
        for (let contIndex = 0; contIndex < contents.length; contIndex++) {
          if (contIndex == arrIndex) {
            contents[contIndex].style.maxHeight = "8000px";
          } else {
          }
        }
      } else {
        arrows[arrIndex].style.transform = "";
        for (let contIndex = 0; contIndex < contents.length; contIndex++) {
          if (contIndex == arrIndex) {
            contents[contIndex].style.maxHeight = "0px";
          } else {
          }
        }
      }
    });
  }