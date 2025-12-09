import { Icons } from "../Icons";
import styles from "./Experience.module.css";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    role: "Stagiaire développeur",
    company: "OpenCertif",
    period: "Mai - Juillet 2025",
    description: [
      "Développement et personnalisation de modules sur Odoo (facturation, RL1, e-commerce).",
      "Intégration de contenus pédagogiques (Moodle, SCORM, VTS Editor).",
      "Réalité augmentée avec 8th Wall, hébergement sur Azure/O2Switch.",
      "Création d'un site de webinaire via System.io, configuration d'e-mails automatiques.",
      "Maintenance d'un outil Python connecté à l'API OpenAI.",
    ],
  },
  {
    role: "Alternant développeur web",
    company: "Emendo",
    period: "Août - Déc. 2022",
    description: [
      "Maintenance de sites web avec WordPress, HTML et CSS.",
      "Formation en Django.",
    ],
  },
  {
    role: "Stagiaire développeur web",
    company: "Anael",
    period: "Juil. - Sept. 2020",
    description: [
      "Maintenance de sites WordPress, création d'une application de monitoring en temps réel.",
      "Développement d'un site e-commerce sous Prestashop.",
      "Création de fiches techniques et d'un modèle de site WordPress automatisé.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>Expériences</span>
        </h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
              <div className={styles.header}>
                <h3 className={styles.role}>{exp.role}</h3>
                <div className={styles.company}>{exp.company}</div>
                <div className={styles.period}>{exp.period}</div>
              </div>
              <div className={styles.description}>
                <ul className={styles.descriptionList}>
                  {exp.description.map((item, idx) => (
                    <li key={idx} className={styles.descriptionItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
