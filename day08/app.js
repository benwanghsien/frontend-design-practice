// navbar toggle class name
const hamburgerBtn = document.querySelector(".hamburger");
hamburgerBtn.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("toggle");
  e.target.nextElementSibling.classList.toggle("toggle");
});

// carousel function
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

// common
// play carousel automatically
function playCarouselAutomatically(startIndex, btnGroupDOM) {
  const timer = setInterval(() => {
    startIndex++;

    if (startIndex === btnGroupDOM.children.length) {
      startIndex = 0;
    }

    setPosition(getCourselRatio(), startIndex);

    // find clicked btn index
    [].slice.call(btnGroupDOM.children).forEach((ele, idx) => {
      // toggle class name of btn
      ele.classList.remove("carousel-btn-actived");
    });

    btnGroupDOM.children[startIndex].classList.add("carousel-btn-actived");
    atricleCarouselButtonIndex.index = startIndex;
  }, 3000);

  return timer;
}

// reposition while user resize viewport
window.addEventListener("resize", () => {
  setPosition(getCourselRatio(), atricleCarouselButtonIndex.index);
});

// article carousel
const atricleCarouselBtnGroup = document.querySelector(
  "div.article-carousel-btn-group"
);
let atricleCarouselButtonIndex = {
  index: 0,
};

atricleCarouselBtnGroup.addEventListener("click", function (e) {
  if (
    e.target.tagName === "BUTTON" &&
    !e.target.classList.contains("carousel-btn-actived")
  ) {
    // find clicked btn index
    [].slice.call(this.children).forEach((ele, idx) => {
      // toggle class name of btn
      ele.classList.remove("carousel-btn-actived");

      if (e.target === ele) {
        atricleCarouselButtonIndex.index = idx;
        ele.classList.add("carousel-btn-actived");
      }
    });

    // set position
    setPosition(getCourselRatio(), atricleCarouselButtonIndex.index);
  }
});

let atricleCarouselTimer = playCarouselAutomatically(
  atricleCarouselButtonIndex.index,
  atricleCarouselBtnGroup
);

// stop carousel while hover in, and replay while hover out
document
  .querySelector(".article-carousel-group")
  .addEventListener("mouseover", () => {
    clearInterval(atricleCarouselTimer);
  });

document
  .querySelector(".article-carousel-group")
  .addEventListener("mouseout", () => {
    atricleCarouselTimer = playCarouselAutomatically(
      atricleCarouselButtonIndex.index,
      atricleCarouselBtnGroup
    );
  });

// course carousel
const courseCarouselBtnGroup = document.querySelector(
  ".course-carousel-btn-group"
);
let courseCarouselButtonIndex = {
  index: 0,
};

courseCarouselBtnGroup.addEventListener("click", function (e) {
  if (
    e.target.tagName === "BUTTON" &&
    !e.target.classList.contains("carousel-btn-actived")
  ) {
    [].slice.call(courseCarouselBtnGroup.children).forEach((ele, idx) => {
      ele.classList.remove("carousel-btn-actived");

      if (e.target === ele) {
        e.target.classList.add("carousel-btn-actived");
        courseCarouselButtonIndex.index = idx;
      }
    });
  }

  const courseCourselItemWrap = document.querySelector(
    ".course-carousel-item-wrap"
  );

  courseCourselItemWrap.style.left = `-${
    100 * courseCarouselButtonIndex.index
  }%`;
});

let courseCarouselTimer = setInterval(() => {
  courseCarouselButtonIndex.index++;

  if (
    courseCarouselButtonIndex.index === courseCarouselBtnGroup.children.length
  ) {
    courseCarouselButtonIndex.index = 0;
  }

  const courseCourselItemWrap = document.querySelector(
    ".course-carousel-item-wrap"
  );

  courseCourselItemWrap.style.left = `-${
    100 * courseCarouselButtonIndex.index
  }%`;

  [].slice.call(courseCarouselBtnGroup.children).forEach((ele, idx) => {
    ele.classList.remove("carousel-btn-actived");

    courseCarouselBtnGroup.children[
      courseCarouselButtonIndex.index
    ].classList.add("carousel-btn-actived");
  });
}, 3000);

document
  .querySelector(".course-carousel-item-wrap")
  .addEventListener("mouseover", () => {
    clearInterval(courseCarouselTimer);
  });
document
  .querySelector(".course-carousel-item-wrap")
  .addEventListener("mouseout", () => {
    courseCarouselTimer = setInterval(() => {
      courseCarouselButtonIndex.index++;

      if (
        courseCarouselButtonIndex.index ===
        courseCarouselBtnGroup.children.length
      ) {
        courseCarouselButtonIndex.index = 0;
      }

      const courseCourselItemWrap = document.querySelector(
        ".course-carousel-item-wrap"
      );

      courseCourselItemWrap.style.left = `-${
        100 * courseCarouselButtonIndex.index
      }%`;

      [].slice.call(courseCarouselBtnGroup.children).forEach((ele, idx) => {
        ele.classList.remove("carousel-btn-actived");

        courseCarouselBtnGroup.children[
          courseCarouselButtonIndex.index
        ].classList.add("carousel-btn-actived");
      });
    }, 3000);
  });
