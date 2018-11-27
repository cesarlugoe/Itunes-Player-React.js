function lengthStyle() {
  document.getElementById("length").setAttribute("class", "active");
  document.getElementById("genre").setAttribute("class", "inactive");
  document.getElementById("price").setAttribute("class", "inactive");
}

function genreStyle() {
  document.getElementById("length").setAttribute("class", "inactive");
  document.getElementById("genre").setAttribute("class", "active");
  document.getElementById("price").setAttribute("class", "inactive");
}

function priceStyle() {
  document.getElementById("length").setAttribute("class", "inactive");
  document.getElementById("genre").setAttribute("class", "inactive");
  document.getElementById("price").setAttribute("class", "active");
}

module.exports = {
  lengthStyle,
  genreStyle,
  priceStyle
}