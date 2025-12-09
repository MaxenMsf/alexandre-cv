import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.text}>
          Créer par{" "}
          <a
            href="https://github.com/MaxenMsf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Alexandre Mione
          </a>{" "}
        </span>
      </div>
    </footer>
  );
}
