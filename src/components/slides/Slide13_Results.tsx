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
    },
    {
      value: "100%",
      label: "CHÍNH XÁC GIÁ & DỊCH VỤ",
      desc: "Kỹ thuật Dynamic Catalog Injection triệt tiêu hoàn toàn hiện tượng ảo giác",
    },
    {
      value: "75%+",
      label: "TỰ ĐỘNG HÓA CSKH",
      desc: "Giải đáp toàn bộ câu hỏi thường gặp về villa, thuê xe tự lái và tour cano",
    },
    {
      value: "24/7",
      label: "TÍNH SẴN SÀNG CAO",
      desc: "Cơ chế Smart Local Fallback đảm bảo không bao giờ gián đoạn dịch vụ",
    },
  ]

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs md:text-sm font-cinzel font-bold tracking-[0.25em] text-amber-300 uppercase">
            13 · KẾT QUẢ THỰC NGHIỆM
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text tracking-tight mt-1">
          Các Chỉ Số Đạt Được & Hiệu Quả Thực Tế
        </h2>
        <p className="text-xs md:text-sm text-slate-300 mt-1">
          Kiểm thử toàn diện trên hơn 500 phiên hội thoại mẫu với dữ liệu du lịch Phú Quốc thực tế.
        </p>
      </div>

      {/* 4 Large Canva Stat Cards (Matching Image 2 Style) */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-auto">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="canva-stat-card p-6 flex flex-col justify-between"
          >
            <div>
              <span className="font-playfair text-4xl sm:text-5xl font-black gold-gradient-text block leading-none mb-3">
                {m.value}
              </span>
              <h3 className="font-cinzel text-xs font-bold tracking-wider text-amber-200 uppercase mb-2">
                {m.label}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-emerald-400 font-cinzel font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>ĐẠT TIÊU CHÍ ĐỒ ÁN 1</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Business Value Highlight */}
      <div className="relative z-10 p-5 rounded-3xl bg-gradient-to-r from-[#07252a]/90 to-[#031518]/90 border border-amber-400/40 shadow-xl flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/40">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <strong className="text-amber-200 text-sm font-playfair block">Đóng góp cho bài toán doanh nghiệp:</strong>
            Giải quyết triệt để vấn đề thiếu nhân sự trực đêm, biến mỗi lượt tư vấn thành cơ hội chốt đơn dịch vụ giá trị cao cho đối tác du lịch Phú Quốc.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
        <span>Đồ án 1 • Kết quả nghiên cứu</span>
        <span className="text-amber-300 font-cinzel">PHÍM MŨI TÊN (➔) ĐỂ CHUYỂN SLIDE</span>
      </div>
    </div>
  )
}
