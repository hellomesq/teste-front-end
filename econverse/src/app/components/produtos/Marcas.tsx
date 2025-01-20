import React from "react";
import styles from "./Produtos.module.scss";

const Marcas: React.FC = () => {
    return (
        <>
            <h1 className={styles.title_marcas}>Navegue por marcas</h1>
            <div className={styles.container_marcas}>
                {Array(5)
                    .fill(0)
                    .map((_, index) => (
                        <div key={index} className={styles.card_marcas}>
                            <img src="Logo.png" alt={`Marca ${index + 1}`} />
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Marcas;
