interface Project {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    icon: "fa-stethoscope",
    title: "LensJudge en PHP/Laravel et Java",
    description:
      "LensJudge est un programme en groupe de 4 conçu pour automatiser la compilation, l'éxecution et la vérification des programmes soumis lors d'une compétition de programmation. Le projet était en deux temps, la première phase était de faire l'application en Java puis de faire l'application web en PHP.",
    link: "https://gitlab.univ-artois.fr/lucas_perez/lensjudge",
  },
  {
    icon: "fa-gamepad",
    title: "Bomberman en JavaFX",
    description:
      "Un projet de jeu en équipe de 4. Il s'agit simplement de refaire le jeu bomberman.",
    link: "https://gitlab.univ-artois.fr/alexandre_mione/bomberman-groupe-c-5-alexandre-lucas-nathan",
  },
  {
    icon: "fa-balance-scale",
    title: "Juste Prix avec Flask",
    description:
      "Une application web en groupe de 3 dont le but était de recréer le jeu télévisé du juste prix.",
    link: "https://gitlab.univ-artois.fr/lucas_perez/msi-team-malphite-whatsapp",
  },
  {
    icon: "fa-plane",
    title: "Site de voyages avec Laravel",
    description:
      "Projet que l'on a fait en groupe de 8 en collaboration avec un autre département de l'IUT. Nous étions 3 informaticiens à s'occuper du backend du site. L'application permet de gérer des voyages, offrant la possibilité de créé des voyages avec plusieurs étapes, d'ajouter des commentaires et de les aimer.",
    link: "https://gitlab.univ-artois.fr/lucas_perez/application-marathon-24",
  },
  {
    icon: "fa-mobile-alt",
    title: "Battleworld Helper en HTML/CSS/Javascript",
    description:
      "Une application web pour un jeu mobile appelée Battleworld Helper que j'ai créer en projet personnel sur mon temps libre, développée en HTML.",
    link: "https://github.com/MaxenMsf/battleworld-helper",
  },
  {
    icon: "fa-dice",
    title: "Boardgame app en PHP/Laravel",
    description:
      "Une application qui gère des jeux de société via une API en groupe de 3. Elle offre des fonctionnalités CRUD pour ajouter, modifier, supprimer ou voir un jeu de société.",
    link: "https://gitlab.univ-artois.fr/lucas_perez/boardgame-app",
  },
  {
    icon: "fa-blog",
    title: "Blog de Guide, Astuces et Tuto pour Marvel Strike Force",
    description:
      "J'ai créé ce blog from scratch pour fournir des guides, astuces et tutoriels pour le jeu vidéo Marvel Strike Force.",
    link: "https://maxenmsf.github.io/guide-msf/index.html",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          <span className="text-[#5784BA]">Projets</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#5784BA]/10 to-transparent p-8 rounded-xl border border-[#5784BA]/30 hover:border-[#5784BA] transition-all hover:scale-105 transform duration-200 hover:shadow-[0_0_30px_#5784BA]/30 flex flex-col"
            >
              <div className="text-5xl text-[#5784BA] mb-6">
                <i className={`fas ${project.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-white/80 leading-relaxed mb-6 flex-grow">
                {project.description}{" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5784BA] hover:underline font-medium"
                >
                  Voir le projet
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
