import React from "react"
import { motion, Variants } from "motion/react"

/**
 * PowerPoint / Keynote Morph Transition Variants
 *
 * Yêu cầu: "các item riêng lẻ sẽ đi ra trái phải trên dưới ( tùy vào các item )
 * sang slide tiếp thì các item tiếp theo sẽ từ vị trí các item thoát ra trước đó di chuyển vào."
 *
 * - Item trên đỉnh (Header, Tagline): Đi lên trên (y: -70) khi thoát; vào từ trên (y: -70 -> 0) khi tới.
 * - Item bên trái (Title, Left Column, Pain Points): Đi sang trái (x: -110) khi thoát; vào từ trái khi tới.
 * - Item bên phải (Preview Card, Showcase, Diagrams): Đi sang phải (x: 110) khi thoát; vào từ phải khi tới.
 * - Item dưới cùng (Metrics, Stats, Footers): Đi xuống dưới (y: 70) khi thoát; vào từ dưới khi tới.
 */

const springPhysics = {
  type: "spring" as const,
  stiffness: 230,
  damping: 24,
  mass: 0.8,
}

const exitEasing = {
  duration: 0.3,
  ease: [0.32, 0, 0.67, 0] as const,
}

export const morphTopVariants: Variants = {
  initial: { opacity: 0, y: -70, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: springPhysics,
  },
  exit: {
    opacity: 0,
    y: -70,
    filter: "blur(8px)",
    transition: exitEasing,
  },
}

export const morphBottomVariants: Variants = {
  initial: { opacity: 0, y: 70, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: springPhysics,
  },
  exit: {
    opacity: 0,
    y: 70,
    filter: "blur(8px)",
    transition: exitEasing,
  },
}

export const morphLeftVariants: Variants = {
  initial: { opacity: 0, x: -110, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: springPhysics,
  },
  exit: {
    opacity: 0,
    x: -110,
    filter: "blur(8px)",
    transition: exitEasing,
  },
}

export const morphRightVariants: Variants = {
  initial: { opacity: 0, x: 110, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: springPhysics,
  },
  exit: {
    opacity: 0,
    x: 110,
    filter: "blur(8px)",
    transition: exitEasing,
  },
}

export const morphCenterVariants: Variants = {
  initial: { opacity: 0, scale: 0.88, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: springPhysics,
  },
  exit: {
    opacity: 0,
    scale: 0.88,
    filter: "blur(8px)",
    transition: exitEasing,
  },
}
