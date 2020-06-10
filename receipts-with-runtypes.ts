import { Number, String, Literal, Array, Record, Union, InstanceOf, Static } from "runtypes";

const Sources = Union(Literal("Coop"), Literal("Storebox"), Literal("Nemlig"));

function validateBasketId(basketId: string) {
  const basketIdSplitted = basketId.split("-");
  const [source, userId, id] = basketIdSplitted;

  if (basketIdSplitted.length !== 3) {
    return "validateBasketId failed: basketId format is wrong";
  }

  if (source !== "coop") {
    return "validateBasketId failed: source is not 'coop'";
  }

  return true;
}

const PurchaseEvent = Record({
  id: String,
  basketId: String.withConstraint(validateBasketId),
  category: String,
  pricePrUnit: Number,
  promotion: Number,
});

const PurchaseBasket = Record({
  id: String,
  purchaseTime: InstanceOf(Date),
  purchaseEvents: Array(PurchaseEvent),
  source: Sources,
  storeId: String,
  totalValueNet: Number,
});

PurchaseBasket.check({
  id: "id",
  purchaseTime: new Date(),
  purchaseEvents: [
    {
      id: "id",
      basketId: "coop-hku3fg54j2131k23jb2-217831823",
      category: "category",
      pricePrUnit: 10,
      promotion: 10,
    },
  ],
  source: "Coop",
  storeId: "storeId",
  totalValueNet: 10,
});
