function getBasket(basketId: string): Promise<void> {
  return fetch(`https://esp-service-qrc6mai52q-ew.a.run.app/api/basket/${basketId}`)
    .then((response) => response.json())
    .then((data: unknown) => {
      const dataPurchaseBasket = data as PurchaseBasket;
      if (data) {
        formatPurchaseBasket(data);
        return;
      }
      throw new Error("Data is missing");
    })
    .catch((err) => {
      console.error(err);
    });
}
