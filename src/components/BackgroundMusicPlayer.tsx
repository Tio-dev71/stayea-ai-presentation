import React, { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Volume2, VolumeX, Music, Play, Pause } from "lucide-react"

interface BackgroundMusicPlayerProps {
  className?: string
  compact?: boolean
}

export const BackgroundMusicPlayer: React.FC<BackgroundMusicPlayerProps> = ({
  className = "",
  compact = false,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [volume, setVolume] = useState<number>(0.5)
  const [hasInteracted, setHasInteracted] = useState<boolean>(false)
  const [showTooltip, setShowTooltip] = useState<boolean>(false)

  // Start playback
  const startAudio = useCallback(() => {
    if (!audioRef.current) return

    audioRef.current.volume = volume
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true)
        setHasInteracted(true)
      })
      .catch((err) => {
        // Autoplay policy prevented playback, wait for user gesture
        console.log("Autoplay waiting for user interaction:", err)
        setIsPlaying(false)
      })
  }, [volume])

  // Try auto-play on mount, and bind first-interaction listeners
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.volume = volume

    // Try auto-play immediately
    audio
      .play()
      .then(() => {
        setIsPlaying(true)
        setHasInteracted(true)
      })
      .catch(() => {
        // Fallback: wait for the first click / keypress anywhere on the page
        const handleFirstInteraction = () => {
          if (audioRef.current) {
            audioRef.current
              .play()
              .then(() => {
                setIsPlaying(true)
                setHasInteracted(true)
              })
              .catch(() => {})
          }
          window.removeEventListener("pointerdown", handleFirstInteraction)
          window.removeEventListener("keydown", handleFirstInteraction)
          window.removeEventListener("click", handleFirstInteraction)
        }

        window.addEventListener("pointerdown", handleFirstInteraction, { once: true })
        window.addEventListener("keydown", handleFirstInteraction, { once: true })
        window.addEventListener("click", handleFirstInteraction, { once: true })
      })

    return () => {
      audio.pause()
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
          setHasInteracted(true)
        })
        .catch(() => {})
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!audioRef.current) return

    if (isMuted) {
      audioRef.current.muted = false
      setIsMuted(false)
      if (!isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true))
      }
    } else {
      audioRef.current.muted = true
      setIsMuted(true)
    }
  }

  return (
    <div className={`relative flex items-center ${className}`}>
      {/* HTML5 Audio element pointing to /images/backgroundmusic.m4a */}
      <audio
        ref={audioRef}
        src="/images/backgroundmusic.m4a"
        preload="auto"
        loop
        playsInline
      />

      {compact ? (
        // Minimalist button suitable for the floating toolbar
        <button
          onClick={togglePlay}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`relative p-1.5 rounded-full transition-all flex items-center gap-1.5 group ${
            isPlaying
              ? "bg-emerald-500/25 text-emerald-300 border border-emerald-400/50 shadow-[0_0_12px_rgba(52,211,153,0.35)]"
              : "hover:bg-white/15 text-slate-400 hover:text-white"
          }`}
          title={isPlaying ? "Dừng nhạc nền" : "Bật nhạc nền STAYEA"}
          aria-label="Nhạc nền"
        >
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-3.5 px-0.5">
              {[0.4, 0.9, 0.5, 0.7].map((heightScale, i) => (
                <motion.span
                  key={i}
                  className="w-[2px] bg-emerald-400 rounded-full"
                  animate={{
                    height: isPlaying ? [4, 14 * heightScale + 2, 4] : 4,
                  }}
                  transition={{
                    duration: 0.6 + i * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          ) : (
            <Music className="w-3.5 h-3.5" />
          )}

          {/* Floating Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-black/90 backdrop-blur-md border border-emerald-500/40 text-[11px] font-medium text-emerald-200 whitespace-nowrap shadow-xl pointer-events-none z-50 flex items-center gap-1.5"
              >
                <span>{isPlaying ? "🎵 Nhạc nền: Đang phát (Bấm dừng)" : "🔇 Nhạc nền: Đã tắt (Bấm phát)"}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      ) : (
        // Luxury Floating Glass Card for Top Bar or Corner
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-xl border border-emerald-500/30 hover:border-emerald-400/60 transition-all shadow-xl cursor-pointer select-none"
          onClick={togglePlay}
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
            {isPlaying ? (
              <div className="flex items-end gap-0.5 h-2.5">
                {[0.4, 0.9, 0.6].map((scale, i) => (
                  <motion.span
                    key={i}
                    className="w-[1.5px] bg-emerald-300 rounded-full"
                    animate={{
                      height: isPlaying ? [3, 10 * scale, 3] : 3,
                    }}
                    transition={{
                      duration: 0.5 + i * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            ) : (
              <Play className="w-2.5 h-2.5 fill-slate-300" />
            )}
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[10px] font-heading font-semibold text-emerald-300 uppercase tracking-wider leading-none">
              STAYEA Music
            </span>
            <span className="text-[9px] text-slate-400 leading-tight">
              {isPlaying ? "Looping" : "Paused"}
            </span>
          </div>

          <button
            onClick={toggleMute}
            className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white ml-1"
            title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
          >
            {isMuted ? (
              <VolumeX className="w-3 h-3 text-red-400" />
            ) : (
              <Volume2 className="w-3 h-3 text-emerald-400" />
            )}
          </button>
        </motion.div>
      )}
    </div>
  )
}
