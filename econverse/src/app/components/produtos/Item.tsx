import React, { useState } from "react";
import Modal from "./Modal";
import styles from "./Produtos.module.scss";

interface ItemProps {
  id: number;
  photo: string;
  descriptionShort: string;
  price: number;
}

const Item: React.FC<ItemProps> = ({ photo, descriptionShort, price }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <div className={styles.card}>
        <img src={photo} alt={descriptionShort} className={styles.image} />
        <p className={styles.description}>{descriptionShort}</p>
        <div className={styles.priceDetails}>
          <span className={styles.currentPrice}>R$ {price.toFixed(2)}</span>
          <span className={styles.installment}>ou 3x de {(price / 3).toFixed(2)} sem juros</span>
        </div>
        <span className={styles.shipping}>Frete grátis</span>
        <button className={styles.buyButton} onClick={handleOpenModal}>COMPRAR</button>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          product={{ photo, descriptionShort, price }}
        />
      </div>
    </>
  );
};

export default Item;
