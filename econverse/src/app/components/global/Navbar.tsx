import React from 'react';
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';
import styles from './Style.module.scss';

const Navbar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarTop}>
        <div className={styles.navbarInfo}>
          <span>Compra 100% segura</span>
          <span>Frete grátis acima de R$ 200</span>
          <span>Parcele suas compras</span>
        </div>
      </div>
      <div className={styles.navbarMain}>
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
          <FaHeart title="Favoritos" />
          <FaUser title="Minha Conta" />
          <FaShoppingCart title="Carrinho" />
        </div>
      </div>
      <nav className={styles.navbarLinks}>
        <ul>
          <li><a href="#categorias">Todas Categorias</a></li>
          <li><a href="#supermercado">Supermercado</a></li>
          <li><a href="#livros">Livros</a></li>
          <li><a href="#moda">Moda</a></li>
          <li><a href="#lancamentos">Lançamentos</a></li>
          <li><a href="#ofertas">Ofertas do Dia</a></li>
          <li><a href="#assinatura">Assinatura</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
