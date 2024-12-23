import { FC, JSX } from "react";
import styles from './Socials.module.scss';
import instagram from '../../images/instagram.png';
import freelance from '../../images/freelance.png'
import github from '../../images/github.png'

const Socials: FC = (): JSX.Element => {
  return (
    <ul className={styles.socials}>
      <li className={styles["socials__item"]}>
        <a
          href="https://www.instagram.com/the_cutest_sinner/"
          target="_blank"
          className={styles["socials__link"]}
        >
          <img
            src={instagram}
            alt="Instagram Logo"
            className={styles["socials__icon"]}
          />
        </a>
      </li>
      <li className={styles["socials__item"]}>
        <a
          href="https://freelancehunt.com/freelancer/Mart1K.html"
          target="_blank"
          className={styles["socials__link"]}
        >
          <img
            src={freelance}
            alt="Freelance Logo"
            className={styles["socials__icon"]}
          />
        </a>
      </li>
      <li className={styles["socials__item"]}>
        <a
          href="https://github.com/BondarDanylo"
          target="_blank"
          className={styles["socials__link"]}
        >
          <img
            src={github}
            alt="Instagram Logo"
            className={styles["socials__icon"]}
          />
        </a>
      </li>
    </ul>
  );
};

export default Socials