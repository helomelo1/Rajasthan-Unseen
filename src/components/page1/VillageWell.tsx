import { useState, useRef, useEffect, useCallback } from 'react';
import { RopeAndBucket, WellTop } from '../../assets/svg-placeholders/page1-daily-life';

export default function VillageWell() {
  const [waterLevel, setWaterLevel] = useState(0);
  const [ropePosition, setRopePosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const startY = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startY.current = e.clientY;
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;

    const deltaY = startY.current - e.clientY;
    const newPosition = Math.max(0, Math.min(100, ropePosition + deltaY / 2));
    setRopePosition(newPosition);
    setWaterLevel(newPosition);
    startY.current = e.clientY;
  }, [isDragging, ropePosition]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      if (ropePosition > 80) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000);
      }
    }
  }, [isDragging, ropePosition]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-amber-900 mb-4">Village Well</h2>
      <p className="text-lg text-amber-800 mb-8 text-center max-w-2xl">
        Drag the rope upward to pull water from the well. Experience the daily ritual of village life.
      </p>

      <div className="relative">
        <WellTop className="mx-auto" />

        <div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          style={{ transform: `translate(-50%, ${ropePosition * 2}px)` }}
        >
          <RopeAndBucket />
        </div>

        {showTooltip && (
          <div className="absolute top-0 right-0 bg-amber-800 text-white p-4 rounded-lg shadow-lg max-w-xs">
            <p className="text-sm">
              In rural Rajasthan, drawing water from wells is a communal activity.
              Women often travel kilometers daily to fetch water, balancing matkas on their heads.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 w-64 bg-white rounded-full h-4 overflow-hidden border-2 border-amber-800">
        <div
          className="bg-blue-400 h-full transition-all duration-300"
          style={{ width: `${waterLevel}%` }}
        />
      </div>
      <p className="text-sm text-amber-800 mt-2">Water Level: {Math.round(waterLevel)}%</p>
    </div>
  );
}
