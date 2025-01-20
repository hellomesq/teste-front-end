import React from "react";
import styles from "./Produtos.module.scss";

const CategoriasProdutos: React.FC = () => {
    return(
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
        </>
    );
};

export default CategoriasProdutos;