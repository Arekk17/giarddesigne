$(document).ready(function () {
  const $grid = $(".gallery-container").masonry({
    itemSelector: ".col-md-4",
    columnWidth: ".col-md-4",
    percentPosition: true,
    gutter: 43,
  });

  $grid.imagesLoaded().progress(function () {
    $grid.masonry("layout");
  });

  $(window).resize(function () {
    $grid.masonry("layout");
  });
});
