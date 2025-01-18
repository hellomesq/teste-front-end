'use client';
import React, { useState } from "react";
import styles from "./Produtos.module.scss";

interface ItemProps {
  id: number;
  image: string;
  description: string;
  price: string;
  installment: string;
  shipping: string;
}

interface CarouselProps {
  items: ItemProps[];
  active: number;
}

const Item: React.FC<ItemProps> = ({ image, description, price, installment, shipping }) => (
  <div className={styles.card}>
    <img src={image} alt={description} className={styles.image} />
    <p className={styles.description}>{description}</p>
    <div className={styles.priceDetails}>
      <span className={styles.currentPrice}>{price}</span>
      <span className={styles.installment}>{installment}</span>
    </div>
    <span className={styles.shipping}>{shipping}</span>
    <button className={styles.buyButton}>COMPRAR</button>
  </div>
);

const Carousel: React.FC<CarouselProps> = ({ items, active }) => {
  const [currentActive, setActive] = useState(active);

  const moveLeft = () => {
    setActive((prev) => (prev <= 0 ? items.length - 4 : prev - 4)); // Move 4 itens para a esquerda
  };

  const moveRight = () => {
    setActive((prev) => {
      // Se houver menos de 4 itens restantes, começa novamente do início
      if (prev + 4 >= items.length) {
        return 0;
      }
      return prev + 4; // Move 4 itens para a direita
    });
  };

  return (
    <>
      <h1 className={styles.title}>Produtos relacionados</h1>
      <div className={styles.actions}>
        <ul>
          <li><a href="#">Celular</a></li>
          <li><a href="#">Acessórios</a></li>
          <li><a href="#">Tablets</a></li>
          <li><a href="#">Notebooks</a></li>
          <li><a href="#">Tvs</a></li>
          <li><a href="#">Ver todos</a></li>
        </ul>
      </div>
      <div className={styles.carousel}>
        <div className={styles.arrow} onClick={moveLeft}>
          &#x276E;
        </div>
        <div className={styles.carouselInner}>
          {items.slice(currentActive, currentActive + 4).map((item, index) => (
            <div key={index} className={styles.item}>
              <Item {...item} />
            </div>
          ))}
        </div>
        <div className={styles.arrow} onClick={moveRight}>
          &#x276F;
        </div>
      </div>
    </>
  );
};

export default Carousel;
