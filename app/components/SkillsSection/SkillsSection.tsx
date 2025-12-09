import styles from "./SkillsSection.module.css";

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "HTML", icon: "fa-html5" },
  { name: "CSS", icon: "fa-css3-alt" },
  { name: "JavaScript", icon: "fa-js" },
  { name: "PHP", icon: "fa-php" },
  { name: "Java", icon: "fa-java" },
  { name: "Python", icon: "fa-python" },
  { name: "C", icon: "fa-c" },
  { name: "Bases de données", icon: "fa-database" },
  { name: "Réseau", icon: "fa-network-wired" },
  { name: "Communication digitale", icon: "fa-bullhorn" },
  { name: "Anglais", icon: "fa-language" },
  { name: "WordPress", icon: "fa-wordpress" },
  { name: "Pack Office", icon: "fa-file-word" },
  { name: "GitHub", icon: "fa-github" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>Compétences</span>
        </h2>

        <div className={styles.intro}>
          <div className={styles.introContent}>
            <h3 className={styles.subtitle}>Mes compétences</h3>
            <p className={styles.description}>
              Grâce à mon parcours scolaire, j&apos;ai acquis des compétences en
              développement web, en Java, en Python, en C, mais aussi en bases
              de données, en réseaux ainsi qu&apos;en communication digitale.
              J&apos;ai également pu utiliser des frameworks comme Django,
              Laravel et Flask. De plus, j&apos;ai un excellent niveau en
              anglais.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <i
                className={`fa-brands fa-solid ${skill.icon} ${styles.skillIcon}`}
              ></i>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
