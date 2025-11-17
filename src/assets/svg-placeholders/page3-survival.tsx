import Stoneblocks from "../mysvgfiles/stepwellstoneblock.svg";
import StepwellStructureSvg from "../mysvgfiles/stepwellstructurelayer.svg";
import KhadinFieldSvg from "../mysvgfiles/khadinfieldlayout.svg";
import JohadPitsSvg from "../mysvgfiles/johadpits.svg";
import TerrainGridSvg from "../mysvgfiles/terraingrid.svg";
import HouseModelSvg from "../mysvgfiles/houseorientationmodel.svg";
import WindArrowsSvg from "../mysvgfiles/windarrows.svg";
import WaterFlowSvg from "../mysvgfiles/watercontainer.svg"; // reused as a water-related asset

// Page 3: Desert Survival SVG assets (using actual SVG files from ../mysvgfiles)

// Stepwell stone block (rectangular stone brick for building)
export function StoneBlock({ className = '' }: { className?: string }) {
  return <img src={Stoneblocks} alt="Stepwell Stone Block" className={className} />;
}

// Stepwell structure layers (multi-level stepwell cross-section)
export function StepwellStructure({ className = '' }: { className?: string }) {
  return <img src={StepwellStructureSvg} alt="Stepwell Structure" className={className} />;
}

// Khadin field layout (agricultural field with boundaries)
export function KhadinField({ className = '' }: { className?: string }) {
  return <img src={KhadinFieldSvg} alt="Khadin Field" className={className} />;
}

// Johad pit (water harvesting pit, circular depression)
export function JohadPit({ className = '' }: { className?: string }) {
  return <img src={JohadPitsSvg} alt="Johad Pit" className={className} />;
}

// Terrain grid (isometric or top-down desert terrain)
export function TerrainGrid({ className = '' }: { className?: string }) {
  return <img src={TerrainGridSvg} alt="Terrain Grid" className={className} />;
}

// House orientation model (simple house with directional markers)
export function HouseModel({ className = '' }: { className?: string }) {
  return <img src={HouseModelSvg} alt="House Orientation Model" className={className} />;
}

// Wind arrow (directional arrow showing wind flow)
export function WindArrow({ className = '' }: { className?: string }) {
  return <img src={WindArrowsSvg} alt="Wind Arrows" className={className} />;
}

// Water flow representation (using water container SVG as a related visual)
export function WaterFlow({ className = '' }: { className?: string }) {
  return <img src={WaterFlowSvg} alt="Water Flow" className={className} />;
}
