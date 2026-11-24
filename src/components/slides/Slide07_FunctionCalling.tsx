import React from "react"
import { motion } from "motion/react"
import { Bot, CheckCircle2, ShoppingCart, UserCheck, ArrowRight, Sparkles } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import {
  morphTopVariants,
  morphLeftVariants,
  morphRightVariants,
} from "../MorphTransition"

export const Slide07_FunctionCalling: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16 overflow-hidden select-none">
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
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm md:text-base font-heading font-bold tracking-[0.25em] text-amber-300 uppercase">
            08 · CƠ CHẾ FUNCTION CALLING & TỰ ĐỘNG LÊN ĐƠN
          </span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black gold-gradient-text tracking-tight mt-1.5">
          Từ Hội Thoại Tự Nhiên Đến Đơn Đặt Thực Tế
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mt-2 max-w-4xl leading-relaxed">
          AI Concierge tự động trích xuất thông tin khách hàng, số lượng khách, ngày check-in và tính toán tổng tiền để khởi tạo đơn giữ chỗ sơ bộ.
        </p>
      </motion.div>

      {/* Main Split Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 my-auto items-center">
        {/* Left Col (6 cols): The Journey from Chat to Booking Card with Morph Left */}
        <motion.div
          variants={morphLeftVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-6 space-y-4 xl:space-y-5"
        >
          <div className="p-5 sm:p-6 rounded-3xl bg-white/[0.05] border border-amber-500/25 backdrop-blur-md space-y-3">
            <span className="text-xs sm:text-sm font-heading font-bold text-amber-300 uppercase tracking-widest block">
              1. Khách Hàng Yêu Cầu Tự Nhiên
            </span>
            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-xs sm:text-sm md:text-base text-slate-100 italic leading-relaxed">
              "Mình muốn thuê 1 xe Xpander 7 chỗ tự lái từ ngày 28/11 đến 30/11, đón ở sân bay Phú Quốc. Mình tên Tuấn, SĐT 0912.345.678 nhé!"
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-md">
              <ArrowRight className="w-4 h-4 rotate-90" />
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl bg-emerald-950/40 border border-emerald-500/40 backdrop-blur-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-heading font-bold text-emerald-300 uppercase tracking-widest">
                2. AI Function Calling Thực Thi
              </span>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-200">
                Auto Extracted
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-heading mb-0.5">DỊCH VỤ</span>
                <span className="text-white font-bold text-sm sm:text-base">Mitsubishi Xpander 7 chỗ</span>
              </div>
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-heading mb-0.5">KHÁCH HÀNG</span>
                <span className="text-white font-bold text-sm sm:text-base">Anh Tuấn (0912.345.678)</span>
              </div>
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-heading mb-0.5">THỜI GIAN</span>
                <span className="text-white font-bold text-sm sm:text-base">28/11 ➔ 30/11 (2 ngày)</span>
              </div>
              <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-heading mb-0.5">TỔNG TIỀN DỰ KIẾN</span>
                <span className="text-amber-300 font-black font-mono text-base sm:text-lg">2.400.000 ₫</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Col (6 cols): Resulting Interactive Booking Preview Card with Morph Right */}
        <motion.div
          variants={morphRightVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-6 space-y-5"
        >
          <div className="p-6 sm:p-7 md:p-8 rounded-3xl bg-gradient-to-b from-[#08282e]/98 to-[#031518]/98 border-2 border-emerald-400/50 shadow-2xl backdrop-blur-2xl space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shadow-md">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base sm:text-lg font-bold text-white">
                    Thẻ Xác Nhận Giữ Chỗ (Booking Card)
                  </h4>
                  <span className="text-xs text-slate-400 font-mono">
                    Mã đơn: ORD-AI-984210
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-heading font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40 uppercase">
                Chờ Admin Duyệt
              </span>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed">
              Dạ hệ thống CSKH đã tiếp nhận thông tin thuê xe <strong>Mitsubishi Xpander 7 chỗ</strong> của anh Tuấn. Phiếu giữ chỗ sơ bộ đã được chuyển vào hàng chờ điều phối, chuyên viên sẽ liên hệ xác nhận trong 5 phút!
            </p>

            {/* Safety & Human in the loop reassurance */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center gap-3 text-xs sm:text-sm text-slate-200">
              <UserCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                <strong className="text-white">Kiểm soát con người:</strong> Đơn hàng chỉ chính thức xác nhận sau khi Quản trị viên kiểm tra và phê duyệt.
              </span>
            </div>
          </div>

          {/* Quick value callout */}
          <div className="canva-stat-card p-5 sm:p-6">
            <span className="font-heading text-4xl sm:text-5xl md:text-6xl font-black gold-gradient-text block leading-none mb-1.5">
              0 Phút
            </span>
            <span className="text-xs sm:text-sm font-heading font-bold tracking-wider text-amber-200 uppercase block mb-1">
              THỜI GIAN CHỜ ĐỢI TẠO ĐƠN
            </span>
            <span className="text-xs sm:text-sm text-slate-400">Khách được phục vụ và chốt đơn ngay cả lúc 2h sáng</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
