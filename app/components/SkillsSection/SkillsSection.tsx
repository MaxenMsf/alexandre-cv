import styles from "./SkillsSection.module.css";

interface Skill {
  name: string;
  icon: string;
  type: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Langages de programmation",
    skills: [
        { name: "JavaScript", icon: "fa-js", type: "fa-brands" },
        { name: "Typescript", icon: "fa-js-square", type: "fa-brands" },
        { name: "Python", icon: "fa-python", type: "fa-brands" },
        { name: "Java", icon: "fa-java", type: "fa-brands" },
        { name: "PHP", icon: "fa-php", type: "fa-brands" },
        { name: "C", icon: "fa-c", type: "fa-brands" },
        { name: "HTML", icon: "fa-html5", type: "fa-brands" },
        { name: "CSS", icon: "fa-css3-alt", type: "fa-brands" },
    ],
  },
  {
    title: "Frameworks & Bibliothèques",
    skills: [
        { name: "React", icon: "fa-react", type: "fa-brands" },
        { name: "Next.js", icon: "fa-n", type: "fa-solid" },
        { name: "Spring", icon: "fa-leaf", type: "fa-solid" },
        { name: "Flask", icon: "fa-flask", type: "fa-solid" },
        { name: "Django", icon: "fa-python", type: "fa-brands" },
        { name: "Laravel", icon: "fa-laravel", type: "fa-brands" },
    ],
  },
  {
    title: "Outils & Technologies",
    skills: [
        { name: "GitHub", icon: "fa-github", type: "fa-brands" },
        { name: "Bases de données", icon: "fa-database", type: "fa-solid" },
        { name: "Réseau", icon: "fa-network-wired", type: "fa-solid" },
        { name: "IA", icon: "fa-brain", type: "fa-solid" },
        { name: "Odoo", icon: "fa-cubes", type: "fa-solid" },
        { name: "Microsoft Azure", icon: "fa-microsoft", type: "fa-brands" },
        { name: "Moodle", icon: "fa-graduation-cap", type: "fa-solid" },
    ],
  },
  {
    title: "Compétences transversales",
    skills: [
        { name: "Communication digitale", icon: "fa-bullhorn", type: "fa-solid" },
        { name: "Anglais", icon: "fa-globe", type: "fa-solid" },
        { name: "Pack Office", icon: "fa-file-lines", type: "fa-solid" },
        { name: "WordPress", icon: "fa-wordpress", type: "fa-brands" },
        { name: "Prestashop", icon: "fa-shopify", type: "fa-brands" },
        { name: "Gestion de projet", icon: "fa-tasks", type: "fa-solid" },
    ],
  },
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
              J&apos;ai également pu utiliser des frameworks comme React, Next.js,
              Spring et Flask. Je m&apos;intéresse également à l&apos;intelligence
              artificielle. De plus, j&apos;ai un excellent niveau en anglais.
            </p>
          </div>
        </div>

        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.grid}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skillCard}>
                  <i
                    className={`${skill.type} ${skill.icon} ${styles.skillIcon}`}
                  ></i>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
