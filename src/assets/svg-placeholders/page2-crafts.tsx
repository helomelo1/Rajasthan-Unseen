import BluePotteryBowlSvg from "../mysvgfiles/blue-pottery-bowl.svg";
import PaintDropletsSvg from "../mysvgfiles/paint-droplets.svg";
import RotatingPotSvg from "../mysvgfiles/rotating-pot.svg";
import ThewaGoldPatternSvg from "../mysvgfiles/thewa-gold-pattern.svg";
import GlassBasePlateSvg from "../mysvgfiles/glass-base-plate.svg";
import PulperDrumSvg from "../mysvgfiles/kagzi-pulper-drum.svg";
import MeshScreenSvg from "../mysvgfiles/mesh-screen-frame.svg";
import PaperSheetSvg from "../mysvgfiles/paper-sheet.svg";
import MojariOutlineSvg from "../mysvgfiles/mojari-outline.svg";
import StitchingPathSvg from "../mysvgfiles/stitching-path.svg";

// Page 2: Endangered Crafts — correctly mapped to actual SVG files

export function PotteryBowl({ className = '' }: { className?: string }) {
  return <img src={BluePotteryBowlSvg} alt="Pottery Bowl" className={className} />;
}

export function PaintDroplet({ color = 'gray', className = '' }: { color?: string; className?: string }) {
  return <img src={PaintDropletsSvg} alt={`Paint droplet ${color}`} className={className} />;
}

export function SpinningPot({ className = '' }: { className?: string }) {
  return <img src={RotatingPotSvg} alt="Spinning Pot" className={className} />;
}

export function ThewaGoldPattern({ className = '' }: { className?: string }) {
  return <img src={ThewaGoldPatternSvg} alt="Thewa Gold Pattern" className={className} />;
}

export function GlassBasePlate({ className = '' }: { className?: string }) {
  return <img src={GlassBasePlateSvg} alt="Glass Base Plate" className={className} />;
}

export function PulperDrum({ className = '' }: { className?: string }) {
  return <img src={PulperDrumSvg} alt="Pulper Drum" className={className} />;
}

export function MeshScreen({ className = '' }: { className?: string }) {
  return <img src={MeshScreenSvg} alt="Mesh Screen" className={className} />;
}

export function PaperSheet({ className = '' }: { className?: string }) {
  return <img src={PaperSheetSvg} alt="Paper Sheet" className={className} />;
}

export function MojariOutline({ className = '' }: { className?: string }) {
  return <img src={MojariOutlineSvg} alt="Mojari Outline" className={className} />;
}

export function StitchingPath({ className = '' }: { className?: string }) {
  return <img src={StitchingPathSvg} alt="Stitching Path" className={className} />;
}
