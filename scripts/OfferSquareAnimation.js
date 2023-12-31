function checkScroll() {
  const squares = document.querySelectorAll(".square-box");
  const windowHeight = window.innerHeight;

  squares.forEach(function (square) {
    let bounding = square.getBoundingClientRect();

    if (bounding.bottom < windowHeight) {
      square.classList.add("animate");
    }
  });
}

window.addEventListener("scroll", checkScroll);
