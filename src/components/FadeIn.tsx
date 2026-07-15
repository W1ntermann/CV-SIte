"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ElementType, ReactNode } from "react";

interface FadeInProps extends MotionProps {
  as?: ElementType;
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
  /** When true, animates immediately on mount instead of waiting for scroll into view. Use for above-the-fold content. */
  animateOnMount?: boolean;
}

export function FadeIn({
  as = "div",
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  animateOnMount = false,
  ...rest
}: FadeInProps) {
  const Comp = motion.create(as as ElementType);
  const animateProps = animateOnMount
    ? {
        initial: { opacity: 0, x, y },
        animate: { opacity: 1, x: 0, y: 0 },
      }
    : {
        initial: { opacity: 0, x, y },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, margin: "50px", amount: 0 },
      };
  return (
    <Comp
      {...animateProps}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Comp>
  );
}