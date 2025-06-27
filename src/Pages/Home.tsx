export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center text-center px-6 text-[#F2F2F5]">
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Hyperion : Ton Coach Muscu <br />
                    <span className="bg-gradient-to-r from-[#822EAD] via-[#1F6CFF] to-[#42FFB6] bg-clip-text text-transparent animate-gradient-x font-black">
                      propulsé par l’IA
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-[#A5A6AD] mb-10">
                    Progresse plus vite, plus intelligemment. Hyperion t’accompagne avec des programmes personnalisés, un suivi en temps réel, et des conseils adaptés à tes objectifs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
                    <button className="bg-[#1F6CFF] hover:bg-[#B088F9] text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-200">
                        Commencer gratuitement
                    </button>
                    <button className="border border-[#F2F2F5] text-[#F2F2F5] py-3 px-6 rounded-2xl hover:bg-[#F2F2F5] hover:text-black transition-all duration-200">
                        Découvrir l'app
                    </button>
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
