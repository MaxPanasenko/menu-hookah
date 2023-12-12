import React from "react";
import style from "./ItemEditions.module.css";

const ItemEditions = ({ item, selectDiff }) => {
  const { uid, subtitle, price, weight, difference } = item;

  return (
    <div className={style.item__wrapper}>
      <button className={style.item__option} onClick={()=>selectDiff(difference)}>
        <abbr title={weight}>{subtitle}</abbr>
        { difference && 
          <span> +{difference} ₽</span>}
      </button>
    </div>
  );
};

export default ItemEditions;
