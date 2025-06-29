export default function Services() {
  return (
    <section className="min-h-screen px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ce que <span className="bg-gradient-to-r from-[#822EAD] via-[#1F6CFF] to-[#42FFB6] bg-clip-text text-transparent animate-gradient-x font-black">Hyperion</span> fait pour toi</h2>
        <p className="text-[#A5A6AD] text-lg">
          Une technologie puissante, au service de ton entraînement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        <ServiceCard
          title="Programme sur mesure par IA"
          description="Hyperion crée un plan d’entraînement personnalisé en fonction de ton niveau, ton objectif et ta disponibilité."
          icon="🧬"
          borderColor="#822EAD"
        />

        <ServiceCard
          title="Suivi des performances en temps réel"
          description="Grâce à l’analyse de tes résultats, le programme s’ajuste automatiquement pour te pousser sans te blesser."
          icon="📈"
          borderColor="#1F6CFF"
        />

        <ServiceCard
          title="Coach vocal intégré"
          description="Ton assistant IA t’encourage, t’indique les consignes, le rythme et les temps de repos pendant tes séances."
          icon="🎧"
          borderColor="#42FFB6"
        />

        <ServiceCard
          title="Statistiques & graphiques de progression"
          description="Suis ton évolution jour après jour avec des visuels clairs et des insights générés automatiquement."
          icon="📊"
          borderColor="#B088F9"
        />

        <ServiceCard
          title="Conseils nutrition & récupération"
          description="Reçois des suggestions personnalisées sur l’alimentation et la récupération pour optimiser tes résultats."
          icon="🥗"
          borderColor="#3F8EFC"
        />
      </div>
    </section>
  );
}

// ✅ Composant réutilisable
function ServiceCard({ title, description, icon, borderColor }: { title: string; description: string; icon: string; borderColor: string }) {
  return (
    <div className="bg-[#1A1A1F] p-6 rounded-2xl border-l-4 shadow-md hover:shadow-lg transition-all" style={{ borderColor }}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-[#F2F2F5] mb-2">{title}</h3>
      <p className="text-[#A5A6AD]">{description}</p>
    </div>
  );
}
