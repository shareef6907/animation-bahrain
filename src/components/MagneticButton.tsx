"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const baseClass =
    variant === "primary"
      ? "bg-amber text-abyss font-mono text-sm font-medium px-8 py-4 rounded-xl tracking-wider uppercase hover:bg-amber-light transition-colors duration-300 inline-block"
      : "border border-amber text-amber font-mono text-sm font-medium px-8 py-4 rounded-xl tracking-wider uppercase hover:bg-amber hover:text-abyss transition-all duration-300 inline-block";

  const motionProps = {
    animate: { x: position.x, y: position.y },
    transition: { type: "spring" as const, stiffness: 150, damping: 15 },
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block magnetic-cursor"
    >
      <motion.div {...motionProps}>
        {href ? (
          <a href={href} className={baseClass + " " + className}>
            {children}
          </a>
        ) : (
          <button onClick={onClick} className={baseClass + " " + className}>
            {children}
          </button>
        )}
      </motion.div>
    </div>
  );
}
