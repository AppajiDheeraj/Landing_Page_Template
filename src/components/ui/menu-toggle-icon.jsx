"use client";

import { motion } from "motion/react";

export function MenuToggleIcon({ open, className, duration = 200, ...props }) {
  const variant = open ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  const lineProps = {
    stroke: "currentColor",
    strokeWidth: "1.5",
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition: { duration: duration / 1000 },
  };

  return (
    <svg
      viewBox="0 0 16 12"
      overflow="visible"
      preserveAspectRatio="none"
      width="16"
      height="12"
      className={className}
      {...props}
    >
      <motion.line x1="0" x2="16" y1="0" y2="0" variants={top} {...lineProps} />
      <motion.line x1="0" x2="16" y1="6" y2="6" variants={center} {...lineProps} />
      <motion.line x1="0" x2="16" y1="12" y2="12" variants={bottom} {...lineProps} />
    </svg>
  );
}
