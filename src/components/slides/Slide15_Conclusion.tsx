import React from "react"
import { motion } from "motion/react"
import { Sparkles, MessageCircleQuestion, Bot } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import { morphTopVariants, morphCenterVariants } from "../MorphTransition"

export const Slide15_Conclusion: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-7 sm:gap-9 p-6 sm:p-10 md:p-12 lg:p-14 pb-20 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <motion.div
        variants={morphTopVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs sm:text-sm font-heading font-bold mb-3 shadow-xl">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>TỔNG KẾT BÁO CÁO ĐỒ ÁN 1</span>
        </div>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-7xl font-black gold-gradient-text-pure leading-[1.02]">
          Cảm Ơn Quý Thầy Cô!
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-slate-200 mt-3 max-w-2xl mx-auto leading-relaxed">
          Nhóm sinh viên thực hiện đề tài rất mong nhận được những câu hỏi và ý kiến đóng góp quý báu từ Hội đồng chấm Đồ án.
        </p>
      </motion.div>

      {/* Main Q&A Callout (Centered Royal Canva Box) */}
      <motion.div
        variants={morphCenterVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 max-w-4xl w-full mx-auto p-7 sm:p-9 md:p-10 rounded-3xl bg-gradient-to-b from-[#082a30]/95 to-[#031518]/98 border-2 border-amber-400/50 shadow-2xl backdrop-blur-2xl text-center space-y-5"
      >
        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-3xl bg-gradient-to-br from-amber-400 to-amber-600 mx-auto flex items-center justify-center text-black shadow-2xl shadow-amber-500/40 p-3.5">
          <MessageCircleQuestion className="w-9 h-9 sm:w-10 sm:h-10" />
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
          Đề tài <strong>"Hệ Thống Chatbot AI Chăm Sóc Khách Hàng Tự Động Đa Kịch Bản"</strong> sẵn sàng trình diễn trực tiếp khả năng tư vấn, kiểm soát giá thực tế và tự động tạo phiếu giữ chỗ theo yêu cầu của Hội đồng.
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
