import React from "react"
import { motion } from "motion/react"
import { Sparkles, MessageCircleQuestion, Bot } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide15_Conclusion: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-cinzel font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>TỔNG KẾT BÁO CÁO ĐỒ ÁN 1</span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-black gold-gradient-text-pure tracking-tight">
          Cảm Ơn Quý Thầy Cô!
        </h2>
        <p className="text-xs md:text-sm text-slate-300 mt-2">
          Em rất mong nhận được những nhận xét và góp ý quý báu từ quý thầy cô trong Hội đồng.
        </p>
      </div>

      {/* Main Q&A Callout (Matching Canva Image 2 Luxury Royal Box) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 my-auto max-w-3xl mx-auto w-full p-8 rounded-3xl bg-gradient-to-b from-[#08292f]/90 to-[#031518]/90 border border-amber-400/50 shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-center space-y-5 backdrop-blur-xl"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-600 text-black flex items-center justify-center mx-auto shadow-lg shadow-amber-500/40">
          <MessageCircleQuestion className="w-9 h-9" />
        </div>

        <div>
          <h3 className="font-playfair text-2xl md:text-3xl font-extrabold text-white mb-2">
            HỎI ĐÁP & PHẢN BIỆN (Q&A)
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            Hội đồng có thể đặt câu hỏi về cổng <strong>AI 9router</strong>, kỹ thuật <strong>Dynamic Catalog Injection</strong>, giải pháp <strong>Function Calling</strong> tạo đơn hàng hoặc trực tiếp thử nghiệm kịch bản trên Widget!
          </p>
        </div>

        {/* 3 Summary Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left pt-2">
          <div className="p-3.5 rounded-2xl bg-black/50 border border-amber-500/20 text-xs">
            <span className="font-cinzel text-amber-400 font-bold block mb-1">✓ AI Router Độc Lập</span>
            <span className="text-slate-400 text-[11px]">Bảo mật token, phân luồng chuẩn OpenAI specification.</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-black/50 border border-amber-500/20 text-xs">
            <span className="font-cinzel text-amber-400 font-bold block mb-1">✓ Chống Ảo Giác 100%</span>
            <span className="text-slate-400 text-[11px]">Bơm trực tiếp dữ liệu phòng, xe, tour đang mở bán từ DB.</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-black/50 border border-amber-500/20 text-xs">
            <span className="font-cinzel text-amber-400 font-bold block mb-1">✓ Human-in-the-Loop</span>
            <span className="text-slate-400 text-[11px]">AI tạo đơn nháp sơ bộ, Admin duyệt trước khi điều phối.</span>
          </div>
        </div>
      </motion.div>

      {/* Footer Info */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 border-t border-amber-500/20 pt-3 gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-200 font-cinzel font-semibold">
            <Bot className="w-4 h-4 text-amber-400" />
            STAYEA Phú Quốc
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">Sinh viên: TioDev</span>
        </div>

        <div className="flex items-center gap-2 text-amber-400 text-xs font-cinzel font-bold">
          <span>SẴN SÀNG CHO PHẦN THỬ NGHIỆM TRỰC TIẾP</span>
        </div>
      </div>
    </div>
  )
}
