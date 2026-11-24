import React from "react"
import { motion } from "motion/react"
import { Zap, Clock, ShieldCheck, CheckCircle2, Award } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide13_Results: React.FC<{ isActive: boolean }> = () => {
  const metrics = [
    {
      value: "< 1.2s",
      label: "ĐỘ TRỄ PHẢN HỒI (TTFT)",
      desc: "Thời gian bắt đầu phát sinh token đầu tiên qua cổng AI 9router nội bộ",
      color: "gold-gradient-text",
    },
    {
      value: "100%",
      label: "CHÍNH XÁC GIÁ & DỊCH VỤ",
      desc: "Kỹ thuật Dynamic Catalog Injection triệt tiêu hoàn toàn hiện tượng ảo giác",
      color: "emerald-gradient-text",
    },
    {
      value: "75%+",
      label: "TỰ ĐỘNG HÓA CSKH",
      desc: "Giải đáp toàn bộ câu hỏi thường gặp về villa, thuê xe tự lái và tour cano",
      color: "gold-gradient-text",
    },
    {
      value: "24/7",
      label: "TÍNH SẴN SÀNG CAO",
      desc: "Phục vụ khách du lịch mọi lúc, đặc biệt vào khung giờ đêm muộn 22h - 2h sáng",
      color: "emerald-gradient-text",
    },
  ]

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.2em] text-amber-300 uppercase">
            14 · KẾT QUẢ ĐẠT ĐƯỢC
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text tracking-tight mt-1">
          Hiệu Quả Thực Nghiệm & Đo Lường Thực Tế
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Đánh giá dựa trên hơn 500 phiên đối thoại mô phỏng và kiểm thử thực tế trên hệ thống STAYEA.
        </p>
      </div>

      {/* 4 Stat Cards Grid (Matching Canva Image 2 Luxury Royal Box Cards) */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-auto">
        {metrics.map((m, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            className="canva-stat-card p-6 flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 group hover:-translate-y-1"
          >
            <div>
              <span className={`font-heading text-4xl sm:text-5xl font-black ${m.color} block leading-none mb-3`}>
                {m.value}
              </span>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-amber-200 tracking-wider uppercase mb-2">
                {m.label}
              </h3>
            </div>
            <p className="text-xs text-slate-300/80 leading-relaxed pt-3 border-t border-white/10">
              {m.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
