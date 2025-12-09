import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>Contactez-moi</span>
        </h2>

        <h3 className={styles.subtitle}>Mon profil vous a interessé ?</h3>

        <p className={styles.description}>
          N&apos;hésitez pas à me contacter en cliquant sur le bouton ci-dessous
        </p>

        <a href="mailto:alexandremione@gmail.com">
          <button className={styles.button}>Contactez-moi</button>
        </a>
      </div>
    </section>
  );
}
