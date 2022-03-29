const hamburgerBtn = document.querySelector(".hamburger");
hamburgerBtn.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("toggle");
  e.target.nextElementSibling.classList.toggle("toggle");
});
