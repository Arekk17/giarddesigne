document.addEventListener("DOMContentLoaded", function () {
  let overlayVisible = true;

  function toggleOverlay() {
    const overlay = document.querySelector(".gradient-overlay");
    overlay.style.transition = "opacity 1s ease"; // Dodajemy transition do animacji zanikania
    overlay.style.opacity = overlayVisible ? "0" : "1"; // Zmieniamy opacity w zależności od overlayVisible
    overlayVisible = !overlayVisible;
  }

  const toggleButton = document.getElementById("toggleOverlayButton");
  toggleButton.addEventListener("click", function () {
    toggleOverlay();
  });
});
