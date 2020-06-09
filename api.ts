function getBasket(basketId: string): Promise<void> {
  return fetch(
    `https://esp-service-qrc6mai52q-ew.a.run.app/api/basket/${basketId}`
  )
    .then((response) => response.json())
    .then((data: unknown) => {
      const dataPurchaseBasket = data as PurchaseBasket;
      if (
        typeof dataPurchaseBasket === "object" &&
        dataPurchaseBasket !== null
      ) {
        const {
          id,
          purchaseTime,
          purchaseEvents,
          source,
          storeId,
          totalValueNet,
        } = dataPurchaseBasket;
        if (!id || typeof id !== "string") {
          throw new Error("Property 'id' is missing or wrong type");
        }
        /**
         * Already tired
         */
      }

      throw new Error("Data is missing");
    })
    .catch((err) => {
      console.error(err);
    });
}
