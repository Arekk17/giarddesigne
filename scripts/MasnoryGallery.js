const masonry = new Macy({
  container: ".container-image",
  mobileFirst: true,
  columns: 1,
  breakAt: {
    700: 3,
    1000: 3,
  },
  margin: {
    x: 40,
    y: 40,
  },
});
