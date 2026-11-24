import React from "react"
import { motion } from "motion/react"
import { ArrowRight, Bot, Database, User, Server, Cpu, CheckCircle } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide05_ArchitectureFlow: React.FC<{ isActive: boolean }> = () => {
  const steps = [
    {
      num: "1",
      actor: "Khách Hàng (User)",
      title: "Gửi Yêu Cầu Chat",
      desc: "Gửi tin nhắn từ Website Widget với nhu cầu tìm villa, thuê xe hoặc tour đảo Phú Quốc.",
      tag: "HTTP / SSE",
    },
    {
      num: "2",
      actor: "NestJS Backend",
      title: "Context Enrichment",
      desc: "Truy vấn DB lấy Catalog dịch vụ thực tế và cấu hình Prompt từ bảng stayea_ai_configs.",
      tag: "Drizzle ORM",
    },
    {
      num: "3",
      actor: "9router Gateway",
      title: "Định Tuyến & Gọi LLM",
      desc: "Gửi prompt kèm định nghĩa Tools sang Google Gemini 2.5 Flash qua cổng trung gian 20128.",
      tag: "OpenAI Spec",
    },
    {
      num: "4",
      actor: "Tool Execution",
      title: "Thực Thi Nghiệp Vụ",
      desc: "Nếu LLM kích hoạt Tool, Backend kiểm tra kho và tạo đơn đặt sơ bộ vào PostgreSQL.",
      tag: "Function Call",
    },
    {
      num: "5",
      actor: "AI Concierge",
      title: "Phản Hồi & Thẻ Đơn",
      desc: "Tổng hợp lời phản hồi chu đáo kèm Thẻ xác nhận đơn (Booking Card) trực quan cho khách.",
      tag: "Card UI",
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
            06 · SƠ ĐỒ LUỒNG HOẠT ĐỘNG TỔNG THỂ
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text tracking-tight mt-1">
          Quy Trình Xử Lý Hai Lượt (Two-Turn Cycle)
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Luồng dữ liệu khép kín đảm bảo dữ liệu ghi nhận thành công vào cơ sở dữ liệu trước khi AI thông báo cho khách.
        </p>
      </div>

      {/* Step Cards Horizontal / Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-3.5 my-auto">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className="canva-card p-4 rounded-3xl flex flex-col justify-between relative group hover:border-amber-400/60 transition-all hover:-translate-y-1"
          >
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400/20 to-emerald-500/20 border border-amber-400/40 flex items-center justify-center font-heading font-bold text-amber-300 text-xs">
                  {step.num}
                </span>
                <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                  {step.tag}
                </span>
              </div>

              <span className="text-[10px] font-heading uppercase text-amber-300 tracking-wider font-semibold block mb-1">
                {step.actor}
              </span>

              <h3 className="font-heading font-bold text-white text-sm group-hover:text-amber-200 transition-colors mb-1.5">
                {step.title}
              </h3>

              <p className="text-[11px] text-slate-300/80 leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Micro progress line */}
            <div className="pt-3 border-t border-white/10 mt-3 flex items-center gap-1 text-[10px] text-slate-400">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              <span>Giai đoạn {step.num}/5</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
