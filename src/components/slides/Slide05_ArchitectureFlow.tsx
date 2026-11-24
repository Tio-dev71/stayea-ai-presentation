import React from "react"
import { motion } from "motion/react"
import { ArrowRight, Bot, Database, Server, User, Cpu, Sparkles } from "lucide-react"

export const Slide05_ArchitectureFlow: React.FC<{ isActive: boolean }> = () => {
  const steps = [
    {
      step: "01",
      title: "Khách Gửi Tin",
      sub: "User Chat Request",
      desc: "Khách hỏi phòng villa hoặc yêu cầu đặt xe qua widget trên website.",
      icon: User,
      color: "from-blue-500/20 to-blue-600/10 text-blue-300 border-blue-400/30",
    },
    {
      step: "02",
      title: "Context Injection",
      sub: "NestJS Backend",
      desc: "Đọc System Prompt, bơm dữ liệu catalog thực tế và đóng gói Tools.",
      icon: Server,
      color: "from-emerald-500/20 to-emerald-600/10 text-emerald-300 border-emerald-400/30",
    },
    {
      step: "03",
      title: "9router LLM",
      sub: "Gateway: 20128",
      desc: "Gemini 2.5 Flash phân tích ý định và phát lệnh gọi Tool (`tool_calls`).",
      icon: Cpu,
      color: "from-amber-500/20 to-amber-600/10 text-amber-300 border-amber-400/30",
    },
    {
      step: "04",
      title: "Thực Thi Nghiệp Vụ",
      sub: "Tool Execution",
      desc: "Backend gọi `partnerService.createDraftOrder()` lưu vào DB PostgreSQL.",
      icon: Database,
      color: "from-purple-500/20 to-purple-600/10 text-purple-300 border-purple-400/30",
    },
    {
      step: "05",
      title: "Phản Hồi & Thẻ Đơn",
      sub: "Second Turn Synthesis",
      desc: "AI gửi câu trả lời chu đáo kèm thẻ Booking Preview Card cho khách.",
      icon: Sparkles,
      color: "from-teal-500/20 to-teal-600/10 text-teal-300 border-teal-400/30",
    },
  ]

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
          <span>05 / KIẾN TRÚC & LUỒNG DỮ LIỆU</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Chu Trình 2 Lượt <span className="text-gradient-emerald">(Two-Turn Execution Cycle)</span>
        </h2>
        <p className="text-sm text-slate-300 mt-1">
          Cách thức AI Agent tiếp nhận hội thoại, kiểm tra kho dữ liệu và thực thi lưu đơn hàng thực tế vào Database.
        </p>
      </div>

      {/* Horizontal Flow Steps */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 my-auto">
        {steps.map((st, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
            className={`p-4 rounded-xl bg-gradient-to-b ${st.color} border flex flex-col justify-between relative group hover:scale-105 transition-transform`}
          >
            {/* Step number badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded-full bg-black/40">
                {st.step}
              </span>
              <st.icon className="w-5 h-5 shrink-0" />
            </div>

            <div>
              <h3 className="font-bold text-white text-sm leading-tight">{st.title}</h3>
              <span className="text-[10px] text-slate-400 block font-mono mb-2">{st.sub}</span>
              <p className="text-[11px] text-slate-300 leading-snug">{st.desc}</p>
            </div>

            <div className="mt-3 pt-2 border-t border-white/10 text-[9px] text-slate-400 flex items-center justify-between">
              <span>{i < 4 ? "Tiếp theo ➔" : "Hoàn tất ✓"}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Deep-dive Callout */}
      <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-center gap-4 text-xs text-slate-300">
        <Bot className="w-6 h-6 text-emerald-400 shrink-0" />
        <div>
          <strong className="text-white">Điểm đột phá:</strong> Không phản hồi theo cảm tính. Khi khách đồng ý đặt dịch vụ, AI buộc phải qua bước <strong>04: Xác thực dịch vụ trong DB</strong> rồi mới chuyển sang bước <strong>05: Trả lời kèm thẻ mã đơn chính thức</strong>.
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-4">
        <span>Đồ án 1 • Sơ đồ tuần tự nghiệp vụ</span>
        <span className="text-emerald-400 font-mono">POST /api/stayea/ai/chat ➔ 200 OK (with bookingCreated)</span>
      </div>
    </div>
  )
}
