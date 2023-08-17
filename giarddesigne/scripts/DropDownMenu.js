$(document).ready(function () {
  $(".nav-item.dropdown > a").on("click", function (e) {
    e.preventDefault();
    var dropdownMenu = $(this).parent().find(".dropdown-menu");
    $(".dropdown-menu").not(dropdownMenu).slideUp(200);
    dropdownMenu.slideToggle(200);
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".nav-item.dropdown").length) {
      $(".dropdown-menu").slideUp(200);
    }
  });
});
