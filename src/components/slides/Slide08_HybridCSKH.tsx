import React from "react"
import { motion } from "motion/react"
import { Bot, User, ArrowLeftRight, CheckCircle2, Shield, HeartHandshake } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide08_HybridCSKH: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.2em] text-amber-300 uppercase">
            09 · MÔ HÌNH CSKH HYBRID (AI + CHUYÊN VIÊN)
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text tracking-tight mt-1">
          Hợp Lực Giữa AI Concierge & Chuyên Viên Trực Tiếp
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Mô hình Human-in-the-loop: AI đảm nhiệm 80% câu hỏi thường gặp và tạo đơn sơ bộ; chuyên viên can thiệp xử lý các tình huống cá nhân hóa cao cấp.
        </p>
      </div>

      {/* Main Split Comparison */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left: AI Mode */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 p-6 rounded-3xl bg-white/[0.04] border border-emerald-500/30 backdrop-blur-xl space-y-4"
        >
          <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shadow-lg shadow-emerald-500/20">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-heading font-bold text-emerald-300 uppercase tracking-wider block">
                  TỰ ĐỘNG HÓA 24/7
                </span>
                <h3 className="font-heading text-base font-bold text-white">
                  STAYEA AI Concierge
                </h3>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Active Bot
            </span>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Phản hồi dưới 1.2s vào bất kỳ khung giờ nào trong ngày.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Tư vấn thông số villa, giá thuê xe và lịch trình tour chuẩn xác 100%.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Tự động thu thập thông tin khách và tạo đơn sơ bộ vào CSDL.</span>
            </li>
          </ul>

          <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 text-[11px] text-emerald-200">
            <strong>Hiệu quả:</strong> Giải tỏa 80% khối lượng công việc lặp lại cho đội ngũ hỗ trợ.
          </div>
        </motion.div>

        {/* Center Switch Icon */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-emerald-400 p-0.5 shadow-xl shadow-amber-500/20">
            <div className="w-full h-full rounded-full bg-[#030e10] flex items-center justify-center text-amber-300">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
          </div>
          <span className="text-[10px] font-heading font-bold text-amber-300 uppercase tracking-widest block">
            DUAL-MODE CHAT
          </span>
          <span className="text-[10px] text-slate-400 max-w-[120px] leading-tight">
            Chuyển tiếp tức thì chỉ với 1 click
          </span>
        </div>

        {/* Right: Human Mode */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 p-6 rounded-3xl bg-white/[0.04] border border-amber-500/30 backdrop-blur-xl space-y-4"
        >
          <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-lg shadow-amber-500/20">
                <User className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-heading font-bold text-amber-300 uppercase tracking-wider block">
                  CÁ NHÂN HÓA CAO CẤP
                </span>
                <h3 className="font-heading text-base font-bold text-white">
                  Chuyên Viên STAYEA VIP
                </h3>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-400/30">
              Human Live
            </span>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Tiếp quản ngay khi khách có yêu cầu riêng biệt hoặc khiếu nại.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Toàn quyền phê duyệt, chỉnh sửa hoặc áp mã giảm giá đặc biệt cho đơn đặt.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Nắm toàn bộ lịch sử trò chuyện mà AI đã ghi nhận trước đó.</span>
            </li>
          </ul>

          <div className="p-3 rounded-2xl bg-amber-950/40 border border-amber-500/20 text-[11px] text-amber-200">
            <strong>Trải nghiệm:</strong> Khách hàng an tâm tuyệt đối vì luôn có con người đồng hành.
          </div>
        </motion.div>
      </div>
    </div>
  )
}
