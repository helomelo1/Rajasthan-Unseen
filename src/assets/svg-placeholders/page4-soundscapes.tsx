import TimelineSvg from "../mysvgfiles/timeline4nodes.svg";
import CamelBellSvg from "../mysvgfiles/camelbellbutton.svg";
import HammerSvg from "../mysvgfiles/hammericon.svg";
import VendorSvg from "../mysvgfiles/vendoricon.svg";
import TawaSvg from "../mysvgfiles/tawa.svg";
import SilbattaSvg from "../mysvgfiles/silbatta.svg";
import LadleSvg from "../mysvgfiles/ladle.svg";
import AlgozaSvg from "../mysvgfiles/algoza.svg";
import DholThaliSvg from "../mysvgfiles/dholthali.svg";

// Page 4: Soundscapes SVG assets

export function TimelineNode({ className = '' }: { className?: string }) {
  return <img src={TimelineSvg} alt="Timeline Node" className={className} />;
}

export function TimelinePath({ className = '' }: { className?: string }) {
  return <img src={TimelineSvg} alt="Timeline Path" className={className} />;
}

export function CamelBell({ className = '' }: { className?: string }) {
  return <img src={CamelBellSvg} alt="Camel Bell" className={className} />;
}

export function BlacksmithHammer({ className = '' }: { className?: string }) {
  return <img src={HammerSvg} alt="Blacksmith Hammer" className={className} />;
}

export function VendorIcon({ className = '' }: { className?: string }) {
  return <img src={VendorSvg} alt="Vendor" className={className} />;
}

export function Tawa({ className = '' }: { className?: string }) {
  return <img src={TawaSvg} alt="Tawa" className={className} />;
}

export function Silbatta({ className = '' }: { className?: string }) {
  return <img src={SilbattaSvg} alt="Silbatta" className={className} />;
}

export function Ladle({ className = '' }: { className?: string }) {
  return <img src={LadleSvg} alt="Ladle" className={className} />;
}

export function Algoza({ className = '' }: { className?: string }) {
  return <img src={AlgozaSvg} alt="Algoza" className={className} />;
}

export function DholThali({ className = '' }: { className?: string }) {
  return <img src={DholThaliSvg} alt="Dhol Thali" className={className} />;
}
