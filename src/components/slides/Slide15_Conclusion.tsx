import React from "react"
import { motion } from "motion/react"
import { Sparkles, MessageCircleQuestion, Bot } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide15_Conclusion: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs sm:text-sm font-heading font-bold mb-3 shadow-xl">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>TỔNG KẾT BÁO CÁO ĐỒ ÁN 1</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black gold-gradient-text-pure tracking-tight">
          Cảm Ơn Quý Thầy Cô!
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-slate-200 mt-2.5">
          Nhóm sinh viên thực hiện đề tài rất mong nhận được những câu hỏi và ý kiến đóng góp quý báu từ Hội đồng chấm Đồ án.
        </p>
      </div>

      {/* Main Q&A Callout (Large, Royal Canva Box) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 max-w-4xl w-full mx-auto p-8 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-b from-[#082a30]/95 to-[#031518]/98 border-2 border-amber-400/50 shadow-2xl backdrop-blur-2xl text-center space-y-6"
      >
        <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-amber-600 mx-auto flex items-center justify-center text-black shadow-2xl shadow-amber-500/40 p-4">
          <MessageCircleQuestion className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        <div>
          <span className="text-xs sm:text-sm font-heading uppercase text-amber-300 tracking-widest font-bold block mb-1">
            PHIÊN HỎI ĐÁP & PHẢN BIỆN
          </span>
          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Q & A (Hỏi & Đáp)
          </h3>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Đề tài <strong>"Chatbot AI Chăm Sóc Khách Hàng Nền Tảng STAYEA"</strong> sẵn sàng trình diễn trực tiếp các kịch bản kiểm thử API, Dynamic Catalog Injection và luồng Function Calling theo yêu cầu của Hội đồng.
        </p>

        {/* 3 Pillars Summary Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
            <span className="text-amber-300 font-heading font-bold text-sm sm:text-base block mb-1">AI 9router Gateway</span>
            <span className="text-xs sm:text-sm text-slate-300">Độc lập & Bảo mật Token</span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
            <span className="text-emerald-300 font-heading font-bold text-sm sm:text-base block mb-1">Dynamic Catalog</span>
            <span className="text-xs sm:text-sm text-slate-300">Chống Ảo Giác 100%</span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 text-center">
            <span className="text-cyan-300 font-heading font-bold text-sm sm:text-base block mb-1">Human-in-the-Loop</span>
            <span className="text-xs sm:text-sm text-slate-300">An Toàn Nghiệp Vụ</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
