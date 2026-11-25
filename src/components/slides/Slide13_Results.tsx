import React from "react"
import { motion } from "motion/react"
import { Zap, Clock, ShieldCheck, CheckCircle2, Award } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import { morphTopVariants, morphLeftVariants, morphRightVariants } from "../MorphTransition"

export const Slide13_Results: React.FC<{ isActive: boolean }> = () => {
  const metrics = [
    {
      value: "< 1.2s",
      label: "ĐỘ TRỄ PHẢN HỒI (TTFT)",
      desc: "Thời gian bắt đầu phát sinh token đầu tiên qua cổng AI 9router nội bộ",
      color: "gold-gradient-text",
      isLeft: true,
    },
    {
      value: "100%",
      label: "CHÍNH XÁC GIÁ & DỊCH VỤ",
      desc: "Kỹ thuật Dynamic Catalog Injection triệt tiêu hoàn toàn hiện tượng ảo giác",
      color: "emerald-gradient-text",
      isLeft: true,
    },
    {
      value: "75%+",
      label: "TỰ ĐỘNG HÓA CSKH",
      desc: "Giải đáp toàn bộ câu hỏi thường gặp, tra cứu kho và lên phiếu giữ chỗ tự động",
      color: "gold-gradient-text",
      isLeft: false,
    },
    {
      value: "24/7",
      label: "TÍNH SẴN SÀNG CAO",
      desc: "Phục vụ khách hàng mọi lúc, đặc biệt vào khung giờ đêm muộn từ 22h - 2h sáng",
      color: "emerald-gradient-text",
      isLeft: false,
    },
  ]

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
            14 · KẾT QUẢ ĐẠT ĐƯỢC
          </span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-6xl font-black gold-gradient-text tracking-tight mt-1">
          Hiệu Quả Thực Nghiệm & Đo Lường Thực Tế
        </h2>
        <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-slate-200 mt-1.5 max-w-4xl leading-relaxed">
          Đánh giá dựa trên hơn 500 phiên đối thoại mô phỏng và kiểm thử thực nghiệm trên kịch bản CSKH (Case Study: Dịch vụ du lịch).
        </p>
      </motion.div>

      {/* 4 Stat Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5 2xl:gap-6 my-auto">
        {metrics.map((m, idx) => (
          <motion.div
            key={idx}
            variants={m.isLeft ? morphLeftVariants : morphRightVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="canva-stat-card p-5 sm:p-6 2xl:p-9 flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 group hover:-translate-y-2 shadow-2xl"
          >
            <div>
              <span className={`font-heading text-4xl sm:text-5xl 2xl:text-7xl font-black ${m.color} block leading-none mb-3`}>
                {m.value}
              </span>
              <h3 className="font-heading font-bold text-xs sm:text-sm md:text-base text-amber-200 tracking-wider uppercase mb-2">
                {m.label}
              </h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed pt-4 border-t border-white/10">
              {m.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
