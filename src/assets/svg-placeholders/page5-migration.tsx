import CaravanSvg from "../mysvgfiles/rabaricavan.svg";
import MigrationPathSvg from "../mysvgfiles/migrationroutepath.svg";
import VillageSvg from "../mysvgfiles/villageicons.svg";
import GoatSvg from "../mysvgfiles/goat.svg";
import CamelSvg from "../mysvgfiles/camel.svg";
import WaterContainerSvg from "../mysvgfiles/watercontainer.svg";
import HeatwaveSvg from "../mysvgfiles/heatwaves.svg";
import CloudsSvg from "../mysvgfiles/clouds.svg";
import GrassSvg from "../mysvgfiles/terraingrid.svg"; // reused terrain/grass texture

// Page 5: Rabari Migration SVG assets

export function RabariCaravan({ className = '' }: { className?: string }) {
  return <img src={CaravanSvg} alt="Rabari Caravan" className={className} />;
}

export function MigrationPath({ className = '' }: { className?: string }) {
  return <img src={MigrationPathSvg} alt="Migration Path" className={className} />;
}

export function VillageIcon({ className = '' }: { className?: string }) {
  return <img src={VillageSvg} alt="Village Icon" className={className} />;
}

export function GoatIcon({ className = '' }: { className?: string }) {
  return <img src={GoatSvg} alt="Goat Icon" className={className} />;
}

export function CamelIcon({ className = '' }: { className?: string }) {
  return <img src={CamelSvg} alt="Camel Icon" className={className} />;
}

export function WaterContainer({ className = '' }: { className?: string }) {
  return <img src={WaterContainerSvg} alt="Water Container" className={className} />;
}

export function HeatwaveOverlay({ className = '' }: { className?: string }) {
  return <img src={HeatwaveSvg} alt="Heatwave Overlay" className={className} />;
}

export function CloudOverlay({ className = '' }: { className?: string }) {
  return <img src={CloudsSvg} alt="Cloud Overlay" className={className} />;
}

export function GrassField({ className = '' }: { className?: string }) {
  return <img src={GrassSvg} alt="Grass Field" className={className} />;
}
