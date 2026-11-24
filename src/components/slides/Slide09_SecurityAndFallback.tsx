import React from "react"
import { motion } from "motion/react"
import { ShieldAlert, RefreshCw, Lock, Zap, CheckCircle2, ShieldCheck } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide09_SecurityAndFallback: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.2em] text-amber-300 uppercase">
            10 · BẢO MẬT & DỰ PHÒNG CHỊU LỖI
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text tracking-tight mt-1">
          An Toàn Thông Tin & Cơ Chế Chịu Lỗi (Resilient Fallback)
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Bảo vệ hệ thống trước tấn công Prompt Injection, bảo vệ giá niêm yết và kích hoạt bộ cứu sinh cục bộ khi mất kết nối AI Gateway.
        </p>
      </div>

      {/* Main Split Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left: 3 Security Guardrails */}
        <div className="lg:col-span-6 space-y-3.5">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-amber-300 block">
            HÀNG RÀO PHÒNG VỆ AI (GUARDRAILS)
          </span>

          {[
            {
              title: "Chống Prompt Injection & Jailbreak",
              desc: "Từ chối mọi câu lệnh ép AI đóng vai Hacker, yêu cầu cấp quyền Admin hay đọc mật khẩu hệ thống.",
              icon: Lock,
              color: "text-red-400",
              badge: "Strict Policy",
            },
            {
              title: "Bảo Vệ Giá Niêm Yết Doanh Nghiệp",
              desc: "Ngăn chặn tuyệt đối việc AI bị khách thao túng để tự ý cam kết giảm giá, chiết khấu sai chính sách.",
              icon: ShieldCheck,
              color: "text-emerald-400",
              badge: "Price Defense",
            },
            {
              title: "Rate Limiting & Giới Hạn Tần Suất",
              desc: "NestJS Throttler chặn các cuộc gọi ồ ạt, ngăn chặn spam tin nhắn và bảo vệ ngân sách token API.",
              icon: Zap,
              color: "text-amber-400",
              badge: "Anti-Spam",
            },
          ].map((item, idx) => {
            const IconComp = item.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 transition-all flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center shrink-0 shadow-md">
                  <IconComp className={`w-4 h-4 ${item.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="font-heading text-sm font-bold text-white">{item.title}</h4>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/10 text-slate-300">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Right: Smart Local Fallback */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 p-6 rounded-3xl bg-gradient-to-b from-[#082a30]/95 to-[#031518]/95 border border-emerald-400/40 shadow-2xl backdrop-blur-xl space-y-4"
        >
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-500/20">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shadow-lg shadow-emerald-500/20">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-heading uppercase text-emerald-300 font-bold tracking-wider block">
                CƠ CHẾ CỨU SINH TỰ ĐỘNG
              </span>
              <h3 className="font-heading text-base font-bold text-white">
                Smart Local Fallback (Zero Downtime)
              </h3>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Nếu cổng AI 9router hoặc nhà cung cấp LLM cloud gặp sự cố bất khả kháng (timeout, cạn quota), hệ thống NestJS <strong>không bao giờ báo lỗi trắng màn hình</strong> cho khách hàng.
          </p>

          <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold font-heading">
              <CheckCircle2 className="w-4 h-4" />
              <span>Thuật Toán Phân Tích Cục Bộ Tiếp Quản:</span>
            </div>
            <p className="text-slate-300 pl-6 leading-relaxed">
              Tự động nhận diện từ khóa (villa, thuê xe, tour cano, hotline) để phản hồi ngay thông tin liên hệ và lưu số điện thoại khách hàng vào danh sách chờ gọi lại.
            </p>
          </div>

          {/* SLA stat */}
          <div className="canva-stat-card p-4">
            <span className="font-heading text-3xl font-black emerald-gradient-text block leading-none mb-1">
              99.9%
            </span>
            <span className="text-[10px] font-heading font-bold tracking-wider text-emerald-300 uppercase block">
              TÍNH SẴN SÀNG CỦA HỆ THỐNG (UPTIME)
            </span>
            <span className="text-[10px] text-slate-400">Không bao giờ để gián đoạn kết nối với khách du lịch</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
