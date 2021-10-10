import React, { FC } from "react";

import ListItem from "../ListItem";
import styles from "./Footer.module.scss";

const Footer: FC = () => (
  <footer className={styles.footer}>
    <div className={styles.card}>
      <h3 className={styles.card_title}>Практические модули</h3>
      <ListItem
        dataArray={[
          "Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе",
        ]}
      />
    </div>

    <div className={styles.card}>
      <h3 className={styles.card_title}>Итоговая аттестация</h3>
      <ListItem
        dataArray={[
          "Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)",
          "Защита итоговой аттестационной работы",
        ]}
      />
    </div>
  </footer>
);

export default Footer;
