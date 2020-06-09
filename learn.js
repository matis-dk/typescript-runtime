var Sources;
(function (Sources) {
  Sources["Coop"] = "Coop";
  Sources["Storebox"] = "Storebox";
  Sources["Nemlig"] = "Nemlig";
})(Sources || (Sources = {}));
function formatPurchaseBasket(purchaseBasket) {
  var totalValueNet = purchaseBasket.totalValueNet,
    purchaseEvents = purchaseBasket.purchaseEvents,
    id = purchaseBasket.id;
  console.log("Formatting basket " + id);
  console.log(
    "Avg price pr. item: " + calcAverage(totalValueNet, purchaseEvents)
  );
}
function calcAverage(total, purchaseEvents) {
  return total / purchaseEvents.length;
}
