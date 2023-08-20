const modalHtml = `
  <div class="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="imageModalLabel">Popup Image</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img id="modalImage" class="img-fluid" alt="Popup Image" />
        </div>
      </div>
    </div>
  </div>
`;

const body = document.querySelector("body");
body.insertAdjacentHTML("beforeend", modalHtml);

const modal = new bootstrap.Modal(document.getElementById("imageModal"));

const galleryImages = document.querySelectorAll(".gallery-image");
galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    const imageUrl = image.getAttribute("src");
    showImagePopup(imageUrl);
  });
});

function showImagePopup(imageUrl) {
  const modalImage = document.getElementById("modalImage");
  modalImage.setAttribute("src", imageUrl);

  modal.show();

  document
    .getElementById("imageModal")
    .addEventListener("hidden.bs.modal", () => {
      modalImage.removeAttribute("src");
    });
}
