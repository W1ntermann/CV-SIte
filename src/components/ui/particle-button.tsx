"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface ParticleButtonProps extends ButtonProps {
  onSuccess?: () => void;
  successDuration?: number;
}

function SuccessParticles({
  buttonRef,
}: {
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const rect = buttonRef.current?.getBoundingClientRect();
  if (!rect) return null;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  return (
    <AnimatePresence>
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const distance = Math.random() * 60 + 30;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        return (
          <motion.div
            key={i}
            className="fixed w-1.5 h-1.5 rounded-full pointer-events-none z-50"
            style={{
              left: centerX,
              top: centerY,
              backgroundColor: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#6366f1" : "#8b5cf6",
              boxShadow: "0 0 4px currentColor",
            }}
            initial={{
              scale: 0,
              x: 0,
              y: 0,
              opacity: 1,
            }}
            animate={{
              scale: [0, 1.5, 0],
              x: [0, x],
              y: [0, y],
              opacity: [1, 1, 0],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.06,
              ease: "easeOut",
            }}
          />
        );
      })}
    </AnimatePresence>
  );
}

export function ParticleButton({
  children,
  onClick,
  onSuccess,
  successDuration = 1200,
  className,
  ...props
}: ParticleButtonProps) {
  const [showParticles, setShowParticles] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);

    setShowParticles(true);

    setTimeout(() => {
      setShowParticles(false);
      onSuccess?.();
    }, successDuration);
  };

  return (
    <>
      {showParticles && <SuccessParticles buttonRef={buttonRef} />}
      <Button
        ref={buttonRef}
        onClick={handleClick}
        className={cn(
          "relative overflow-hidden",
          showParticles && "scale-95",
          "transition-transform duration-150",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        <Sparkles className="h-4 w-4 relative z-10" />
      </Button>
    </>
  );
}

export { type ParticleButtonProps };