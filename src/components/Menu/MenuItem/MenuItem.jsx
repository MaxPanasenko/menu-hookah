import React from 'react';
import style from '../Menu.module.css';
const MenuItem = ({ item, portion, addToOrder, removeFromOrder, openModalForEdit }) => {
  const { title, descr, price, gallery, uid } = item;

  return (
    <div className={style.item}>
      <div className={style.desc}>
        <div className={style.desc__prop}>
          <h2 className={style.desc__title}>{title}</h2>
          <p className={style.desc__title_prop}>{descr}</p>
        </div>
        <div className={style.desc__price}>
          <p className={style.desc__price_num}>{price} ₽</p>
          <div className={style.desc__price_addToCart}>
            <button
              className={style.desc__price_button}
              onClick={() => {
                removeFromOrder(uid);
              }}
            >
              <span>-</span>
            </button>
            <p className={style.desc__price_quantity}>
              <span>{portion}</span>
            </p>
            <button
              className={style.desc__price_button}
              onClick={() => {
                if (item.editions) {
                  openModalForEdit(item);
                } else addToOrder(uid);
              }}
            >
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
      <div className={style.images}>
<<<<<<< HEAD
        <img src={"../../images/menu" + gallery} alt="" />
=======
        <img src={'../../images/menu' + gallery} alt="" />
>>>>>>> a45413ac9f1528c4b72ec4f3556c9d5ee4f709b6
      </div>
    </div>
  );
};

export default MenuItem;
