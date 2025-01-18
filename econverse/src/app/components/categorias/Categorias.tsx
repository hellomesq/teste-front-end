import React from 'react';
import styles from './Categorias.module.scss';

const Categorias: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src="card1.jpg" alt="Tecnologia" />
        <p className={styles.cardCaption}>Tecnologia</p>
      </div>
      <div className={styles.card}>
        <img src="card2.jpg" alt="Supermercado" />
        <p className={styles.cardCaption}>Supermercado</p>
      </div>
      <div className={styles.card}>
        <img src="card3.jpg" alt="Bebidas" />
        <p className={styles.cardCaption}>Bebidas</p>
      </div>
      <div className={styles.card}>
        <img src="card4.jpg" alt="Ferramentas" />
        <p className={styles.cardCaption}>Ferramentas</p>
      </div>
      <div className={styles.card}>
        <img src="card5.jpg" alt="Saúde" />
        <p className={styles.cardCaption}>Saúde</p>
      </div>
      <div className={styles.card}>
        <img src="card6.jpg" alt="Esportes e Fitness" />
        <p className={styles.cardCaption}>Esportes e Fitness</p>
      </div>
      <div className={styles.card}>
        <img src="card7.jpg" alt="Moda" />
        <p className={styles.cardCaption}>Moda</p>
      </div>
    </div>
  );
};

export default Categorias;
