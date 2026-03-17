//import LiquidEther from '../components/LiquidEther';
import Hero from './hero';
import SecondSection from './secondsection';
import ThirdSection from './thirdsection';
import BentoSection from './bentosection';
import StackSection from './stacksection';

function MainSection() {
  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-purple-900/15 to-black animate-gradient-xy"></div>
        {/*
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
            */}
        

        {/* Container para o conteúdo da página, posicionado sobre o fundo (z-10) */}
        <div className="relative z-10 flex flex-col w-full">            
              <Hero />
            <div className="w-full pb-6"> 
              <SecondSection />
            </div>
            <div className="w-full pb-10">
              <ThirdSection/>
            </div>
            <div className="w-full pb-10">
               <StackSection />
            </div>
           <div className="w-full pb-20"> 
               <BentoSection />
            </div>


        </div>
        
    </div>
  );
}

export default MainSection;