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
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          <span className="text-[#5784BA]">Compétences</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Mes compétences</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Grâce à mon parcours scolaire, j&apos;ai acquis des compétences en
              développement web, en Java, en Python, en C, mais aussi en bases
              de données, en réseaux ainsi qu&apos;en communication digitale. J&apos;ai
              également pu utiliser des frameworks comme Django, Laravel et
              Flask. De plus, j&apos;ai un excellent niveau en anglais.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#5784BA]/20 to-transparent p-6 rounded-xl border border-[#5784BA]/30 hover:border-[#5784BA] transition-all hover:scale-105 transform duration-200 hover:shadow-[0_0_20px_#5784BA]/30"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <i
                  className={`fa-brands fa-solid ${skill.icon} text-4xl text-[#5784BA]`}
                ></i>
                <span className="text-white font-medium">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
