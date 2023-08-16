var dropdownMenu = document.querySelector(".dropdown-menu");
var ofertaLink = document.querySelector(".nav-link.text-dark");

var isDropdownVisible = false;

ofertaLink.addEventListener("click", function (event) {
  event.preventDefault();
  if (isDropdownVisible) {
    fadeAndSlideEffect(dropdownMenu, 300, false);
  } else {
    fadeAndSlideEffect(dropdownMenu, 300);
  }
  isDropdownVisible = !isDropdownVisible;
});

// Close dropdown when clicking outside
window.addEventListener("click", function (event) {
  if (
    !dropdownMenu.contains(event.target) &&
    !ofertaLink.contains(event.target)
  ) {
    fadeAndSlideEffect(dropdownMenu, 300, false);
    isDropdownVisible = false;
  }
});

// Close dropdown on option click
var dropdownOptions = document.querySelectorAll(".dropdown-item");
dropdownOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    if (isDropdownVisible) {
      fadeAndSlideEffect(dropdownMenu, 300, false);
      isDropdownVisible = false;
    }
  });
});

function fadeAndSlideEffect(element, duration, fadeIn = true) {
  var opacity = fadeIn ? 0 : 1; // Adjust the position here

  element.style.opacity = opacity;
  var increment = 1 / (duration / 10);

  if (fadeIn) {
    element.style.display = "block";
  }

  var interval = setInterval(function () {
    if ((fadeIn && opacity < 1) || (!fadeIn && opacity > 0)) {
      element.style.opacity = opacity;
      opacity = fadeIn ? opacity + increment : opacity - increment;
      position = fadeIn ? position + increment : position - increment;
    } else {
      if (!fadeIn) {
        element.style.display = "none";
      }
      clearInterval(interval);
    }
  }, 10);
}
