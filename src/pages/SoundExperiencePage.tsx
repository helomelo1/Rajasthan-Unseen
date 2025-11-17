import LayeredSoundscapeTimeline from '../components/page4/LayeredSoundscapeTimeline';
import MarketSoundMixer from '../components/page4/MarketSoundMixer';
import RuralKitchenAmbience from '../components/page4/RuralKitchenAmbience';

export default function SoundExperiencePage() {
  return (
    <div className="scroll-smooth">
      <LayeredSoundscapeTimeline />
      <MarketSoundMixer />
      <RuralKitchenAmbience />
    </div>
  );
}
