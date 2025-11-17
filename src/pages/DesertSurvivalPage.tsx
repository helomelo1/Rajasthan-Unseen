import StepwellBuilder from '../components/page3/StepwellBuilder';
import KhadinFarmSimulator from '../components/page3/KhadinFarmSimulator';
import JohadWaterRecharge from '../components/page3/JohadWaterRecharge';
import DesertWindPattern from '../components/page3/DesertWindPattern';

export default function DesertSurvivalPage() {
  return (
    <div className="scroll-smooth">
      <StepwellBuilder />
      <KhadinFarmSimulator />
      <JohadWaterRecharge />
      <DesertWindPattern />
    </div>
  );
}
