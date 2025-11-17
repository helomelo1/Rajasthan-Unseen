// Reusable SVG placeholder component
interface SvgPlaceholderProps {
  description: string;
  size?: string;
  className?: string;
}

export default function SvgPlaceholder({ description, size = 'w-12 h-12', className = '' }: SvgPlaceholderProps) {
  return (
    <div
      aria-hidden
      className={`${size} border-dashed border-2 border-gray-300 flex items-center justify-center text-xs text-gray-400 ${className}`}
      title={`TODO: Replace with SVG — ${description}`}
    >
      SVG
    </div>
  );
}
