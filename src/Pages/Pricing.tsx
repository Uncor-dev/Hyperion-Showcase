import { FaCheck } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";

export default function Pricing() {
    return (
        <section className="relative md:px-50 px-6 pb-30">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Tarifs pour <span className="bg-gradient-to-r from-[#822EAD] via-[#1F6CFF] to-[#42FFB6] bg-clip-text text-transparent animate-gradient-x font-black">Hyperion</span></h2>
                <p className="text-[#A5A6AD] text-lg">
                    Choisis l’abonnement qui correspond à tes objectifs. Commence gratuitement ou débloque la puissance de notre IA.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                <div className="bg-[#1A1A1F] p-8 rounded-3xl border border-[#2B2B31] hover:border-[#1F6CFF] transition-all">
                    <h3 className="text-2xl font-bold mb-2">Gratuit</h3>
                    <p className="text-[#A5A6AD] mb-6">Idéal pour découvrir Hyperion, sans engagement.</p>
                    <p className="text-3xl font-bold mb-6">0€ / mois</p>
                    <ul className="text-left text-[#F2F2F5] space-y-3 mb-8">
                        <li className="grid grid-cols-10"><FaCheck className="col-span-1 text-green-400 mt-1" /> <span className="col-span-9">Accès aux plans de base</span></li>
                        <li className="grid grid-cols-10"><FaCheck className="col-span-1 text-green-400 mt-1" /> <span className="col-span-9">Statistiques manuelles</span></li>
                        <li className="grid grid-cols-10"><RiCloseLargeFill className="col-span-1 text-red-600 mt-1" /> <span className="col-span-9">Coaching IA</span></li>
                        <li className="grid grid-cols-10"><RiCloseLargeFill className="col-span-1 text-red-600 mt-1" /> <span className="col-span-9">Personnalisation avancée</span></li>
                    </ul>
                    <button className="w-full py-3 px-6 rounded-2xl border border-[#F2F2F5] text-[#F2F2F5] hover:bg-[#F2F2F5] hover:text-black transition-all">
                        Commencer gratuitement
                    </button>
                </div>

                <div className="bg-[#1A1A1F] p-8 rounded-3xl border-2 border-[#822EAD] shadow-lg hover:shadow-purple-700 transition-all">
                    <h3 className="text-2xl font-bold mb-2">Premium</h3>
                    <p className="text-[#A5A6AD] mb-6">Débloque tout le potentiel d’Hyperion avec l’IA intégrée.</p>
                    <p className="text-3xl font-bold mb-6">20€ / mois</p>
                    <ul className="text-left text-[#F2F2F5] space-y-3 mb-8">
                        <li className="grid grid-cols-10"><FaCheck className="col-span-1 text-green-400 mt-1" /> <span className="col-span-9">Accès illimité à tous les plans</span></li>
                        <li className="grid grid-cols-10"><FaCheck className="col-span-1 text-green-400 mt-1" /> <span className="col-span-9">Coaching IA en temps réel</span></li>
                        <li className="grid grid-cols-10"><FaCheck className="col-span-1 text-green-400 mt-1" /> <span className="col-span-9">Adaptation automatique des entraînements</span></li>
                        <li className="grid grid-cols-10"><FaCheck className="col-span-1 text-green-400 mt-1" /> <span className="col-span-9">Suivi complet et intelligent</span></li>
                    </ul>
                    <button className="w-full py-3 px-6 bg-[#1F6CFF] hover:bg-[#B088F9] text-white font-semibold rounded-2xl transition-all">
                        S’abonner maintenant
                    </button>
                </div>
            </div>
        </section>
    );
}
