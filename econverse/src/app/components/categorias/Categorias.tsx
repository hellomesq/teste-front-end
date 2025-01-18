import React from 'react';
import styles from './Categorias.module.scss';

const Categorias: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src="eletronicos.png" alt="Tecnologia" />
        <p className={styles.cardCaption}>Tecnologia</p>
      </div>
      <div className={styles.card}>
        <img src="supermercado.png" alt="Supermercado" />
        <p className={styles.cardCaption}>Supermercado</p>
      </div>
      <div className={styles.card}>
        <img src="whiskey.png" alt="Bebidas" />
        <p className={styles.cardCaption}>Bebidas</p>
      </div>
      <div className={styles.card}>
        <img src="ferramentas.png" alt="Ferramentas" />
        <p className={styles.cardCaption}>Ferramentas</p>
      </div>
      <div className={styles.card}>
        <img src="saude.png" alt="Saúde" />
        <p className={styles.cardCaption}>Saúde</p>
      </div>
      <div className={styles.card}>
        <img src="corrida.png" alt="Esportes e Fitness" />
        <p className={styles.cardCaption}>Esportes e Fitness</p>
      </div>
      <div className={styles.card}>
        <img src="moda.png" alt="Moda" />
        <p className={styles.cardCaption}>Moda</p>
      </div>
    </div>
  );
};

export default Categorias;
