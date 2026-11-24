import React from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, Mic, CheckCircle2, HelpCircle, BookOpen } from "lucide-react"
import { SlideData } from "../types/presentation"

interface SpeakerNotesModalProps {
  isOpen: boolean
  onClose: () => void
  currentSlide: SlideData
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
}) => {
  if (!isOpen) return null

  const { speakerNotes } = currentSlide

  return (
    <AnimatePresence>
      <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[460px] bg-[#051c20]/95 backdrop-blur-xl border-l border-emerald-500/30 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 bg-[#08282c] border-b border-emerald-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-400/30">
              <Mic className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Ghi Chú Thuyết Trình (Presenter Notes)</h3>
              <p className="text-[11px] text-emerald-300 font-mono">
                Slide {currentSlide.number}: {currentSlide.title}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 text-xs leading-relaxed text-slate-200">
          {/* Section 1: Speech Script */}
          <div className="p-4 rounded-2xl bg-[#082226] border border-emerald-500/20 space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Lời thoại gợi ý (Nói tự tin, dõng dạc):
            </span>
            <p className="text-slate-100 text-xs italic leading-relaxed">
              "{speakerNotes.script}"
            </p>
          </div>

          {/* Section 2: Key Points */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block">
              Ý chính cần nhấn mạnh (Key Talking Points):
            </span>
            <div className="space-y-2">
              {speakerNotes.keyPoints.map((kp, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-700/30 flex items-start gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">{kp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: FAQ / Hội đồng phản biện */}
          {speakerNotes.faq && speakerNotes.faq.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-teal-400 block">
                Câu hỏi Hội đồng hay hỏi & Cách trả lời:
              </span>
              <div className="space-y-2.5">
                {speakerNotes.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#031518] border border-teal-500/20 space-y-1.5"
                  >
                    <div className="font-semibold text-amber-300 flex items-start gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{item.q}</span>
                    </div>
                    <p className="text-slate-300 pl-5 text-[11px] leading-relaxed">
                      💡 {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-[#031416] border-t border-emerald-500/20 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Phím tắt: Bấm <strong>S</strong> để đóng/mở ghi chú</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium"
          >
            Đóng
          </button>
        </div>
      </div>
    </AnimatePresence>
  )
}
