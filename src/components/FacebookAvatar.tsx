import React, { useId } from "react"
import { motion } from "motion/react"

interface FacebookAvatarProps {
  gender: "male" | "female"
  className?: string
  size?: number | string
  isLead?: boolean
  borderColor?: string
  tagColor?: string
  badgeIcon?: React.ElementType
}

export const FacebookAvatar: React.FC<FacebookAvatarProps> = ({
  gender,
  className = "",
  size = 64,
  isLead = false,
  borderColor = "border-emerald-400",
  tagColor = "from-emerald-500 to-teal-700",
  badgeIcon: BadgeIcon,
}) => {
  const uniqueId = useId().replace(/:/g, "")

  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      {/* Outer Glow Ring with smooth hover morph */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className={`w-full h-full rounded-full p-[2.5px] border-2 ${borderColor} shadow-lg transition-all duration-300 ${
          isLead
            ? "shadow-amber-500/30 bg-gradient-to-tr from-amber-500/40 via-yellow-400/20 to-transparent"
            : "shadow-emerald-500/20 bg-gradient-to-tr from-emerald-500/30 via-teal-400/15 to-transparent"
        }`}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#1b2b34] via-[#0b1b22] to-[#040e13] flex items-center justify-center relative">
          {/* Subtle Facebook-like circular radial light behind the head */}
          <div
            className={`absolute inset-0 rounded-full opacity-70 ${
              isLead
                ? "bg-[radial-gradient(circle_at_50%_35%,rgba(245,184,56,0.3),transparent_70%)]"
                : gender === "male"
                ? "bg-[radial-gradient(circle_at_50%_35%,rgba(52,211,153,0.25),transparent_70%)]"
                : "bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.25),transparent_70%)]"
            }`}
          />

          {gender === "male" ? (
            /* Facebook Default Male Profile Silhouette */
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={`maleGrad-${uniqueId}`} x1="50" y1="12" x2="50" y2="98" gradientUnits="userSpaceOnUse">
                  <stop stopColor={isLead ? "#fffbeb" : "#f1f5f9"} />
                  <stop offset="0.45" stopColor={isLead ? "#fcd34d" : "#cbd5e1"} />
                  <stop offset="1" stopColor={isLead ? "#b45309" : "#64748b"} />
                </linearGradient>
                <filter id={`shadowMale-${uniqueId}`} x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
                </filter>
              </defs>

              {/* Head with neat hair contour */}
              <path
                d="M50 18 C39 18 32 26 32 38 C32 46 37 53 44 56 L44 61 C29 63 17 73 15 88 C15 93 17 97 22 97 L78 97 C83 97 85 93 85 88 C83 73 71 63 56 61 L56 56 C63 53 68 46 68 38 C68 26 61 18 50 18 Z"
                fill={`url(#maleGrad-${uniqueId})`}
                filter={`url(#shadowMale-${uniqueId})`}
              />
              {/* Subtle ear profile */}
              <circle cx="32.5" cy="38" r="2.5" fill={isLead ? "#fef08a" : "#cbd5e1"} opacity="0.8" />
              <circle cx="67.5" cy="38" r="2.5" fill={isLead ? "#fef08a" : "#cbd5e1"} opacity="0.8" />
            </svg>
          ) : (
            /* Facebook Default Female Profile Silhouette */
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={`femaleGrad-${uniqueId}`} x1="50" y1="12" x2="50" y2="98" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f8fafc" />
                  <stop offset="0.5" stopColor="#e2e8f0" />
                  <stop offset="1" stopColor="#64748b" />
                </linearGradient>
                <linearGradient id={`hairGrad-${uniqueId}`} x1="50" y1="12" x2="50" y2="65" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ffffff" />
                  <stop offset="0.6" stopColor="#e2e8f0" />
                  <stop offset="1" stopColor="#94a3b8" />
                </linearGradient>
                <filter id={`shadowFemale-${uniqueId}`} x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
                </filter>
              </defs>

              {/* Slender neck & curved feminine shoulders */}
              <path
                d="M24 97 C20 97 18 94 18 89 C19 76 30 65 44 63 L44 57 C42 55 40 52 39 48 L39 44 C36 44 35 39 36 36 C36 32 38 27 41 23 C44 19 47 17 50 17 C53 17 56 19 59 23 C62 27 64 32 64 36 C65 39 64 44 61 44 L61 48 C60 52 58 55 56 57 L56 63 C70 65 81 76 82 89 C82 94 80 97 76 97 Z"
                fill={`url(#femaleGrad-${uniqueId})`}
                filter={`url(#shadowFemale-${uniqueId})`}
              />

              {/* Distinctive Feminine Shoulder-Length Hair Waves cascading down */}
              <path
                d="M50 16 C41 16 34 22 32 30 C30 38 31 48 34 56 C35 59 38 61 40 59 C41 57 41 52 40 46 C39 40 40 33 43 28 C45 24 48 23 50 23 C52 23 55 24 57 28 C60 33 61 40 60 46 C59 52 59 57 60 59 C62 61 65 59 66 56 C69 48 70 38 68 30 C66 22 59 16 50 16 Z"
                fill={`url(#hairGrad-${uniqueId})`}
                opacity="0.95"
              />
            </svg>
          )}
        </div>
      </motion.div>

      {/* Floating Badge Icon in Corner */}
      {BadgeIcon && (
        <motion.div
          whileHover={{ scale: 1.25, rotate: 12 }}
          className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br ${tagColor} border border-white/60 flex items-center justify-center text-white shadow-md z-10`}
        >
          <BadgeIcon className="w-3.5 h-3.5" />
        </motion.div>
      )}
    </div>
  )
}
