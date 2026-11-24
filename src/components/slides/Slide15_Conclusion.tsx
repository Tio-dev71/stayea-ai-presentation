import React from "react"
import { motion } from "motion/react"
import { Sparkles, MessageCircleQuestion, Bot } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide15_Conclusion: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs font-heading font-bold mb-3 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>TỔNG KẾT BÁO CÁO ĐỒ ÁN 1</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black gold-gradient-text-pure tracking-tight">
          Cảm Ơn Quý Thầy Cô!
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-2">
          Nhóm sinh viên thực hiện đề tài rất mong nhận được những câu hỏi và ý kiến đóng góp quý báu từ Hội đồng chấm Đồ án.
        </p>
      </div>

      {/* Main Q&A Callout (Matching Canva Luxury Royal Box) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 max-w-3xl w-full mx-auto p-8 rounded-3xl bg-gradient-to-b from-[#082a30]/90 to-[#031518]/95 border border-amber-400/50 shadow-2xl backdrop-blur-xl text-center space-y-5"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 mx-auto flex items-center justify-center text-black shadow-xl shadow-amber-500/30">
          <MessageCircleQuestion className="w-9 h-9" />
        </div>

        <div>
          <span className="text-xs font-heading uppercase text-amber-300 tracking-widest font-bold block mb-1">
            PHIÊN HỎI ĐÁP & PHẢN BIỆN
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Q & A (Hỏi & Đáp)
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Đề tài <strong>"Chatbot AI Chăm Sóc Khách Hàng Nền Tảng STAYEA"</strong> sẵn sàng trình diễn trực tiếp các kịch bản kiểm thử API, Dynamic Catalog Injection và luồng Function Calling theo yêu cầu của Hội đồng.
        </p>

        {/* 3 Pillars Summary Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs">
            <span className="text-amber-300 font-heading font-bold block">AI 9router Gateway</span>
            <span className="text-[10px] text-slate-400">Độc lập & Bảo mật Token</span>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs">
            <span className="text-emerald-300 font-heading font-bold block">Dynamic Catalog</span>
            <span className="text-[10px] text-slate-400">Chống Ảo Giác 100%</span>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs">
            <span className="text-cyan-300 font-heading font-bold block">Human-in-the-Loop</span>
            <span className="text-[10px] text-slate-400">An Toàn Nghiệp Vụ</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
