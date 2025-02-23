import {Hero} from './components/hero/index'
import { Services } from './components/services'
import { CreatorSection } from './components/features/CreatorSection'
import { ArtistSection } from './components/features/ArtistSection'
import { LabelSection } from './components/features/LabelSection'
import { BrandSection } from './components/brand-section'
import { InfiniteBrandSection } from './components/features/InfiniteBrandSection'

export default function Home() {
  return (
    <main >
      <Hero />
      <BrandSection />
      <div className='flex items-center justify-center flex-col'>
      <InfiniteBrandSection/>
      </div>
      <Services />
      <CreatorSection />
      <ArtistSection />
      <LabelSection />
    </main>
  )
}