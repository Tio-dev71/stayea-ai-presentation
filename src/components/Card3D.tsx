import React, { useRef, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"

interface Card3DProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  glare?: boolean
  onClick?: () => void
  style?: React.CSSProperties
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = "",
  intensity = 15,
  glare = true,
  onClick,
  style = {},
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for smooth 3D tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for buttery-smooth return
  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 25 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [intensity, -intensity])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-intensity, intensity])

  // Glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }, [x, y])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        ...style,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative [transform-style:preserve-3d] transition-shadow duration-300 ${className}`}
    >
      {children}

      {/* Dynamic Specular Glare Effect */}
      {glare && isHovered && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute -inset-full w-[300%] h-[300%] rounded-full opacity-30 blur-2xl pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(245,184,56,0.15) 35%, transparent 70%)",
              left: glareX,
              top: glareY,
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>
      )}
    </motion.div>
  )
}
