export default function Contact() {
    return (
        <section className="px-6 pb-15">
            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                    Contacte-nous
                </h1>
                <p className="text-[#A5A6AD] text-lg max-w-xl mx-auto">
                    Une question ? Une suggestion ? Nous sommes là pour t’écouter et t’accompagner.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                <form className="flex-1 bg-[#1A1A1F] p-8 rounded-2xl shadow-md">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Nom</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 rounded-xl bg-[#2B2B31] border border-[#2B2B31] text-[#F2F2F5] focus:outline-none focus:ring-2 focus:ring-[#822EAD]"
                            placeholder="Ton nom"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 rounded-xl bg-[#2B2B31] border border-[#2B2B31] text-[#F2F2F5] focus:outline-none focus:ring-2 focus:ring-[#1F6CFF]"
                            placeholder="Ton email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full p-3 rounded-xl bg-[#2B2B31] border border-[#2B2B31] text-[#F2F2F5] focus:outline-none focus:ring-2 focus:ring-[#822EAD]"
                            placeholder="Ton message..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#1F6CFF] hover:bg-[#3F8EFC] text-white font-semibold py-3 rounded-xl cursor-pointer transition"
                    >
                        Envoyer
                    </button>
                </form>

                <div className="bg-[#1A1A1F] p-8 rounded-2xl flex flex-col h-73">
                    <h3 className="text-2xl font-bold mb-4 text-[#A5A6AD]">Nos infos</h3>
                    <p className="text-[#A5A6AD] mb-4">
                        ✉️ contact.hyperion@gmail.com
                    </p>
                    <p className="text-[#A5A6AD] mb-4">
                        📍 Basé à Pékin, Chine
                    </p>
                    <p className="text-[#A5A6AD] mb-6">
                        ⏰ Nous répondons généralement sous 24h.
                    </p>
                    <a href="#" className="inline-block p-[1.5px] rounded-full bg-gradient-to-r from-[#822EAD] via-[#1F6CFF] to-[#42FFB6] animate-gradient-x">
                        <button className="bg-[#1A1A1F] hover:bg-[#232336] text-white font-semibold py-3 px-8 rounded-full transition w-full cursor-pointer">
                            Rejoindre la communauté
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
