import React from "react"
import { motion } from "motion/react"
import { Target, CheckCircle2, ShieldCheck, Zap, Layers, RefreshCw } from "lucide-react"

export const Slide03_Objectives: React.FC<{ isActive: boolean }> = () => {
  const objectives = [
    {
      num: "01",
      title: "Trợ Lý Du Lịch Thông Minh 24/7",
      desc: "Xây dựng AI Concierge mang phong cách giao tiếp sang trọng (Luxury Hospitality), tư vấn trọn gói Villa, Xe tự lái và Tour cano Phú Quốc.",
      icon: Zap,
      tags: ["Gemini 2.5 Flash", "Prompt Engineering"],
    },
    {
      num: "02",
      title: "Tích Hợp Cổng Điều Phối AI 9router",
      desc: "Triển khai gateway trung gian độc lập (Port 20128), cân bằng tải, quản lý API key bảo mật và chuẩn hóa luồng Streaming SSE phản hồi tức thì.",
      icon: Layers,
      tags: ["9router Gateway", "Latency < 1.5s"],
    },
    {
      num: "03",
      title: "Tự Động Sinh Đơn Hàng (Function Calling)",
      desc: "Trích xuất thực thể tên, SĐT, ngày đi để kích hoạt tool tạo đơn đặt giữ chỗ (Draft Booking) lưu trực tiếp vào CSDL PostgreSQL.",
      icon: RefreshCw,
      tags: ["Tool Calling", "PostgreSQL Drizzle"],
    },
    {
      num: "04",
      title: "Mô Hình Hybrid Human-in-the-Loop",
      desc: "Kết hợp giữa AI tự động hóa và Chuyên viên trực tiếp (Admin VIP). Trang quản trị kiểm soát prompt, điều chỉnh tham số trên Sandbox an toàn.",
      icon: ShieldCheck,
      tags: ["Dual-Mode Chat", "Admin Sandbox"],
    },
  ]

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
          <span>03 / MỤC TIÊU & PHẠM VI</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          4 Trụ Cột <span className="text-gradient-emerald">Mục Tiêu Nghiên Cứu</span> & Thực Thi
        </h2>
        <p className="text-sm text-slate-300 mt-1">
          Hệ thống được thiết kế hướng tới giải quyết trọn vẹn bài toán kinh doanh thực tế trên nền tảng du lịch STAYEA.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto">
        {objectives.map((obj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            className="p-5 rounded-2xl bg-[#082428] border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-300">
              <obj.icon className="w-6 h-6" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-white text-base">{obj.title}</h3>
                <span className="font-mono text-xs font-bold text-emerald-400">{obj.num}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">{obj.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {obj.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-950/60 text-emerald-300 border border-emerald-700/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-4">
        <span>Phạm vi: Hệ sinh thái nghỉ dưỡng & dịch vụ du lịch Đảo Ngọc Phú Quốc</span>
        <span className="text-emerald-400 font-medium">100% Codebase thực tế triển khai trên NestJS & Next.js 15</span>
      </div>
    </div>
  )
}
