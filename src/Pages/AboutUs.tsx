export default function AboutUs() {
    return (
        <section className="relative md:px-50 px-6 pb-30">
            <div className="max-w-5xl mx-auto text-center mb-16 z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">À propos d’<span className="bg-gradient-to-r from-[#822EAD] via-[#1F6CFF] to-[#42FFB6] bg-clip-text text-transparent animate-gradient-x font-black">Hyperion</span></h2>

                <p className="text-[#A5A6AD] text-lg max-w-2xl mx-auto">
                    Une fusion entre passion, performance et intelligence artificielle pour repousser tes limites.
                </p>
                <div
                    className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#822EAD] via-[#1F6CFF] to-transparent"
                    aria-hidden="true"
                />
            </div>

            <div className="bg-[#1A1A1F] px-6 py-16 text-center rounded-t-3xl">
                <h3 className="text-3xl font-bold mb-4 text-[#A5A6AD]">Notre histoire</h3>
                <p className="max-w-3xl mx-auto text-[#A5A6AD]">
                    Hyperion est né de la vision de deux passionnés de musculation et de technologie. Lassé des programmes standards peu personnalisés, ils ont créé une IA capable de comprendre ton corps et de t’accompagner de façon unique. Chaque séance devient une expérience sur-mesure, optimisée pour tes objectifs.        </p>
            </div>

            <div className="px-6 py-16">
                <h3 className="text-3xl font-bold mb-8 text-center text-[#B088F9]">Nos valeurs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-[#A5A6AD]">
                    <div className="bg-[#1A1A1F] p-6 rounded-2xl border border-[#2B2B31] hover:border-[#822EAD] transition">
                        <h3 className="text-xl font-semibold text-[#F2F2F5] mb-2">Santé</h3>
                        <p>Prioriser ton bien-être physique et mental, au-delà de la simple performance.</p>
                    </div>
                    <div className="bg-[#1A1A1F] p-6 rounded-2xl border border-[#2B2B31] hover:border-[#1F6CFF] transition">
                        <h3 className="text-xl font-semibold text-[#F2F2F5] mb-2">Performance</h3>
                        <p>T’aider à atteindre ton meilleur niveau, sans compromis.</p>
                    </div>
                    <div className="bg-[#1A1A1F] p-6 rounded-2xl border border-[#2B2B31] hover:border-[#42FFB6] transition">
                        <h3 className="text-xl font-semibold text-[#F2F2F5] mb-2">Accessibilité</h3>
                        <p>Rendre le coaching personnalisé accessible à tous, peu importe ton niveau.</p>
                    </div>
                    <div className="bg-[#1A1A1F] p-6 rounded-2xl border border-[#2B2B31] hover:border-[#FF5E5E] transition">
                        <h3 className="text-xl font-semibold text-[#F2F2F5] mb-2">Innovation</h3>
                        <p>Toujours innover pour te proposer une expérience unique et évolutive.</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#1A1A1F] px-6 py-16 text-center rounded-b-3xl">
                <h3 className="text-3xl font-bold mb-4 text-[#A5A6AD]">L'équipe</h3>
                <p className="max-w-3xl mx-auto text-[#A5A6AD]">
                    Hyperion est porté par un solo founder, passionné de musculation et expert en IA. Ce mélange rare de technologie et de sport donne vie à un coach numérique intelligent et motivant, disponible partout, tout le temps.
                </p>
            </div>

            <div className="px-6 py-16 text-center">
                <h3 className="text-3xl font-bold mb-4">Notre technologie</h3>
                <p className="max-w-3xl mx-auto text-[#A5A6AD] mb-8">
                    Hyperion s’appuie sur une IA avancée, capable d’analyser chaque répétition, chaque performance et d’adapter ton programme en temps réel. Avec un modèle d’IA entraîné spécialement pour le coaching, tu profites d’un accompagnement évolutif, ultra-personnalisé, digne d’un coach haut de gamme.
                </p>
                <div className="inline-block p-[1.5px] rounded-full bg-gradient-to-r from-[#822EAD] via-[#1F6CFF] to-[#42FFB6] animate-gradient-x">
                    <button className="bg-[#1A1A1F] hover:bg-[#232336] text-white font-semibold py-3 px-8 rounded-full transition w-full">
                        En savoir plus sur l'IA
                    </button>
                </div>
            </div>
            <svg
                className="absolute left-0 bottom-0 w-full h-[300px] pointer-events-none z-0 pt-16"
                width="100%"
                height="300"
                viewBox="0 0 1920 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="1920" y2="300" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#822EAD" />
                        <stop offset="0.5" stopColor="#1F6CFF" />
                        <stop offset="1" stopColor="#42FFB6" />
                    </linearGradient>
                </defs>
                <path
                    d="M0 120 Q 480 60 960 120 T 1920 120 V300 H0 Z"
                    fill="url(#waveGradient)"
                    opacity="0.18"
                />
                <path
                    d="M0 200 Q 600 260 1200 200 T 1920 200 V300 H0 Z"
                    fill="url(#waveGradient)"
                    opacity="0.12"
                />
            </svg>
        </section>
    );
}
