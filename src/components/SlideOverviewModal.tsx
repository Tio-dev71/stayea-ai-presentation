import React from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, LayoutGrid, Check } from "lucide-react"
import { SLIDES } from "../data/slidesData"

interface SlideOverviewModalProps {
  isOpen: boolean
  onClose: () => void
  currentIndex: number
  onSelectSlide: (index: number) => void
}

export const SlideOverviewModal: React.FC<SlideOverviewModalProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onSelectSlide,
}) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-[#051c20] border border-emerald-500/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 py-4 bg-[#08282c] border-b border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <LayoutGrid className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-white text-base">Tổng Quan Tất Cả Các Slide ({SLIDES.length} Slides)</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Grid of Slides */}
          <div className="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {SLIDES.map((slide, idx) => {
              const isCurrent = idx === currentIndex
              return (
                <button
                  key={slide.id}
                  onClick={() => {
                    onSelectSlide(idx)
                    onClose()
                  }}
                  className={`group text-left p-3.5 rounded-2xl border transition-all flex flex-col justify-between h-40 ${
                    isCurrent
                      ? "bg-emerald-800/50 border-emerald-400 shadow-lg shadow-emerald-950/80 ring-2 ring-emerald-400/50"
                      : "bg-[#082226] border-emerald-500/20 hover:border-emerald-400/60 hover:bg-[#0c3136]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded ${
                        isCurrent
                          ? "bg-emerald-400 text-[#041517]"
                          : "bg-emerald-950/80 text-emerald-300 border border-emerald-500/30"
                      }`}
                    >
                      {String(slide.number).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">{slide.category}</span>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-white line-clamp-2 mb-1 group-hover:text-emerald-300 transition-colors">
                      {slide.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 line-clamp-2 leading-snug">
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className="text-[10px] text-emerald-400 flex items-center justify-between pt-1 border-t border-white/5">
                    <span>{isCurrent ? "Đang chọn ✓" : "Nhảy tới"}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Footer note */}
          <div className="px-6 py-3 bg-[#041517] border-t border-emerald-500/20 text-xs text-slate-400 flex items-center justify-between">
            <span>Phím tắt: Bấm <strong>O</strong> để đóng/mở tổng quan slide bất kỳ lúc nào</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs"
            >
              Đóng
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
