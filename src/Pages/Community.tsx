import Louis from "../assets/transfoLouis.png"
import Martin from "../assets/tranfoMartin.png"

export default function Community() {
    return (
        <section className="flex flex-col items-center justify-center md:px-50 px-6 pb-15 bg-[#0E0E12] text-[#F2F2F5]">
            <div className="max-w-4xl text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                    Une <span className="bg-gradient-to-r from-[#822EAD] via-[#1F6CFF] to-[#42FFB6] bg-clip-text text-transparent animate-gradient-x">Communauté</span> qui progresse ensemble
                </h1>
                <p className="text-lg md:text-xl text-gray-300">
                    Plus de 10 000 utilisateurs motivés. Découvre leurs transformations et témoignages.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-16">
                <div className="text-center">
                    <p className="text-4xl font-bold text-[#1F6CFF]">10k+</p>
                    <p className="text-gray-300">utilisateurs satisfaits</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-[#1F6CFF]">4.9/5</p>
                    <p className="text-gray-300">note moyenne</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-[#1F6CFF]">98%</p>
                    <p className="text-gray-300">taux de satisfaction</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="bg-[#1A1A1F] p-6 rounded-xl shadow hover:scale-105 transition">
                    <p className="italic">“Hyperion m’a aidé à enfin atteindre mes objectifs. L’IA comprend vraiment ce dont j’ai besoin.”</p>
                    <p className="mt-4 font-bold text-[#822EAD]">— Alex</p>
                </div>
                <div className="bg-[#1A1A1F] p-6 rounded-xl shadow hover:scale-105 transition">
                    <p className="italic">“J’ai gagné en force et perdu 10kg en 4 mois grâce au suivi ultra précis.”</p>
                    <p className="mt-4 font-bold text-[#822EAD]">— Camille</p>
                </div>
                <div className="bg-[#1A1A1F] p-6 rounded-xl shadow hover:scale-105 transition">
                    <p className="italic">“Les stats et le coach vocal me boostent à chaque séance. J’adore.”</p>
                    <p className="mt-4 font-bold text-[#822EAD]">— Samir</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <img src={Louis} alt="Avant/Après 1" className="rounded-xl shadow-lg w-full md:w-1/2" />
                <img src={Martin} alt="Avant/Après 2" className="rounded-xl shadow-lg w-full md:w-1/2" />
            </div>

            <div className="text-center">
                <h2 className="text-3xl font-bold mb-8">Prêt à rejoindre la team Hyperion ?</h2>
                <a href="#" className="inline-block p-[1.5px] rounded-full bg-gradient-to-r from-[#822EAD] via-[#1F6CFF] to-[#42FFB6] animate-gradient-x">
                    <button className="bg-[#1A1A1F] hover:bg-[#232336] text-white font-semibold py-3 px-8 rounded-full transition w-full cursor-pointer">
                        Rejoindre maintenant
                    </button>
                </a>
            </div>
        </section>
    );
}
