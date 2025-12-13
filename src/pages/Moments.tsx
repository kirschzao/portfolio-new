import LiquidEther from "../components/LiquidEther";
import InfiniteMenu from "../components/InfiniteMenu";

// --- DADOS DOS MOMENTOS (URLs Normais, sem grayscale) ---
const items = [
  {
    image: 'https://picsum.photos/300/300',
    link: 'https://google.com/',
    title: 'Exploração',
    description: 'Novos horizontes.'
  },
  {
    image: 'https://picsum.photos/400/400',
    link: 'https://google.com/',
    title: 'Natureza',
    description: 'Paz interior.'
  },
  {
    image: 'https://picsum.photos/500/500',
    link: 'https://google.com/',
    title: 'Urbano',
    description: 'Caos organizado.'
  },
  {
    image: 'https://picsum.photos/600/600',
    link: 'https://google.com/',
    title: 'Arte',
    description: 'Expressão pura.'
  },
  {
    image: 'https://picsum.photos/300/400',
    link: 'https://google.com/',
    title: 'Viagem',
    description: 'Memórias vivas.'
  }
];

export default function Moments() {
  return (
    // Container Principal: Full Screen, sem scroll da página (pois o menu tem seu próprio scroll 3D)
    <div className="w-full h-screen bg-black relative overflow-hidden flex flex-col items-center">

      {/* Fundo Animado */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <LiquidEther
            colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
            mouseForce={20}
            cursorSize={200}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.8}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
        />
      </div>

      {/* Menu Infinito: Ocupa toda a tela, mas com z-index menor que o título */}
      <div className="absolute inset-0 z-10 w-full h-full">
         <InfiniteMenu items={items} />
      </div>

    </div>
  );
}