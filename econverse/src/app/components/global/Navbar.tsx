import React, { useState } from "react";
import { FaSearch, FaHeart, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import styles from "./Style.module.scss";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarTop}>
        <div className={styles.navbarInfo}>
          <span>
            Compra <span className={styles.destaque}>100% segura</span>
          </span>
          <span>
            <span className={styles.destaque}>Frete grátis </span>acima de R$ 200
          </span>
          <span>
            <span className={styles.destaque}>Parcele </span>suas compras
          </span>
        </div>
      </div>

      <div className={styles.navbarMain}>
        <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>
        <div className={styles.navbarLogo}>
          <a href="/">
            <img src="logo.png" alt="Econverse" />
          </a>
        </div>
        <div className={styles.navbarSearch}>
          <input type="text" placeholder="O que você está buscando?" />
          <button>
            <FaSearch />
          </button>
        </div>
        <div className={styles.navbarIcons}>
          <FaHeart title="Meus Favoritos" />
          <FaUser title="Minha Conta" />
          <FaShoppingCart title="Carrinho" />
        </div>
      </div>

      <nav className={`${styles.navbarLinks} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#categorias">Todas Categorias</a>
          </li>
          <li>
            <a href="#supermercado">Supermercado</a>
          </li>
          <li>
            <a href="#livros">Livros</a>
          </li>
          <li>
            <a href="#moda">Moda</a>
          </li>
          <li>
            <a href="#lancamentos">Lançamentos</a>
          </li>
          <li>
            <a href="#ofertas">
              <span className={styles.destaque}>Ofertas do Dia</span>
            </a>
          </li>
          <li>
            <a href="#assinatura">Assinatura</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
