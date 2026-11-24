import React from "react"
import { motion } from "motion/react"

export const CanvaAtmosphere: React.FC<{ theme?: "emerald-gold" | "crimson-gold" }> = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Deep Atmospheric Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020b0d] via-[#05181c] to-[#01080a]" />

      {/* 3D Ambient Aurora Lights - Spanning Edge-to-Edge */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.55, 0.75, 0.55],
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 right-1/4 w-[750px] h-[750px] bg-gradient-to-br from-amber-500/15 via-emerald-500/10 to-transparent rounded-full blur-[130px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.65, 0.4],
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-36 -left-28 w-[700px] h-[700px] bg-emerald-600/15 via-teal-500/10 to-transparent rounded-full blur-[140px]"
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [0.95, 1.1, 0.95],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px]"
      />

      {/* 3D Floating Stardust Particles with Parallax Depth */}
      {[
        { top: "8%", left: "12%", size: 3, delay: 0, depth: 1 },
        { top: "20%", left: "42%", size: 4, delay: 1.2, depth: 2 },
        { top: "65%", left: "8%", size: 3, delay: 0.8, depth: 1 },
        { top: "15%", left: "78%", size: 5, delay: 1.8, depth: 3 },
        { top: "42%", left: "88%", size: 4, delay: 0.4, depth: 2 },
        { top: "78%", left: "52%", size: 3, delay: 2.1, depth: 1 },
        { top: "32%", left: "24%", size: 2, delay: 1.5, depth: 1 },
        { top: "85%", left: "82%", size: 4, delay: 2.8, depth: 2 },
        { top: "50%", left: "65%", size: 3, delay: 3.2, depth: 1 },
        { top: "10%", left: "92%", size: 3, delay: 0.5, depth: 1 },
      ].map((star, i) => (
        <motion.div
          key={i}
          className="sparkle-dot"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.15, 0.95, 0.15],
            scale: [0.8, 1.5, 0.8],
            y: [0, -10 * star.depth, 0],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle Golden Cloud Motif on Top Right */}
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 right-6 md:right-16 w-80 md:w-96 opacity-25"
      >
        <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 70 C40 50, 60 40, 80 50 C90 30, 130 30, 140 50 C160 45, 180 60, 175 80 C185 95, 170 110, 150 110 L50 110 C30 110, 20 95, 30 80 C25 75, 30 70, 40 70 Z"
            fill="url(#cloudGrad)"
            stroke="rgba(245, 184, 56, 0.45)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="cloudGrad" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5b838" stopOpacity="0.35" />
              <stop offset="1" stopColor="#09292f" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Decorative Wave Motif at Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-12 flex items-end opacity-35">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-full text-amber-500/25"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,32 C120,48 240,16 360,32 C480,48 600,16 720,32 C840,48 960,16 1080,32 C1200,48 1320,16 1440,32 L1440,60 L0,60 Z"
            fill="currentColor"
          />
          <path
            d="M0,45 C120,55 240,35 360,45 C480,55 600,35 720,45 C840,55 960,35 1080,45 C1200,55 1320,35 1440,45 L1440,60 L0,60 Z"
            fill="rgba(52, 211, 153, 0.15)"
          />
        </svg>
      </div>
    </div>
  )
}
