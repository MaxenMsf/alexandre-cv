import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          <span className="text-[#5784BA]">A Propos</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image
                src="/alexandre.png"
                alt="Alexandre MIONE"
                fill
                className="rounded-2xl object-cover shadow-2xl shadow-[#5784BA]/20"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Faire des sites est ma passion
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Faire des sites est ma passion, mais je ne m&apos;arrête pas là. J&apos;ai
              également une solide expérience dans le développement
              d&apos;applications, ce qui me permet de créer des solutions complètes
              et performantes. De plus, j&apos;ai eu l&apos;opportunité de travailler en
              entreprise, où j&apos;ai pu mettre en pratique mes compétences et
              acquérir une expérience précieuse. Pour en savoir plus sur mon
              parcours et mes compétences, vous pouvez télécharger mon CV
              ci-dessous.
            </p>

            <div className="flex items-center gap-6 bg-gradient-to-r from-[#5784BA]/20 to-transparent p-6 rounded-xl border border-[#5784BA]/30">
              <div className="text-5xl font-bold text-[#5784BA]">5</div>
              <div className="text-white/90">
                <div className="font-semibold">Années</div>
                <div>d&apos;expérience</div>
              </div>
            </div>

            <div>
              <a href="/CV.png" download>
                <button className="px-8 py-4 bg-[#5784BA] text-white font-medium rounded-full hover:bg-[#4673a8] transition-all hover:shadow-[0_0_20px_#5784BA] hover:scale-105 transform duration-200">
                  Télécharger mon CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
