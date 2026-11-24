import React, { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import confetti from "canvas-confetti"
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Maximize2,
  Minimize2,
  Mic,
  RotateCcw,
  Sparkles,
  Bot,
  Play,
} from "lucide-react"

import { SLIDES } from "../data/slidesData"
import { SlideOverviewModal } from "./SlideOverviewModal"
import { SpeakerNotesModal } from "./SpeakerNotesModal"
import { BackgroundMusicPlayer } from "./BackgroundMusicPlayer"
import { Pointer3DEffect } from "./Pointer3DEffect"
import { CanvaAtmosphere } from "./CanvaAtmosphere"

export const SlideEngine: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const [isOverviewOpen, setIsOverviewOpen] = useState(false)
  const [isNotesOpen, setIsNotesOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showToolbar, setShowToolbar] = useState(true)

  const currentSlide = SLIDES[currentIndex]
  const totalSlides = SLIDES.length

  const goToSlide = useCallback(
    (newIndex: number) => {
      if (newIndex < 0 || newIndex >= totalSlides) return
      setDirection(newIndex > currentIndex ? "next" : "prev")
      setCurrentIndex(newIndex)
    },
    [currentIndex, totalSlides]
  )

  const nextSlide = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      setDirection("next")
      setCurrentIndex((prev) => prev + 1)
    }
  }, [currentIndex, totalSlides])

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      setDirection("prev")
      setCurrentIndex((prev) => prev - 1)
    }
  }, [currentIndex])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
      setIsFullscreen(true)
    } else {
      document.exitFullscreen().catch(() => {})
      setIsFullscreen(false)
    }
  }

  // Trigger confetti when reaching Slide 15
  useEffect(() => {
    if (currentIndex === totalSlides - 1) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#ffd47a", "#34d399", "#f5b838", "#ffffff"],
        })
      } catch {
        // ignore
      }
    }
  }, [currentIndex, totalSlides])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault()
          nextSlide()
          break
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault()
          prevSlide()
          break
        case "Home":
          e.preventDefault()
          goToSlide(0)
          break
        case "End":
          e.preventDefault()
          goToSlide(totalSlides - 1)
          break
        case "o":
        case "O":
          e.preventDefault()
          setIsOverviewOpen((prev) => !prev)
          break
        case "s":
        case "S":
          e.preventDefault()
          setIsNotesOpen((prev) => !prev)
          break
        case "f":
        case "F":
          e.preventDefault()
          toggleFullscreen()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, goToSlide, totalSlides])

  // PowerPoint / Keynote Morph Transition:
  // Slide container coordinates child item exits and entrances while keeping the canvas level and stable
  const slideVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
    exit: {
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: [0.32, 0, 0.67, 0] as const,
      },
    },
  }

  const handleCanvasClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (isOverviewOpen || isNotesOpen) return
      const target = e.target as HTMLElement | null
      if (
        target?.closest(
          'button, a, input, textarea, select, [role="button"], [data-no-slide-nav]'
        )
      ) {
        return
      }
      // Ignore if user is selecting text
      const selection = window.getSelection()?.toString()
      if (selection && selection.length > 0) return

      const rect = e.currentTarget.getBoundingClientRect()
      const isRightHalf = e.clientX >= rect.left + rect.width / 2
      if (isRightHalf) {
        nextSlide()
      } else {
        prevSlide()
      }
    },
    [isOverviewOpen, isNotesOpen, nextSlide, prevSlide]
  )

  const SlideComponent = currentSlide.component

  return (
    <div className="relative w-screen h-screen w-[100vw] h-[100vh] h-[100dvh] bg-[#020b0d] text-slate-100 overflow-hidden select-none m-0 p-0 flex flex-col justify-between">
      {/* Permanent Fullscreen Atmospheric Canvas (Aurora, Stardust, Clouds, Waves) */}
      <CanvaAtmosphere isRoot={true} />

      {/* Top Slide Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 h-[3px] bg-black/40">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-300 shadow-[0_0_12px_rgba(245,184,56,0.8)]"
          animate={{
            width: `${((currentIndex + 1) / totalSlides) * 100}%`,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Interactive 3D Cursor Spotlight & Ripple (Pointer Events None) */}
      <Pointer3DEffect />

      {/* Full-bleed Presentation Canvas (100% Edge-to-Edge Widescreen - Stable Flat Background) */}
      <main
        onClick={handleCanvasClick}
        className="relative w-full h-full flex-1 overflow-hidden m-0 p-0 flex flex-col z-10"
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full flex-1 flex flex-col overflow-hidden will-change-transform"
            style={{
              transformOrigin: "center center",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <SlideComponent isActive={true} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Canva-style Minimalist Controls Dock (Bottom Right / Center) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-xl border border-amber-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-xs text-slate-200 transition-all hover:bg-black/85">
        {/* Prev */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="p-1.5 rounded-full hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-transparent text-amber-300 transition-all active:scale-90"
          title="Slide trước (Phím ⬅)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide Counter */}
        <button
          onClick={() => setIsOverviewOpen(true)}
          className="px-2.5 py-1 rounded-full font-mono font-bold text-xs tracking-wider flex items-center gap-1 hover:text-amber-300 transition-colors"
          title="Bấm để xem danh sách slide (Phím O)"
        >
          <span className="text-amber-400">{String(currentIndex + 1).padStart(2, "0")}</span>
          <span className="text-slate-500">/</span>
          <span className="text-slate-400">{String(totalSlides).padStart(2, "0")}</span>
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          disabled={currentIndex === totalSlides - 1}
          className="p-1.5 rounded-full hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-transparent text-amber-300 transition-all active:scale-90"
          title="Slide tiếp theo (Phím ➔ hoặc Space)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <span className="w-px h-4 bg-white/20 mx-1" />

        {/* Quick jump to Slide 13 Demo */}
        <button
          onClick={() => goToSlide(12)}
          className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-[11px] font-semibold transition-all active:scale-95"
          title="Xem Demo Widget trực tiếp (Slide 13)"
        >
          <Play className="w-3 h-3 fill-amber-300" />
          <span className="hidden sm:inline">Demo</span>
        </button>

        {/* Overview button */}
        <button
          onClick={() => setIsOverviewOpen(true)}
          className="p-1.5 rounded-full hover:bg-white/15 text-slate-300 hover:text-white transition-all"
          title="Lưới Slide (Phím O)"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
        </button>

        {/* Speaker Notes */}
        <button
          onClick={() => setIsNotesOpen(!isNotesOpen)}
          className={`p-1.5 rounded-full transition-all ${
            isNotesOpen
              ? "bg-amber-500 text-black font-bold"
              : "hover:bg-white/15 text-slate-300 hover:text-white"
          }`}
          title="Ghi chú người thuyết trình (Phím S)"
        >
          <Mic className="w-3.5 h-3.5" />
        </button>

        {/* Background Music Player */}
        <BackgroundMusicPlayer compact={true} />

        {/* Fullscreen */}
        <button
          onClick={toggleFullscreen}
          className="p-1.5 rounded-full hover:bg-white/15 text-slate-300 hover:text-white transition-all"
          title="Toàn màn hình (Phím F)"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Overview Modal */}
      <SlideOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        currentIndex={currentIndex}
        onSelectSlide={goToSlide}
      />

      {/* Speaker Notes Modal */}
      <SpeakerNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentSlide={currentSlide}
      />
    </div>
  )
}
