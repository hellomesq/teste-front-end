import React from 'react';
import styles from './Parceiros.module.scss'

const Parceiros: React.FC = () => {
    return(
        <>
        <div className={styles.container_image}>
            <img src="parceiros.png" alt="Imagem referente a parcerias" />
            <img src="parceiros.png" alt="Imagem referente a parcerias" />
        </div>
        </>
    );
};

export default Parceiros;