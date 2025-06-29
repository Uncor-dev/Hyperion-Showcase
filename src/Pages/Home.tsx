export default function Home() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden">
            <svg
                className="fixed left-0 top-0 w-screen h-screen pointer-events-none z-0"
                width="100%"
                height="100%"
                viewBox="0 0 1920 1080"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="1920" y2="1080" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#822EAD" />
                        <stop offset="0.5" stopColor="#1F6CFF" />
                        <stop offset="1" stopColor="#42FFB6" />
                    </linearGradient>
                </defs>
                <path
                    d="M0 700 Q 480 600 960 700 T 1920 700 V1080 H0 Z"
                    fill="url(#waveGradient)"
                    opacity="0.18"
                />
                <path
                    d="M0 800 Q 600 900 1200 800 T 1920 800 V1080 H0 Z"
                    fill="url(#waveGradient)"
                    opacity="0.12"
                />
            </svg>
            <div className="max-w-4xl z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Hyperion : Ton Coach Muscu <br />
                    <span className="bg-gradient-to-r from-[#822EAD] via-[#1F6CFF] to-[#42FFB6] bg-clip-text text-transparent animate-gradient-x font-black">
                        Propulsé par l’IA
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-[#A5A6AD] mb-10">
                    Progresse plus vite, plus intelligemment. Hyperion t’accompagne avec des programmes personnalisés, un suivi en temps réel, et des conseils adaptés à tes objectifs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
                    <button className="bg-[#1F6CFF] hover:bg-[#B088F9] text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-200">
                        Commencer gratuitement
                    </button>
                    <a href="/services">
                        <button className="border border-[#F2F2F5] text-[#F2F2F5] py-3 px-6 rounded-2xl hover:bg-[#F2F2F5] hover:text-black transition-all duration-200">
                            Découvrir l'app
                        </button>
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-[#A5A6AD]">
                    <div className="bg-[#1A1A1F] p-6 rounded-2xl border border-[#2B2B31] hover:border-[#822EAD] transition">
                        <h3 className="text-xl font-semibold text-[#F2F2F5] mb-2">💪 Suivi Intelligent</h3>
                        <p>Analyse tes performances et reçois des conseils en temps réel grâce à notre IA embarquée.</p>
                    </div>
                    <div className="bg-[#1A1A1F] p-6 rounded-2xl border border-[#2B2B31] hover:border-[#1F6CFF] transition">
                        <h3 className="text-xl font-semibold text-[#F2F2F5] mb-2">🧠 Personnalisation Avancée</h3>
                        <p>Ton programme s’adapte à ton évolution, ton rythme et ton emploi du temps.</p>
                    </div>
                    <div className="bg-[#1A1A1F] p-6 rounded-2xl border border-[#2B2B31] hover:border-[#42FFB6] transition">
                        <h3 className="text-xl font-semibold text-[#F2F2F5] mb-2">⚡️ Interface Fluide</h3>
                        <p>Une app pensée pour la rapidité et la simplicité, que tu sois débutant ou expert.</p>
                    </div>
                    <div className="bg-[#1A1A1F] p-6 rounded-2xl border border-[#2B2B31] hover:border-[#FF5E5E] transition">
                        <h3 className="text-xl font-semibold text-[#F2F2F5] mb-2">🔒 Données sécurisées</h3>
                        <p>Tu restes maître de tes données : tout est chiffré, rien n’est partagé sans ton accord.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
