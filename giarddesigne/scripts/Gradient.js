document.addEventListener("DOMContentLoaded", function () {
  let overlayVisible = true;

  function toggleOverlay() {
    const overlay = document.querySelector(".gradient-overlay");
    if (overlayVisible) {
      overlay.style.display = "none";
    } else {
      overlay.style.display = "block";
    }
    overlayVisible = !overlayVisible;
  }

  const toggleButton = document.getElementById("toggleOverlayButton");
  toggleButton.addEventListener("click", function () {
    toggleOverlay();
  });
});
