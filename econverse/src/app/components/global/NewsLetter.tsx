import React from 'react';
import styles from './Style.module.scss';

const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h2 className={styles.title}>Inscreva-se na nossa newsletter</h2>
          <p className={styles.subtitle}>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Digite seu nome"
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              INSCREVER
            </button>
          </div>
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="terms" className={styles.checkbox} />
            <label htmlFor="terms" className={styles.label}>
              Aceito os termos e condições
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
