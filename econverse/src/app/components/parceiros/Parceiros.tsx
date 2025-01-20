import React from 'react';
import styles from './Parceiros.module.scss';

const Parceiros: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_image}>
                <div className={styles.card_image}>
                    <img src="parceiros.png" alt="Imagem referente a parcerias" />
                    <div className={styles.description_parceria}>
                        <h3>Parceiros</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <button>Confira</button>
                    </div>
                </div>
                <div className={styles.card_image}>
                    <img src="parceiros.png" alt="Imagem referente a parcerias" />
                    <div className={styles.description_parceria}>
                        <h3>Parceiros</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <button>Confira</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parceiros;
