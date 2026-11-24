import React, { useEffect, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

interface Ripple {
  id: number
  x: number
  y: number
}

export const Pointer3DEffect: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [isVisible, setIsVisible] = useState(false)

  // Direct mouse coordinates
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  // Smooth springs for buttery cursor tracking
  const springX = useSpring(mouseX, { stiffness: 350, damping: 28, mass: 0.6 })
  const springY = useSpring(mouseY, { stiffness: 350, damping: 28, mass: 0.6 })

  // Trailing lag spring for ambient outer aura
  const trailX = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 1 })
  const trailY = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 1 })

  // Handle pointer movement
  const handlePointerMove = useCallback((e: PointerEvent) => {
    setIsVisible(true)
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }, [mouseX, mouseY])

  // Handle click for 3D shockwave ripple
  const handlePointerDown = useCallback((e: PointerEvent) => {
    const newRipple: Ripple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    }
    setRipples((prev) => [...prev.slice(-3), newRipple])
  }, [])

  const handlePointerLeave = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerdown", handlePointerDown, { passive: true })
    window.addEventListener("pointerleave", handlePointerLeave)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerdown", handlePointerDown)
      window.removeEventListener("pointerleave", handlePointerLeave)
    }
  }, [handlePointerMove, handlePointerDown])

  // Remove ripples after animation completes
  useEffect(() => {
    if (ripples.length === 0) return
    const timer = setTimeout(() => {
      setRipples((prev) => prev.slice(1))
    }, 700)
    return () => clearTimeout(timer)
  }, [ripples])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden select-none">
      {/* 1. Large Ambient 3D Spotlight Beam - trailing cursor */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 540,
          height: 540,
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(52,211,153,0.14) 0%, rgba(245,184,56,0.08) 40%, rgba(5,26,30,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* 2. Focused 3D Specular Core Beam - tightly tracking cursor */}
      <motion.div
        className="absolute rounded-full pointer-events-none mix-blend-screen"
        style={{
          width: 180,
          height: 180,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.22) 0%, rgba(245,184,56,0.18) 30%, rgba(52,211,153,0.08) 60%, transparent 80%)",
          filter: "blur(18px)",
        }}
      />

      {/* 3. Micro Glowing Beacon Dot */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 8,
          height: 8,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "#fef08a",
          boxShadow: "0 0 16px 3px rgba(245,184,56,0.9), 0 0 30px 6px rgba(52,211,153,0.6)",
        }}
      />

      {/* 4. Click 3D Shockwave Ripple Effect */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ scale: 0.2, opacity: 0.75 }}
          animate={{ scale: 3.5, opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="absolute rounded-full pointer-events-none border border-amber-400/60 shadow-[0_0_20px_rgba(245,184,56,0.5)]"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 70,
            height: 70,
            marginLeft: -35,
            marginTop: -35,
            background:
              "radial-gradient(circle, rgba(245,184,56,0.2) 0%, rgba(52,211,153,0.1) 60%, transparent 100%)",
          }}
        />
      ))}
    </div>
  )
}
