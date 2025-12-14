import LiquidEther from "../components/LiquidEther";
import InfiniteMenu from "../components/InfiniteMenu";

// --- DADOS DOS MOMENTOS (URLs Normais, sem grayscale) ---
const items = [
  {
    image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/0810e1b9-b034-42da-bbe6-dcd28e58aafe.JPG',
    link: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/0810e1b9-b034-42da-bbe6-dcd28e58aafe.JPG',
    title: 'Meu Eterno Time',
    description: 'Como o dreamteam de 92'
  },
  {
    image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/IMG_2986.jpg',
    link: 'https://google.com/',
    title: 'South Summit',
    description: 'Um dos maiores eventos de startups. Fiz muito Networking lá.'
  },
  {
    image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/FullSizeRender.jpeg',
    link: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/FullSizeRender.jpeg',
    title: 'Mais um South Summit',
    description: 'Um dos maiores eventos de startups. Fiz muito Networking lá.'
  },
  {
    image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/IMG_3453_Original.jpg',
    link: 'https://google.com/',
    title: 'Avante Time HP',
    description: 'Meu time de Projeto e Pesquisa'
  },
  {
    image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/1748986111142.jpeg',
    link: 'https://google.com/',
    title: 'Minha Primeira Hackatona',
    description: ''
  },
  {
    image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/IMG_2125_Original.jpg',
    link: 'https://google.com/',
    title: 'Meu Trote',
    description: 'Onde eu conheci as pessoas que impulsionaram minha vida'
  },
  {
    image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/IMG_1357.jpg',
    link: 'https://google.com/',
    title: 'Um ano novo',
    description: ''
  },
  {
    image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/258A3971_Original.jpg',
    link: 'https://google.com/',
    title: 'Minha família',
    description: 'O suporte que me faz seguir em frente'
  },
  {
    image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/IMG_3170.jpg',
    link: 'https://google.com/',
    title: 'Setup de Dev',
    description: 'Meu cantinho de criação'
  },
  {
    image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/DSC_0868.JPG',
    link: 'https://google.com/',
    title: 'The last dance',
    description: 'O último baile alemão'
  },
  {
    image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/1754181280884.jpeg',
    link: 'https://google.com/',
    title: 'Projeto Destaque',
    description: 'O projeto que me rendeu reconhecimento na universidade'
  },
  {
    image: 'https://nGL2AXDmrUpsglkT.public.blob.vercel-storage.com/IMG_3322_Original.jpg',
    link: 'https://google.com/',
    title: 'Um grande 10',
    description: '10 na prova de Cálculo I'
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