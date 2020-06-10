function isPurchaseBasket(data: any): data is PurchaseBasket {
  const isValid = data && data.id && data.storeId;
  // All kind of checks
  return isValid;
}

function prepareBasket(basket: any) {
  if (isPurchaseBasket(basket)) {
    // We know its a basket
  }
  // Unsure about the input
}

prepareBasket({
  id: 1,
});

prepareBasket({
  id: 1,
  storeId: 1,
});
