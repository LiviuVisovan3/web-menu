import React from "react";

type Props = {
  name: string;
  quantity: string;
  price: number;
  currency: string;
  imgUrl?: string;
  calories?: number;
};

export default function Product(props: Props) {
  const { name, quantity, calories, price, currency, imgUrl } = props;

  return (
    <div className="product">
      <div className="product-info">
        <div className="product-title">{name}</div>
        <div className="product-weight">
          {quantity} {calories && "• " + calories + "kcal"}
        </div>
        <div className="product-price">
          {price} <span className="currency">{currency}</span>
        </div>
      </div>
      <div className="product-image-wrapper">
        <img src={imgUrl} />
        <div className="gradient"></div>
      </div>
    </div>
  );
}
