import React from "react"
import { motion } from "motion/react"
import { Sliders, Play, Save, CheckCircle2, Bot, Sparkles, Terminal } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import { morphTopVariants, morphLeftVariants, morphRightVariants } from "../MorphTransition"

export const Slide11_AdminPanel: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-14 pb-16 sm:pb-16 lg:pb-18 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <motion.div
        variants={morphTopVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.22em] text-amber-300 uppercase">
            12 · QUẢN TRỊ HỆ THỐNG
          </span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-6xl font-black gold-gradient-text tracking-tight mt-1">
          Admin Control Panel & Prompt Sandbox
        </h2>
        <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-slate-200 mt-1.5 max-w-4xl leading-relaxed">
          Giao diện trực quan dành riêng cho Quản trị viên: Tùy biến System Prompt theo từng kịch bản ngành nghề, thiết lập phong cách xưng hô, gắn thẻ quy tắc kinh doanh và thử nghiệm trực tiếp trước khi lưu.
        </p>
      </motion.div>

      {/* Main Split UI Mockup */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 my-auto items-center">
        {/* Left Col (6 cols): Admin Config Form */}
        <motion.div
          variants={morphLeftVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-6 space-y-3.5 xl:space-y-4"
        >
          <div className="p-5 sm:p-6 2xl:p-8 rounded-3xl bg-white/[0.05] border-2 border-amber-500/25 backdrop-blur-2xl space-y-3.5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs sm:text-sm font-heading font-bold text-amber-300 uppercase flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                Cấu Hình Prompt & Tham Số AI CSKH
              </span>
              <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/70 px-3 py-0.5 rounded border border-emerald-500/30">
                DB Dynamic
              </span>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="text-slate-300 block mb-1.5 font-heading text-xs uppercase tracking-wider font-bold">PHONG CÁCH GIAO TIẾP (TONE):</label>
                <div className="grid grid-cols-3 gap-2.5">
                  <span className="px-3 py-2 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-300 font-bold text-center">
                    Tư vấn tận tâm
                  </span>
                  <span className="px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-slate-300 text-center">
                    Thân thiện trẻ trung
                  </span>
                  <span className="px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-slate-300 text-center">
                    Trang trọng chuẩn mực
                  </span>
                </div>
              </div>

              <div>
                <label className="text-slate-300 block mb-1.5 font-heading text-xs uppercase tracking-wider font-bold">ĐỘ SÁNG TẠO (TEMPERATURE):</label>
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-black/50 border border-white/10">
                  <div className="flex-1 h-2 rounded-full bg-white/10 relative overflow-hidden">
                    <div className="w-[30%] h-full bg-amber-400" />
                  </div>
                  <span className="font-mono text-amber-300 font-black text-sm">0.3 (Chống ảo giác)</span>
                </div>
              </div>

              <div>
                <label className="text-slate-300 block mb-1.5 font-heading text-xs uppercase tracking-wider font-bold">QUY TẮC NGHIỆP VỤ BỔ SUNG (CUSTOM RULES):</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                    ✓ Gợi ý combo khi khách hỏi dịch vụ
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                    ✓ Thu thập SĐT trước khi chốt đơn
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                    ✓ Không chiết khấu quá 10%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Col (6 cols): Sandbox Live Preview */}
        <motion.div
          variants={morphRightVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-6 p-5 sm:p-6 2xl:p-8 rounded-3xl bg-gradient-to-b from-[#082a30]/95 to-[#031518]/98 border-2 border-emerald-400/50 shadow-2xl backdrop-blur-2xl space-y-3.5"
        >
          <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
            <div className="flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-heading font-bold">
              <Play className="w-4 h-4 fill-emerald-300" />
              <span>Khung Kiểm Thử Thử Nghiệm (Sandbox Testing)</span>
            </div>
            <span className="text-xs font-mono font-bold text-slate-300">
              Gemini 2.5 Flash
            </span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-slate-200">
              <span className="text-xs text-amber-300/90 block font-heading font-bold mb-1">ADMIN TEST INPUT:</span>
              "Thử hỏi: Mình muốn đặt lịch dịch vụ cho đoàn 8 người vào cuối tuần này, có ưu đãi gì không?"
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-100 text-xs sm:text-sm leading-relaxed">
              <span className="text-xs text-emerald-400 font-bold font-heading block mb-1">AI RESPONSE:</span>
              "Dạ em trân trọng kính chào Quý khách! Đối với đoàn 8 người, em xin giới thiệu gói dịch vụ phù hợp nhất kèm ưu đãi theo chính sách hiện hành. Em có thể hỗ trợ anh/chị kiểm tra lịch trống và lên phiếu đặt trước ngay ạ..."
            </div>
          </div>

          <div className="pt-3 flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-300">Đã xác thực quy tắc nghiệp vụ</span>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-heading font-bold text-xs sm:text-sm shadow-xl transition-transform active:scale-95">
              <Save className="w-4 h-4" />
              Lưu Cấu Hình Vào Database
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
