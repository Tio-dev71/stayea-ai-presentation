import React from "react"
import { motion } from "motion/react"
import { Bot, User, ArrowLeftRight, CheckCircle2, Shield, HeartHandshake } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import {
  morphTopVariants,
  morphLeftVariants,
  morphRightVariants,
  morphCenterVariants,
} from "../MorphTransition"

export const Slide08_HybridCSKH: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-14 pb-16 sm:pb-16 lg:pb-18 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header with Morph Top */}
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
            09 · MÔ HÌNH CSKH HYBRID (AI + CHUYÊN VIÊN)
          </span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-6xl font-black gold-gradient-text tracking-tight mt-1">
          Hợp Lực Giữa AI & Chuyên Viên Trực Tiếp
        </h2>
        <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-slate-200 mt-1.5 max-w-4xl leading-relaxed">
          Mô hình Human-in-the-loop: AI đảm nhiệm 80% câu hỏi thường gặp và tạo đơn sơ bộ; chuyên viên can thiệp xử lý các tình huống cá nhân hóa cao cấp.
        </p>
      </motion.div>

      {/* Main Split Comparison */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 my-auto items-center">
        {/* Left: AI Mode with Morph Left */}
        <motion.div
          variants={morphLeftVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-5 p-5 sm:p-6 2xl:p-9 rounded-3xl bg-white/[0.05] border-2 border-emerald-500/40 backdrop-blur-2xl space-y-4 shadow-2xl"
        >
          <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shadow-lg shadow-emerald-500/20">
                <Bot className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-heading font-bold text-emerald-300 uppercase tracking-wider block mb-0.5">
                  TỰ ĐỘNG HÓA 24/7
                </span>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white">
                  AI Concierge Tự Động
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Active Bot
            </span>
          </div>

          <ul className="space-y-3.5 text-xs sm:text-sm md:text-base text-slate-200">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Phản hồi dưới 1.2s vào bất kỳ khung giờ nào trong ngày.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Tư vấn thông số villa, giá thuê xe và lịch trình tour chuẩn xác 100%.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Tự động thu thập thông tin khách và tạo đơn sơ bộ vào CSDL.</span>
            </li>
          </ul>

          <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200">
            <strong className="text-white">Hiệu quả:</strong> Giải tỏa 80% khối lượng công việc lặp lại cho đội ngũ hỗ trợ.
          </div>
        </motion.div>

        {/* Center Switch Icon with Morph Center */}
        <motion.div
          variants={morphCenterVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-2 flex flex-col items-center justify-center text-center space-y-3"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-amber-400 to-emerald-400 p-0.5 shadow-2xl shadow-amber-500/30">
            <div className="w-full h-full rounded-full bg-[#030e10] flex items-center justify-center text-amber-300">
              <ArrowLeftRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
          </div>
          <span className="text-xs sm:text-sm font-heading font-black text-amber-300 uppercase tracking-widest block">
            DUAL-MODE CHAT
          </span>
          <span className="text-xs text-slate-300 max-w-[140px] leading-snug">
            Chuyển tiếp tức thì chỉ với 1 click
          </span>
        </motion.div>

        {/* Right: Human Mode with Morph Right */}
        <motion.div
          variants={morphRightVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-5 p-5 sm:p-6 2xl:p-9 rounded-3xl bg-white/[0.05] border-2 border-amber-500/40 backdrop-blur-2xl space-y-4 shadow-2xl"
        >
          <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-lg shadow-amber-500/20">
                <User className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-heading font-bold text-amber-300 uppercase tracking-wider block mb-0.5">
                  CÁ NHÂN HÓA CAO CẤP
                </span>
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Chuyên Viên CSKH Trực Tiếp
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
              Human Live
            </span>
          </div>

          <ul className="space-y-3.5 text-xs sm:text-sm md:text-base text-slate-200">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>Tiếp quản ngay khi khách có yêu cầu riêng biệt hoặc khiếu nại.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>Toàn quyền phê duyệt, chỉnh sửa hoặc áp mã giảm giá đặc biệt cho đơn đặt.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>Nắm toàn bộ lịch sử trò chuyện mà AI đã ghi nhận trước đó.</span>
            </li>
          </ul>

          <div className="p-4 rounded-2xl bg-amber-950/50 border border-amber-500/30 text-xs sm:text-sm text-amber-200">
            <strong className="text-white">Trải nghiệm:</strong> Khách hàng an tâm tuyệt đối vì luôn có con người đồng hành.
          </div>
        </motion.div>
      </div>
    </div>
  )
}
