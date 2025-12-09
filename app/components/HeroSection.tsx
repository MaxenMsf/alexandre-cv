import Image from "next/image";
import Typewriter from "./Typewriter";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Bonjour, je suis{" "}
            <span className="text-[#5784BA] drop-shadow-[0_0_10px_#5784BA]">
              Alexandre Mione
            </span>
          </h1>

          <Typewriter />

          <p className="text-lg text-white/80 leading-relaxed">
            Bienvenue sur mon portfolio ! Passionné par le développement web, je
            crée des sites et des applications modernes et performants. Explorez
            mes compétences, découvrez mes projets et n&apos;hésitez pas à me
            contacter je recherche actuellement un stage de 8 à 10 semaines à
            partir du 28 avril 2025.
          </p>

          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/MaxenMsf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#5784BA] transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://gitlab.univ-artois.fr/alexandre_mione"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#5784BA] transition-colors hover:scale-110 transform duration-200"
              aria-label="GitLab"
            >
              <i className="fa-brands fa-gitlab"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/alexandre-mione-526979180/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#5784BA] transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <div>
            <a href="mailto:alexandremione@gmail.com">
              <button className="px-8 py-4 bg-[#5784BA] text-white font-medium rounded-full hover:bg-[#4673a8] transition-all hover:shadow-[0_0_20px_#5784BA] hover:scale-105 transform duration-200">
                Contactez-moi
              </button>
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-[#5784BA] rounded-full blur-3xl opacity-30 animate-pulse" />
            <Image
              src="/profil.webp"
              alt="Photo de profil"
              fill
              className="rounded-full object-cover relative z-10 border-4 border-[#5784BA]/30"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
