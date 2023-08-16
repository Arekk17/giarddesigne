var searchInput = document.getElementById("searchInput");
var searchIcon = document.getElementById("searchIcon");
var searchInputGroup = document.querySelector(".search-input");
var navItems = document.querySelectorAll(".nav-item");

searchIcon.addEventListener("click", function () {
  searchInputGroup.classList.toggle("active");
  searchInput.style.display = searchInputGroup.classList.contains("active")
    ? "block"
    : "none";
  navItems.forEach(function (navItem) {
    if (navItem !== searchIcon.parentElement) {
      navItem.classList.toggle("active");
    }
  });

  if (searchInputGroup.classList.contains("active")) {
    searchInput.focus();
  }
});
