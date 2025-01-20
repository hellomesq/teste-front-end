'use client';

import React from 'react';
import styles from './Produtos.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    image: string;
    description: string;
    price: number;
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalBody}>
          <img src={product.image} alt={product.description} className={styles.productImage} />
          <div className={styles.productDetails}>
            <h2 className={styles.productTitle}>{product.description}</h2>
            <p className={styles.productPrice}>R$ {product.price.toFixed(2)}</p>
            <p className={styles.productInstallments}>
              Many desktop publishing packages and web page editors now many desktop publishing
            </p>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <div className={styles.quantityControl}>
            <button className={styles.quantityButton}>-</button>
            <span className={styles.quantity}>1</span>
            <button className={styles.quantityButton}>+</button>
          </div>
          <button className={styles.buyButton}>COMPRAR</button>
          <p className={styles.moreDetails}>Veja mais detalhes do produto</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
