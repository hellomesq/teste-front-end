'use client';

import React, { useState } from 'react';
import styles from './Produtos.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    photo: string;
    descriptionShort: string; 
    price: number;
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(1); 

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalBody}>
          <img src={product.photo} alt={product.descriptionShort} className={styles.productImage} />
          <div className={styles.productDetails}>
            <h2 className={styles.productTitle}>{product.descriptionShort}</h2> 
            <p className={styles.productPrice}>R$ {product.price.toFixed(2)}</p>
            <p className={styles.productInstallments}>
              Ou 3x de {(product.price / 3).toFixed(2)} sem juros
            </p>
            <p className={styles.moreDetails}>Veja mais detalhes do produto</p>
            <div className={styles.modalFooter}>
              <div className={styles.quantityControl}>
                <button className={styles.quantityButton} onClick={decreaseQuantity}>
                  -
                </button>
                <span className={styles.quantity}>{quantity}</span>
                <button className={styles.quantityButton} onClick={increaseQuantity}>
                  +
                </button>
              </div>
              <button className={styles.btnModal}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
