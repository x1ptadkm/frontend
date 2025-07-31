function calculateTotal() {
  var tourPrice = parseInt(document.getElementById("tour").value);
  var numberOfPeople = parseInt(document.getElementById("number").value);
  var totalPrice = tourPrice * numberOfPeople;
  document.getElementById("result").innerText = "Total: $" + totalPrice;
}
function displayPrice() {
  var selectedTour = document.getElementById("tour");
  var priceDisplay = document.getElementById("priceDisplay");
  var selectedPrice = selectedTour.options[selectedTour.selectedIndex].value;
  priceDisplay.textContent = selectedPrice+"$/Person";
}