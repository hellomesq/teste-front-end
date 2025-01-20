import React from 'react';
import styles from './Style.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h1 className={styles.logo}>
            <span className={styles.yellow}>e</span>converse
          </h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className={styles.socialIcons}>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>

        <div className={styles.divider}></div> {/* Linha vertical separadora */}

        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h3 className={styles.title}>Institucional</h3>
            <ul className={styles.linkList}>
              <li>Sobre Nós</li>
              <li>Movimento</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Ajuda</h3>
            <ul className={styles.linkList}>
              <li>Suporte</li>
              <li>Fale Conosco</li>
              <li>Perguntas Frequentes</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Termos</h3>
            <ul className={styles.linkList}>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
              <li>Troca e Devolução</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </footer>
  );
};

export default Footer;
