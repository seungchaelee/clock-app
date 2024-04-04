import { useState } from "react";

interface TooltipState {
  isVisible: boolean;
  position: { x: number; y: number };
}

export const useTooltip = (): TooltipState & {
  handleMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseLeave: () => void;
} => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsVisible(true);
    setPosition({
      x: event.clientX + 10,
      y: event.clientY - 10,
    });
  };

  const handleMouseLeave = () => setIsVisible(false);

  return { isVisible, position, handleMouseMove, handleMouseLeave };
};
