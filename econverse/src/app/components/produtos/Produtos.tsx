'use client';
import React, { useState } from "react";
import Modal from "./Modal";
import styles from "./Produtos.module.scss";

interface ItemProps {
  id: number;
  image: string;
  description: string;
  price: number;
}
interface CarouselProps {
  items: ItemProps[];
  active: number;
}

const Item: React.FC<ItemProps> = ({ image, description, price }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className={styles.card}>
      <img src={image} alt={description} className={styles.image} />
      <p className={styles.description}>{description}</p>
      <div className={styles.priceDetails}>
        <span className={styles.currentPrice}>R$ {price.toFixed(2)}</span>
        <span className={styles.installment}>ou 3x de {(price / 3).toFixed(2)} sem juros</span>
      </div>
      <span className={styles.shipping}>Frete grátis</span>
      <button className={styles.buyButton} onClick={handleOpenModal}>COMPRAR</button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={{ image, description, price }}
      />
    </div>
  );
};

const Carousel: React.FC<CarouselProps> = ({ items, active }) => {
  const [currentActive, setActive] = useState(active);

  const moveLeft = () => {
    setActive((prev) => (prev <= 0 ? items.length - 4 : prev - 4)); // Move 4 itens para a esquerda
  };

  const moveRight = () => {
    setActive((prev) => {
      if (prev + 4 >= items.length) {
        return 0;
      }
      return prev + 4; // Move 4 itens para a direita
    });
  };

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.arrow} onClick={moveLeft}>
          &#x276E;
        </div>
        <div className={styles.carouselInner}>
          {items.slice(currentActive, currentActive + 4).map((item, index) => (
            <div key={index} className={styles.item}>
              <Item 
                image={item.photo} 
                description={item.descriptionShort} 
                price={item.price} 
              />
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