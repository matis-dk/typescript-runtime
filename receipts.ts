enum Sources {
  Coop = "Coop",
  Storebox = "Storebox",
  Nemlig = "Nemlig",
}

type PurchaseBasket = {
  id: string;
  purchaseTime: Date;
  purchaseEvents: PurchaseEvent[];
  source: Sources;
  storeId: string;
  totalValueNet: number;
};

type PurchaseEvent = {
  id: string;
  basketId: string;
  category: string;
  pricePrUnit: number;
  promotion: number;
};

function formatPurchaseBasket(purchaseBasket: PurchaseBasket): void {
  const { totalValueNet, purchaseEvents, id } = purchaseBasket;

  console.log(`Formatting basket ${id}`);
  console.log(`Avg price pr. item: ${calcAverage(totalValueNet, purchaseEvents)}`);
}

function calcAverage(total: number, purchaseEvents: PurchaseEvent[]): number {
  return total / purchaseEvents.length;
}
