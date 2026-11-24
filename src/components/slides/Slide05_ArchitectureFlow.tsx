import React from "react"
import { motion } from "motion/react"
import { User, Server, Cpu, Database, Sparkles, ArrowRight } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide05_ArchitectureFlow: React.FC<{ isActive: boolean }> = () => {
  const steps = [
    {
      num: "01",
      title: "Khách Gửi Tin",
      sub: "User Request",
      desc: "Khách hỏi thông tin phòng villa hoặc yêu cầu đặt xe tự lái qua Widget.",
      icon: User,
    },
    {
      num: "02",
      title: "Context Enrichment",
      sub: "NestJS Backend",
      desc: "Đọc System Prompt, tiêm catalog đang mở bán và đóng gói Tools.",
      icon: Server,
    },
    {
      num: "03",
      title: "9router LLM",
      sub: "AI Gateway: 20128",
      desc: "Gemini 2.5 Flash phân tích ý định và phát lệnh gọi Tool (`tool_calls`).",
      icon: Cpu,
    },
    {
      num: "04",
      title: "Thực Thi Nghiệp Vụ",
      sub: "PostgreSQL DB",
      desc: "Backend gọi `partnerService.createDraftOrder()` lưu vào DB.",
      icon: Database,
    },
    {
      num: "05",
      title: "Thẻ Đơn & Phản Hồi",
      sub: "Second Turn Synthesis",
      desc: "AI trả lời lịch thiệp kèm thẻ Booking Preview Card cho khách.",
      icon: Sparkles,
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
            05 · LUỒNG THỰC THI NGHIỆP VỤ
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text tracking-tight mt-1">
          Chu Trình 2 Lượt (Two-Turn Execution)
        </h2>
        <p className="text-xs md:text-sm text-slate-300 mt-1">
          Luồng xử lý khép kín đảm bảo tính chính xác và an toàn trước khi thông báo đơn đặt cho khách hàng.
        </p>
      </div>

      {/* 5 Steps Horizontal Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-3.5 my-auto">
        {steps.map((st, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
            className="p-5 rounded-3xl bg-black/40 border border-amber-500/30 backdrop-blur-md hover:border-amber-400/60 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-cinzel text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                  {st.num}
                </span>
                <st.icon className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-playfair font-bold text-white text-sm mb-0.5">{st.title}</h3>
              <span className="text-[10px] text-amber-200/80 font-mono block mb-2">{st.sub}</span>
              <p className="text-[11px] text-slate-300 leading-snug">{st.desc}</p>
            </div>

            <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-amber-400 font-cinzel flex items-center justify-between">
              <span>{i < 4 ? "Tiếp theo ➔" : "Hoàn tất ✓"}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Deep-dive Callout */}
      <div className="relative z-10 p-4 rounded-2xl bg-gradient-to-r from-[#07252a]/80 to-[#031518]/80 border border-amber-500/30 flex items-center gap-3 text-xs text-slate-300">
        <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
        <div>
          <strong className="text-amber-200 font-cinzel">Điểm then chốt:</strong> Không để AI phản hồi mơ hồ. Khi khách cung cấp đủ Tên, SĐT và ngày đi, AI bắt buộc phải hoàn thành <strong>Bước 04 (Lưu đơn vào Database)</strong> rồi mới được phép phát hành thẻ đơn hàng cho khách.
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
        <span>Đồ án 1 • Two-Turn Cycle Architecture</span>
        <span className="text-amber-300 font-cinzel">PHÍM MŨI TÊN (➔) ĐỂ CHUYỂN SLIDE</span>
      </div>
    </div>
  )
}
