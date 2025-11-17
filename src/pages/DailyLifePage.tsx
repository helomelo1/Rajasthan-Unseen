import VillageWell from '../components/page1/VillageWell';
import BajraRotiMaker from '../components/page1/BajraRotiMaker';
import TurbanTypology from '../components/page1/TurbanTypology';

export default function DailyLifePage() {
  return (
    <div className="scroll-smooth">
      <VillageWell />
      <BajraRotiMaker />
      <TurbanTypology />
    </div>
  );
}
