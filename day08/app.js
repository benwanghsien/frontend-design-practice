// navbar toggle class name
const hamburgerBtn = document.querySelector(".hamburger");
hamburgerBtn.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("toggle");
  e.target.nextElementSibling.classList.toggle("toggle");
});

// article carousel
function setPosition(ratio, index) {
  const articleCarouselItemWrap = document.querySelector(
    ".article-carousel-group"
  );

  articleCarouselItemWrap.style.left = `-${
    (100 / ratio) * index + 50 / ratio
  }%`;
}

function getCourselRatio() {
  const carouselContainerWidth =
    document.querySelector(".atricle-carousel").offsetWidth;
  const carouselItemWidth = document.querySelectorAll(
    ".article-carousel-item-wrap"
  )[0].offsetWidth;

  let carouselRatio = carouselItemWidth / carouselContainerWidth;

  if (carouselRatio > 0.4 && carouselRatio < 0.55) {
    carouselRatio = 2;
  } else if (carouselRatio > 0.3 && carouselRatio < 0.4) {
    carouselRatio = 3;
  } else if (carouselRatio > 0.24 && carouselRatio < 0.3) {
    carouselRatio = 4;
  }

  return carouselRatio;
}

window.addEventListener("resize", () => {
  document.querySelector(".article-carousel-group").style.left = "";

  // find clicked btn index
  let buttonIndex = 0;
  [].slice
    .call(document.querySelector("div.article-carousel-btn-group").children)
    .forEach((ele, idx) => {
      if (ele.classList.contains("carousel-btn-actived")) {
        buttonIndex = idx;
      }
    });
  setPosition(getCourselRatio(), buttonIndex);
});

document
  .querySelector("div.article-carousel-btn-group")
  .addEventListener("click", function (e) {
    if (
      e.target.tagName === "BUTTON" &&
      !e.target.classList.contains("carousel-btn-actived")
    ) {
      // find clicked btn index
      let buttonIndex = 0;
      [].slice.call(this.children).forEach((ele, idx) => {
        // toggle class name of btn
        ele.classList.remove("carousel-btn-actived");

        if (e.target === ele) {
          buttonIndex = idx;
          ele.classList.add("carousel-btn-actived");
        }
      });

      // set position
      setPosition(getCourselRatio(), buttonIndex);
    }
  });
