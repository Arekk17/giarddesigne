function checkScroll() {
  const squares = document.querySelectorAll(".square-box");
  const windowHeight = window.innerHeight;

  squares.forEach(function (square) {
    var bounding = square.getBoundingClientRect();

    // Jeśli dolna krawędź elementu jest widoczna w oknie przeglądarki
    if (bounding.bottom < windowHeight) {
      square.classList.add("animate"); // Dodaj klasę animacji
    }
  });
}

// Wywołaj funkcję checkScroll przy przewijaniu
window.addEventListener("scroll", checkScroll);
