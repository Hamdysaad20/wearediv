import {Hero} from './components/hero/index'
import { Services } from './components/services'
import { CreatorSection } from './components/features/CreatorSection'
import { ArtistSection } from './components/features/ArtistSection'
import { LabelSection } from './components/features/LabelSection'
import { BrandSection } from './components/brand-section'
import { InfiniteBrandSection } from './components/features/InfiniteBrandSection'
import { StatsSection } from './components/features/StatsSection';
import { PricingSection } from './components/features/PricingSection';
import { FreeTierHighlight } from './components/features/FreeTierHighlight';

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandSection />
      <div className='flex items-center justify-center flex-col'>
        <InfiniteBrandSection />
      </div>
      <Services />
      <div className="relative">
        <div className="sticky top-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div id="cornerEffect" className="absolute top-0 left-0 -z-10 h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px] transition-all duration-1000 ease-in-out"></div>
        </div>
        <div className="feature-section"><CreatorSection /></div>
        <div className="feature-section"><ArtistSection /></div>
        <div className="feature-section"><LabelSection /></div>
        <StatsSection />
        <FreeTierHighlight />
        <PricingSection />
      </div>
    </main>
  );
}