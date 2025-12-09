import Image from "next/image";
import Typewriter from "../Typewriter/Typewriter";
import styles from "./MoiSection.module.css";

export default function MoiSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Bonjour, je suis{" "}
            <span className={styles.highlight}>Alexandre Mione</span>
          </h1>

          <Typewriter />

          <p className={styles.description}>
            Bienvenue sur mon CV en ligne ! Passionné par le développement web, je
            crée des sites et des applications modernes et performants. Explorez
            mes compétences, découvrez mes projets et n&apos;hésitez pas à me
            contacter.
          </p>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Dernier diplôme obtenu</h3>
                <p className={styles.infoText}>DUT Informatique</p>
                <p className={styles.infoSubtext}>2023 - 2025</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Mobilité</h3>
                <p className={styles.infoText}>Région Nord/Pas de Calais</p>
                <p className={styles.infoText}>Région Île de France</p>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com/MaxenMsf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/alexandre-mione-526979180/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <div className={styles.buttonGroup}>
            <a href="mailto:alexandremione@gmail.com">
              <button className={styles.button}>Contactez-moi</button>
            </a>
            <a href="/CV.png" download>
              <button className={styles.buttonSecondary}>Télécharger mon CV</button>
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow} />
            <Image
              src="/alexandre.png"
              alt="Photo de profil Alexandre MIONE"
              fill
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              className={styles.image}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
