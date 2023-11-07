import React, { useContext, useEffect, useState } from "react";
import styles from "./Order.module.css";
import Context from "../../../Context/Context";
import Order from "./Order";
import OrderTitle from "./OrderTitle/OrderTitle";
import EmptyOrder from "./EmptyOrder/EmptyOrder";
import AmountOrder from "./AmountOrder/AmountOrder";

const OrderContainer = () => {
  const value = useContext(Context);
  const { products, amount, order, addToOrder, removeFromOrder } = value;

  const orderSize = Object.keys(order).length

  return (
    <div>
      {orderSize === 0 ? <EmptyOrder /> : <OrderTitle />}

      {products.map((product) => {

        if (order[product.uid]) {
          const portion = order[product.uid] || 0
          const totalPrice = portion * product.price

          return (
              <Order
                  key={product.uid}
                  item={product}
                  portion={portion}
                  totalPrice={totalPrice}
                  add={addToOrder}
                  remove={removeFromOrder}
              />
          )
        }

        return null
      })}

      {orderSize > 0 && <AmountOrder amount={amount} />}
    </div>
  );
};

export default OrderContainer;
// valueCounter={valueCounter}
