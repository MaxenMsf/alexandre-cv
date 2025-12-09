import Image from "next/image";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>A Propos</span>
        </h2>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/alexandre.png"
                alt="Alexandre MIONE"
                fill
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>Faire des sites est ma passion</h3>
            <p className={styles.description}>
              Faire des sites est ma passion, mais je ne m&apos;arrête pas là.
              J&apos;ai également une solide expérience dans le développement
              d&apos;applications, ce qui me permet de créer des solutions
              complètes et performantes. De plus, j&apos;ai eu l&apos;opportunité
              de travailler en entreprise, où j&apos;ai pu mettre en pratique
              mes compétences et acquérir une expérience précieuse. Pour en
              savoir plus sur mon parcours et mes compétences, vous pouvez
              télécharger mon CV ci-dessous.
            </p>

            <div className={styles.experience}>
              <div className={styles.experienceNumber}>5</div>
              <div className={styles.experienceText}>
                <div className={styles.experienceLabel}>Années</div>
                <div>d&apos;expérience</div>
              </div>
            </div>

            <div>
              <a href="/CV.png" download>
                <button className={styles.button}>Télécharger mon CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
