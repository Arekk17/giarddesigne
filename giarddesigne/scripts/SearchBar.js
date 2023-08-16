const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".search");
const closeBtn = document.querySelector(".close");

searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
});
