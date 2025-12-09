export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          <span className="text-[#5784BA]">Contactez-moi</span>
        </h2>

        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Mon profil vous a interessé ?
        </h3>

        <p className="text-lg text-white/80 mb-12">
          N&apos;hésitez pas à me contacter en cliquant sur le bouton ci-dessous
        </p>

        <a href="mailto:alexandremione@gmail.com">
          <button className="px-12 py-5 bg-[#5784BA] text-white font-medium text-lg rounded-full hover:bg-[#4673a8] transition-all hover:shadow-[0_0_30px_#5784BA] hover:scale-110 transform duration-200">
            Contactez-moi
          </button>
        </a>
      </div>
    </section>
  );
}
