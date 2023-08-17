$(document).ready(function () {
  // Obsługa kliknięcia na element oferty
  $(".nav-item.dropdown > a").on("click", function (e) {
    e.preventDefault(); // Zapobiegaj domyślnemu zachowaniu linku
    var dropdownMenu = $(this).parent().find(".dropdown-menu");
    $(".dropdown-menu").not(dropdownMenu).slideUp(200); // Schowaj inne otwarte menu
    dropdownMenu.slideToggle(200);
  });

  // Obsługa kliknięcia na inne miejsce na stronie
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".nav-item.dropdown").length) {
      $(".dropdown-menu").slideUp(200);
    }
  });
});
