import React from "react"
import { motion } from "motion/react"
import { Sparkles, MessageCircleQuestion, Heart, CheckCircle2, Bot } from "lucide-react"

export const Slide15_Conclusion: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>TỔNG KẾT BÁO CÁO ĐỒ ÁN 1</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Cảm Ơn Quý Thầy Cô <span className="text-gradient-emerald">& Hội Đồng!</span>
        </h2>
        <p className="text-sm text-slate-300 mt-2">
          Em rất mong nhận được những nhận xét, góp ý quý báu từ quý thầy cô để hoàn thiện đề tài tốt hơn.
        </p>
      </div>

      {/* Main Q&A Callout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="my-auto max-w-3xl mx-auto w-full p-8 rounded-3xl bg-gradient-to-b from-[#08282c] to-[#041618] border border-emerald-400/40 shadow-2xl text-center space-y-5"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
          <MessageCircleQuestion className="w-9 h-9" />
        </div>

        <div>
          <h3 className="text-2xl font-extrabold text-white mb-2">HỎI ĐÁP & PHẢN BIỆN (Q&A)</h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
            Hội đồng có thể đặt câu hỏi về kiến trúc <strong>AI 9router</strong>, cơ chế <strong>Dynamic Catalog Injection</strong>, giải pháp <strong>Function Calling</strong> tạo đơn hàng hoặc thử nghiệm trực tiếp các tình huống trên Widget!
          </p>
        </div>

        {/* Quick summary points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left pt-2">
          <div className="p-3 rounded-xl bg-[#031517] border border-emerald-500/20 text-xs">
            <span className="text-emerald-400 font-bold block mb-1">✓ AI Router Độc Lập</span>
            <span className="text-slate-400 text-[11px]">Bảo mật token, phân luồng linh hoạt, chuẩn OpenAI spec.</span>
          </div>
          <div className="p-3 rounded-xl bg-[#031517] border border-emerald-500/20 text-xs">
            <span className="text-teal-400 font-bold block mb-1">✓ Chống Ảo Giác 100%</span>
            <span className="text-slate-400 text-[11px]">Bơm trực tiếp dữ liệu phòng, xe, tour đang mở bán từ DB.</span>
          </div>
          <div className="p-3 rounded-xl bg-[#031517] border border-emerald-500/20 text-xs">
            <span className="text-amber-400 font-bold block mb-1">✓ Human-in-the-Loop</span>
            <span className="text-slate-400 text-[11px]">AI tạo đơn nháp sơ bộ, Admin duyệt trước khi điều phối.</span>
          </div>
        </div>
      </motion.div>

      {/* Footer Info */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-4 gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-300 font-medium">
            <Bot className="w-4 h-4 text-emerald-400" />
            Dự án: STAYEA Phú Quốc
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">Sinh viên: TioDev</span>
        </div>

        <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
          <span>Sẵn sàng cho phần Demo trực tiếp ➔</span>
        </div>
      </div>
    </div>
  )
}
