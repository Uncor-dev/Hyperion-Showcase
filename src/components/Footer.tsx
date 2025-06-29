export default function Footer() {
    return (
        <footer className="w-full bg-[#0E0E12] text-[#F2F2F5] pt-6 pb-2 relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10 pb-4">
                <p className="text-center text-xs opacity-60">© Hyperion 2025</p>
            </div>
            <svg
                className="absolute left-0 bottom-0 w-full h-[220px] pointer-events-none z-0"
                viewBox="0 0 1920 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="1920" y2="220" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#822EAD" />
                        <stop offset="0.5" stopColor="#1F6CFF" />
                        <stop offset="1" stopColor="#42FFB6" />
                    </linearGradient>
                </defs>
                <path
                    d="M0,160 C480,80 1440,240 1920,160 Q1920,220 1820,220 H100 Q0,220 0,220 Z"
                    fill="url(#waveGradient)"
                    opacity="0.15"
                />
                <path
                    d="M0,190 C480,120 1440,280 1920,190 Q1920,220 1820,220 H100 Q0,220 0,220 Z"
                    fill="url(#waveGradient)"
                    opacity="0.1"
                />
            </svg>
        </footer>
    );
}
