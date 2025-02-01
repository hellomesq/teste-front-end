import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import styles from "./Produtos.module.scss";

interface ItemProps {
  id: number;
  photo: string;
  descriptionShort: string;
  price: number;
}

interface CarouselProps {
  items: ItemProps[];
  active: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, active }) => {
  const [currentActive, setActive] = useState(active);

  const moveLeft = () => setActive((prev) => (prev <= 0 ? items.length - 4 : prev - 4));
  const moveRight = () => setActive((prev) => (prev + 4 >= items.length ? 0 : prev + 4));

  return (
    <div className={styles.carousel}>
    <div className={`${styles.arrow} ${styles.arrowLeft}`} onClick={moveLeft}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
    <div className={styles.carouselInner}>
      {items.slice(currentActive, currentActive + 4).map((item) => (
        <div key={item.id} className={styles.item}>
          <Item
            id={item.id}
            photo={item.photo}
            descriptionShort={item.descriptionShort}
            price={item.price}
          />
        </div>
      ))}
    </div>
    <div className={`${styles.arrow} ${styles.arrowRight}`} onClick={moveRight}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  </div>
  
  );
};

export default Carousel;
