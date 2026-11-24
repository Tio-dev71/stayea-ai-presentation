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

export const SlideEngine: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const [isOverviewOpen, setIsOverviewOpen] = useState(false)
  const [isNotesOpen, setIsNotesOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const currentSlide = SLIDES[currentIndex]
  const totalSlides = SLIDES.length

  const goToSlide = useCallback((newIndex: number) => {
    if (newIndex < 0 || newIndex >= totalSlides) return
    setDirection(newIndex > currentIndex ? "next" : "prev")
    setCurrentIndex(newIndex)
  }, [currentIndex, totalSlides])

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
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#3aa6b3", "#fbbf24", "#10b981", "#ffffff"],
        })
      } catch {
        // ignore
      }
    }
  }, [currentIndex, totalSlides])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
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

  // Motion variants for slide transition
  const slideVariants = {
    initial: (dir: "next" | "prev") => ({
      x: dir === "next" ? 60 : -60,
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)",
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: "next" | "prev") => ({
      x: dir === "next" ? -60 : 60,
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)",
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  }

  const SlideComponent = currentSlide.component

  return (
    <div className="relative w-screen h-screen bg-[#041517] text-slate-100 flex flex-col justify-between overflow-hidden select-none">
      {/* Top Slide Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-40 h-1 bg-[#062024]">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 shadow-md shadow-emerald-400/50"
          animate={{
            width: `${((currentIndex + 1) / totalSlides) * 100}%`,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>

      {/* Main Slide Container */}
      <main className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center p-3 sm:p-6 md:p-8">
        <div className="w-full h-full max-w-7xl max-h-[92vh] glass-panel rounded-3xl shadow-2xl relative overflow-hidden flex flex-col">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentSlide.id}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full flex-1"
            >
              <SlideComponent isActive={true} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Floating Bottom Control Bar */}
      <footer className="relative z-40 px-6 py-3 bg-[#041618]/90 backdrop-blur-md border-t border-emerald-500/20 flex items-center justify-between text-xs text-slate-300">
        {/* Left: Branding & Current Slide Name */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-extrabold tracking-wide text-white">STAYEA AI</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-slate-400 hidden sm:inline max-w-xs truncate">
            {currentSlide.title}
          </span>
        </div>

        {/* Center: Slide Number and Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-2 rounded-xl bg-[#082226] hover:bg-[#0c3b40] disabled:opacity-30 disabled:hover:bg-[#082226] text-white border border-emerald-500/20 transition-all active:scale-95"
            title="Slide trước (Phím ⬅)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            onClick={() => setIsOverviewOpen(true)}
            className="px-3.5 py-1.5 rounded-xl bg-[#082226] border border-emerald-500/30 text-white font-mono text-xs font-semibold cursor-pointer hover:border-emerald-400 hover:bg-[#0c3b40] transition-all flex items-center gap-1.5"
            title="Mở danh sách slide (Phím O)"
          >
            <span className="text-emerald-400">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">{String(totalSlides).padStart(2, "0")}</span>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentIndex === totalSlides - 1}
            className="p-2 rounded-xl bg-[#082226] hover:bg-[#0c3b40] disabled:opacity-30 disabled:hover:bg-[#082226] text-white border border-emerald-500/20 transition-all active:scale-95"
            title="Slide kế tiếp (Phím ➔ hoặc Space)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Tools & Utilities */}
        <div className="flex items-center gap-2">
          {/* Quick jump to Slide 12 Demo */}
          <button
            onClick={() => goToSlide(11)}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-[11px] font-semibold transition-all active:scale-95"
            title="Nhảy nhanh tới Slide Demo tương tác"
          >
            <Play className="w-3 h-3 fill-amber-300" />
            <span>Live Demo</span>
          </button>

          {/* Overview Grid button */}
          <button
            onClick={() => setIsOverviewOpen(true)}
            className={`p-2 rounded-xl border transition-all ${
              isOverviewOpen
                ? "bg-emerald-600 text-white border-emerald-400"
                : "bg-[#082226] text-slate-300 hover:text-white hover:bg-[#0c3b40] border-emerald-500/20"
            }`}
            title="Tổng quan tất cả Slide (Phím O)"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>

          {/* Speaker Notes Toggle */}
          <button
            onClick={() => setIsNotesOpen(!isNotesOpen)}
            className={`p-2 rounded-xl border transition-all ${
              isNotesOpen
                ? "bg-amber-600 text-white border-amber-400"
                : "bg-[#082226] text-slate-300 hover:text-white hover:bg-[#0c3b40] border-emerald-500/20"
            }`}
            title="Ghi chú người thuyết trình (Phím S)"
          >
            <Mic className="w-4 h-4" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-xl bg-[#082226] text-slate-300 hover:text-white hover:bg-[#0c3b40] border border-emerald-500/20 transition-all"
            title="Toàn màn hình (Phím F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </footer>

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
