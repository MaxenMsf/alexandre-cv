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
            Bienvenue sur mon portfolio ! Passionné par le développement web, je
            crée des sites et des applications modernes et performants. Explorez
            mes compétences, découvrez mes projets et n&apos;hésitez pas à me
            contacter je recherche actuellement un stage de 8 à 10 semaines à
            partir du 28 avril 2025.
          </p>

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
              href="https://gitlab.univ-artois.fr/alexandre_mione"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitLab"
            >
              <i className="fa-brands fa-gitlab"></i>
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

          <div>
            <a href="mailto:alexandremione@gmail.com">
              <button className={styles.button}>Contactez-moi</button>
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow} />
            <Image
              src="/profil.webp"
              alt="Photo de profil"
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
