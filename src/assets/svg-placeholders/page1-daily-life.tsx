import RopeBucketSvg from "../mysvgfiles/rope-bucket.svg";
import WellTopSvg from "../mysvgfiles/well-top.svg";
import DoughStage1Svg from "../mysvgfiles/bajra-dough-stage1.svg";
import DoughStage2Svg from "../mysvgfiles/bajra-dough-stage2.svg";
import DoughStage3Svg from "../mysvgfiles/bajra-dough-stage3.svg";
import HeadSvg from "../mysvgfiles/head-silhouette.svg";
import Turban1Svg from "../mysvgfiles/turban-style-1.svg";
import Turban2Svg from "../mysvgfiles/turban-style-2.svg";
import Turban3Svg from "../mysvgfiles/turban-style-3.svg";
import Turban4Svg from "../mysvgfiles/turban-style-4.svg";
import Turban5Svg from "../mysvgfiles/turban-style-5.svg";
import Turban6Svg from "../mysvgfiles/turban-style-6.svg";
import DesertDunesSvg from "../mysvgfiles/desert-dunes.svg";
import NightStarsSvg from "../mysvgfiles/night-stars.svg";
import MoonSvg from "../mysvgfiles/moon-icon.svg";

// Page 1: Everyday Life — correctly mapped to actual SVG files

export function RopeAndBucket({ className = '' }: { className?: string }) {
  return <img src={RopeBucketSvg} alt="Rope and Bucket" className={className} />;
}

export function WellTop({ className = '' }: { className?: string }) {
  return <img src={WellTopSvg} alt="Well Top" className={className} />;
}

export function DoughRaw({ className = '' }: { className?: string }) {
  return <img src={DoughStage1Svg} alt="Dough Raw" className={className} />;
}

export function DoughFlattened({ className = '' }: { className?: string }) {
  return <img src={DoughStage2Svg} alt="Dough Flattened" className={className} />;
}

export function DoughPuffed({ className = '' }: { className?: string }) {
  return <img src={DoughStage3Svg} alt="Dough Puffed" className={className} />;
}

export function HeadSilhouette({ className = '' }: { className?: string }) {
  return <img src={HeadSvg} alt="Head Silhouette" className={className} />;
}

export function TurbanJodhpuri({ className = '' }: { className?: string }) {
  return <img src={Turban1Svg} alt="Turban Jodhpuri" className={className} />;
}

export function TurbanJaipur({ className = '' }: { className?: string }) {
  return <img src={Turban2Svg} alt="Turban Jaipur" className={className} />;
}

export function TurbanUdaipur({ className = '' }: { className?: string }) {
  return <img src={Turban3Svg} alt="Turban Udaipur" className={className} />;
}

export function TurbanShekhawati({ className = '' }: { className?: string }) {
  return <img src={Turban4Svg} alt="Turban Shekhawati" className={className} />;
}

export function TurbanMarwar({ className = '' }: { className?: string }) {
  return <img src={Turban5Svg} alt="Turban Marwar" className={className} />;
}

export function TurbanMewar({ className = '' }: { className?: string }) {
  return <img src={Turban6Svg} alt="Turban Mewar" className={className} />;
}

export function DesertDunes({ className = '' }: { className?: string }) {
  return <img src={DesertDunesSvg} alt="Desert Dunes" className={className} />;
}

export function NightSky({ className = '' }: { className?: string }) {
  return <img src={NightStarsSvg} alt="Night Sky" className={className} />;
}

export function MoonIcon({ className = '' }: { className?: string }) {
  return <img src={MoonSvg} alt="Moon Icon" className={className} />;
}
