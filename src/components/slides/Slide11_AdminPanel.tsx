import React from "react"
import { motion } from "motion/react"
import { Sliders, Play, Save, CheckCircle2, Bot, Sparkles, Terminal } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide11_AdminPanel: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.2em] text-amber-300 uppercase">
            12 · QUẢN TRỊ HỆ THỐNG
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text tracking-tight mt-1">
          Admin Control Panel & Prompt Sandbox
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Giao diện trực quan dành riêng cho Quản trị viên tại route /stayea/ai-agent: Tùy biến tính cách AI, gắn thẻ quy tắc kinh doanh và kiểm thử an toàn trước khi lưu.
        </p>
      </div>

      {/* Main Split UI Mockup */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left Col (6 cols): Admin Config Form */}
        <div className="lg:col-span-6 space-y-3.5">
          <div className="p-5 rounded-3xl bg-white/[0.04] border border-amber-500/25 backdrop-blur-xl space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-heading font-bold text-amber-300 uppercase flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                Cấu Hình Tham Số AI Concierge
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                DB Dynamic
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div>
                <label className="text-slate-400 block mb-1 font-heading text-[11px]">PHONG CÁCH GIAO TIẾP (TONE):</label>
                <div className="grid grid-cols-3 gap-2">
                  <span className="px-2.5 py-1.5 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300 font-semibold text-center">
                    Luxury & 5-Sao
                  </span>
                  <span className="px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/10 text-slate-400 text-center">
                    Thân thiện trẻ trung
                  </span>
                  <span className="px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/10 text-slate-400 text-center">
                    Trang trọng chuẩn mực
                  </span>
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1 font-heading text-[11px]">ĐỘ SÁNG TẠO (TEMPERATURE):</label>
                <div className="flex items-center gap-3 p-2 rounded-xl bg-black/40 border border-white/10">
                  <div className="flex-1 h-1.5 rounded-full bg-white/10 relative overflow-hidden">
                    <div className="w-[30%] h-full bg-amber-400" />
                  </div>
                  <span className="font-mono text-amber-300 font-bold">0.3 (Chống ảo giác)</span>
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1 font-heading text-[11px]">QUY TẮC NGHIỆP VỤ BỔ SUNG (CUSTOM RULES):</label>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[10px]">
                    ✓ Gợi ý thuê xe khi khách hỏi villa
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[10px]">
                    ✓ Thu thập SĐT trước khi chốt đơn
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[10px]">
                    ✓ Không chiết khấu quá 10%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col (6 cols): Sandbox Live Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 p-5 rounded-3xl bg-gradient-to-b from-[#082a30]/95 to-[#031518]/95 border border-emerald-400/40 shadow-2xl backdrop-blur-xl space-y-3"
        >
          <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-heading font-bold">
              <Play className="w-3.5 h-3.5 fill-emerald-300" />
              <span>Khung Kiểm Thử Thử Nghiệm (Sandbox Testing)</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              Gemini 2.5 Flash
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-2xl bg-black/50 border border-white/10 text-slate-300">
              <span className="text-[10px] text-slate-500 block font-heading mb-0.5">ADMIN TEST INPUT:</span>
              "Thử hỏi: Mình muốn thuê biệt thự cho 8 người vào cuối tuần này, có xe đưa đón không?"
            </div>

            <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/20 text-emerald-200 text-[11px] leading-relaxed">
              <span className="text-[10px] text-emerald-400 font-bold block mb-0.5">AI RESPONSE:</span>
              "Dạ STAYEA trân trọng kính chào Quý khách! Đối với đoàn 8 người, em xin gợi ý <strong>Sunset Luxury Pool Villa 4PN</strong> tại Bãi Trường. Về phương tiện, bên em có sẵn xe 7 chỗ tự lái hoặc xe đưa đón sân bay tận nơi..."
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs">
            <span className="text-slate-400 text-[11px]">Đã xác thực quy tắc nghiệp vụ</span>
            <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-heading font-bold text-xs shadow-lg transition-transform active:scale-95">
              <Save className="w-3.5 h-3.5" />
              Lưu Cấu Hình Vào Database
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
