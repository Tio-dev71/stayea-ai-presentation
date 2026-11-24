import React from "react"
import { motion } from "motion/react"
import { Bot, CheckCircle2, ShoppingCart, UserCheck, ArrowRight, Sparkles } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide07_FunctionCalling: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.2em] text-amber-300 uppercase">
            08 · CƠ CHẾ FUNCTION CALLING & TỰ ĐỘNG LÊN ĐƠN
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text tracking-tight mt-1">
          Từ Hội Thoại Tự Nhiên Đến Đơn Đặt Thực Tế
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          AI Concierge tự động trích xuất thông tin khách hàng, số lượng khách, ngày check-in và tính toán tổng tiền để khởi tạo đơn giữ chỗ sơ bộ.
        </p>
      </div>

      {/* Main Split Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left Col (6 cols): The Journey from Chat to Booking Card */}
        <div className="lg:col-span-6 space-y-3.5">
          <div className="p-4 rounded-3xl bg-white/[0.04] border border-amber-500/20 backdrop-blur-md space-y-2.5">
            <span className="text-[10px] font-heading font-bold text-amber-300 uppercase tracking-widest block">
              1. Khách Hàng Yêu Cầu Tự Nhiên
            </span>
            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-xs text-slate-200 italic">
              "Mình muốn thuê 1 xe Xpander 7 chỗ tự lái từ ngày 28/11 đến 30/11, đón ở sân bay Phú Quốc. Mình tên Tuấn, SĐT 0912.345.678 nhé!"
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <ArrowRight className="w-3.5 h-3.5 rotate-90" />
            </div>
          </div>

          <div className="p-4 rounded-3xl bg-emerald-950/40 border border-emerald-500/40 backdrop-blur-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-heading font-bold text-emerald-300 uppercase tracking-widest">
                2. AI Function Calling Thực Thi
              </span>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200">
                Auto Extracted
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-200">
              <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[9px] text-slate-400 block font-heading">DỊCH VỤ</span>
                <span className="text-white font-medium">Mitsubishi Xpander 7 chỗ</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[9px] text-slate-400 block font-heading">KHÁCH HÀNG</span>
                <span className="text-white font-medium">Anh Tuấn (0912.345.678)</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[9px] text-slate-400 block font-heading">THỜI GIAN</span>
                <span className="text-white font-medium">28/11 ➔ 30/11 (2 ngày)</span>
              </div>
              <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[9px] text-slate-400 block font-heading">TỔNG TIỀN DỰ KIẾN</span>
                <span className="text-amber-300 font-bold font-mono">2.400.000 ₫</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col (6 cols): Resulting Interactive Booking Preview Card */}
        <div className="lg:col-span-6 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-5 rounded-3xl bg-gradient-to-b from-[#08282e]/95 to-[#031518]/95 border border-emerald-400/40 shadow-2xl backdrop-blur-xl space-y-3.5"
          >
            <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">
                    Thẻ Xác Nhận Giữ Chỗ (Booking Card)
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Mã đơn: ORD-AI-984210
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-heading font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/40 uppercase">
                Chờ Admin Duyệt
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Dạ STAYEA đã tiếp nhận thông tin thuê xe <strong>Mitsubishi Xpander 7 chỗ</strong> của anh Tuấn. Phiếu giữ chỗ sơ bộ đã được chuyển vào hệ thống điều phối, chuyên viên STAYEA sẽ liên hệ xác nhận trong 5 phút!
            </p>

            {/* Safety & Human in the loop reassurance */}
            <div className="p-3 rounded-2xl bg-black/50 border border-white/10 flex items-center gap-2.5 text-xs text-slate-300">
              <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>Kiểm soát con người:</strong> Đơn hàng chỉ chính thức xác nhận sau khi Quản trị viên kiểm tra và phê duyệt.
              </span>
            </div>
          </motion.div>

          {/* Quick value callout */}
          <div className="canva-stat-card p-4">
            <span className="font-heading text-3xl font-black gold-gradient-text block leading-none mb-1">
              0 Phút
            </span>
            <span className="text-[10px] font-heading font-bold tracking-wider text-amber-200 uppercase block">
              THỜI GIAN CHỜ ĐỢI TẠO ĐƠN
            </span>
            <span className="text-[10px] text-slate-400">Khách được phục vụ và chốt đơn ngay cả lúc 2h sáng</span>
          </div>
        </div>
      </div>
    </div>
  )
}
