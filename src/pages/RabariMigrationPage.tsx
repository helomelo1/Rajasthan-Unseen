import InteractiveMigrationRoute from '../components/page5/InteractiveMigrationRoute';
import LivestockCareGame from '../components/page5/LivestockCareGame';
import SeasonalChangesVisualizer from '../components/page5/SeasonalChangesVisualizer';

export default function RabariMigrationPage() {
  return (
    <div className="scroll-smooth">
      <InteractiveMigrationRoute />
      <LivestockCareGame />
      <SeasonalChangesVisualizer />
    </div>
  );
}
