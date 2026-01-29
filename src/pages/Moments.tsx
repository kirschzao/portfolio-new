import LiquidEther from "../components/LiquidEther";
import InfiniteMenu from "../components/InfiniteMenu";
import { useTranslation } from "react-i18next";

export default function Moments() {
  const { t } = useTranslation();

  const items = [
    {
      image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/0810e1b9-b034-42da-bbe6-dcd28e58aafe.JPG',
      link: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/0810e1b9-b034-42da-bbe6-dcd28e58aafe.JPG',
      title: t('moments.item1.title'),
      description: t('moments.item1.desc')
    },
    {
      image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/IMG_2986.jpg',
      link: 'https://google.com/',
      title: 'South Summit',
      description: t('moments.item2.desc')
    },
    {
      image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/FullSizeRender.jpeg',
      link: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/FullSizeRender.jpeg',
      title: t('moments.item3.title'),
      description: t('moments.item3.desc')
    },
    {
      image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/IMG_3453_Original.jpg',
      link: 'https://google.com/',
      title: 'Avante Time HP',
      description: t('moments.item4.desc')
    },
    {
      image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/1748986111142.jpeg',
      link: 'https://google.com/',
      title: t('moments.item5.title'),
      description: ''
    },
    {
      image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/IMG_2125_Original.jpg',
      link: 'https://google.com/',
      title: t('moments.item6.title'),
      description: t('moments.item6.desc')
    },
    {
      image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/IMG_1357.jpg',
      link: 'https://google.com/',
      title: t('moments.item7.title'),
      description: ''
    },
    {
      image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/258A3971_Original.jpg',
      link: 'https://google.com/',
      title: t('moments.item8.title'),
      description: t('moments.item8.desc')
    },
    {
      image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/IMG_3170.jpg',
      link: 'https://google.com/',
      title: t('moments.item9.title'),
      description: t('moments.item9.desc')
    },
    {
      image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/DSC_0868.JPG',
      link: 'https://google.com/',
      title: 'The last dance',
      description: t('moments.item10.desc')
    },
    {
      image: 'https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/1754181280884.jpeg',
      link: 'https://google.com/',
      title: t('moments.item11.title'),
      description: t('moments.item11.desc')
    },
    {
      image: 'https://nGL2AXDmrUpsglkT.public.blob.vercel-storage.com/IMG_3322_Original.jpg',
      link: 'https://google.com/',
      title: t('moments.item12.title'),
      description: t('moments.item12.desc')
    }
  ];

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex flex-col items-center">
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
      <div className="absolute inset-0 z-10 w-full h-full">
         <InfiniteMenu items={items} />
      </div>
    </div>
  );
}