import React from "react"
import { motion } from "motion/react"

export const CanvaAtmosphere: React.FC<{ theme?: "emerald-gold" | "crimson-gold" }> = ({
  theme = "emerald-gold",
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Deep Atmospheric Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020b0d] via-[#051a1e] to-[#01080a]" />

      {/* Warm Golden / Emerald Radial Spotlight */}
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-amber-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl opacity-70" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl opacity-60" />

      {/* Floating Sparkle Dots / Golden Stars */}
      {[
        { top: "12%", left: "18%", size: 3, delay: 0 },
        { top: "25%", left: "45%", size: 4, delay: 1.2 },
        { top: "60%", left: "15%", size: 3, delay: 0.8 },
        { top: "18%", left: "75%", size: 5, delay: 1.8 },
        { top: "45%", left: "85%", size: 4, delay: 0.4 },
        { top: "75%", left: "55%", size: 3, delay: 2.1 },
        { top: "35%", left: "30%", size: 2, delay: 1.5 },
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
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Decorative Traditional / Luxury Wave Pattern Border at Bottom (Inspired by Image 2) */}
      <div className="absolute bottom-0 left-0 right-0 h-10 flex items-end opacity-40">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-full text-amber-500/30"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,32 C120,48 240,16 360,32 C480,48 600,16 720,32 C840,48 960,16 1080,32 C1200,48 1320,16 1440,32 L1440,60 L0,60 Z"
            fill="currentColor"
          />
          <path
            d="M0,45 C120,55 240,35 360,45 C480,55 600,35 720,45 C840,55 960,35 1080,45 C1200,55 1320,35 1440,45 L1440,60 L0,60 Z"
            fill="rgba(245, 184, 56, 0.15)"
          />
        </svg>
      </div>

      {/* Subtle Golden Cloud Illustration Motif on Right (Like Image 2) */}
      <div className="absolute top-10 right-4 md:right-16 w-80 md:w-96 opacity-25">
        <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 70 C40 50, 60 40, 80 50 C90 30, 130 30, 140 50 C160 45, 180 60, 175 80 C185 95, 170 110, 150 110 L50 110 C30 110, 20 95, 30 80 C25 75, 30 70, 40 70 Z"
            fill="url(#cloudGrad)"
            stroke="rgba(245, 184, 56, 0.5)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="cloudGrad" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5b838" stopOpacity="0.4" />
              <stop offset="1" stopColor="#09292f" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
