import {Hero} from './components/hero/index'
import { Services } from './components/services'
import { CreatorSection } from './components/features/CreatorSection'
import { ArtistSection } from './components/features/ArtistSection'
import { LabelSection } from './components/features/LabelSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CreatorSection />
      <ArtistSection />
      <LabelSection />
    </main>
  )
}