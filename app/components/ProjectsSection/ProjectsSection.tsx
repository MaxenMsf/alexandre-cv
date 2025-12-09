"use client";

import styles from "./ProjectsSection.module.css";

interface Project {
  icon: string;
  title: string;
  description: string;
  link: string;
  downloadLink?: string;
}

const projects: Project[] = [
  {
    icon: "fa-mobile-alt",
    title: "Battleworld Helper",
    description:
      "Application web interactive développée en HTML/CSS/JavaScript pour assister les joueurs du jeu mobile Marvel Strike Force. Propose des outils de calcul, des guides de personnages et des stratégies de team building pour optimiser les performances en jeu.",
    link: "https://maxenmsf.github.io/battleworld-helper/",
    downloadLink: "/roster.csv",
  },
  {
    icon: "fa-blog",
    title: "Blog Guide MSF",
    description:
      "Blog personnel créé from scratch dédié à Marvel Strike Force. Propose des guides détaillés, astuces et tutoriels pour aider la communauté francophone du jeu. Développé avec HTML/CSS/JavaScript.",
    link: "https://maxenmsf.github.io/guide-msf/index.html",
  },
  {
    icon: "fa-gamepad",
    title: "Site de Jeu Web",
    description:
      "Application web de jeu interactive développée avec Flask. Propose une multitude de minijeux sur le thème Marvel.",
    link: "https://github.com/MaxenMsf/MSFdle",
  },
  {
    icon: "fa-laptop-code",
    title: "CV en Ligne - Portfolio",
    description:
      "Ce site web que vous visitez actuellement ! Développé avec Next.js, React et TypeScript. Présente mes compétences, expériences et projets de manière moderne et interactive avec animations et design responsive.",
    link: "https://github.com/MaxenMsf/alexandre-cv",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>Projets Personnels</span>
        </h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.projectCard}
              onClick={() => window.open(project.link, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.projectIcon}>
                <i className={`fas ${project.icon}`}></i>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>
                {project.description}
                {project.downloadLink && (
                  <>
                    <br />
                    <br />
                    Pour utiliser l'application il faut un csv de son alliance.{" "}
                    <a
                      href={project.downloadLink}
                      download="roster.csv"
                      onClick={(e) => e.stopPropagation()}
                      className={styles.downloadLink}
                    >
                      Cliquer ici pour télécharger un CSV de test
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
