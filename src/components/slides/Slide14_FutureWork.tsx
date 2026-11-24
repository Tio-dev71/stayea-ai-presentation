import React from "react"
import { motion } from "motion/react"
import { Database, Mic, Share2, Sparkles, ArrowRight, Lightbulb } from "lucide-react"

export const Slide14_FutureWork: React.FC<{ isActive: boolean }> = () => {
  const plans = [
    {
      num: "P1",
      title: "Kiến Trúc RAG với Vector DB",
      sub: "Retrieval-Augmented Generation",
      desc: "Tích hợp pgvector / Qdrant để lưu trữ cẩm nang du lịch Phú Quốc, quy định nhận phòng và chính sách bồi thường chi tiết từng đối tác.",
      icon: Database,
      badge: "Kế hoạch Q1/2027",
    },
    {
      num: "P2",
      title: "Voice AI Concierge Trực Tiếp",
      sub: "WebRTC + Speech-to-Speech",
      desc: "Tích hợp giọng nói AI tự nhiên để khách hàng có thể gọi điện thoại trực tiếp hoặc ấn nút mic đàm thoại rảnh tay khi đang lái xe.",
      icon: Mic,
      badge: "Đồ Án Tốt Nghiệp",
    },
    {
      num: "P3",
      title: "Mở Rộng Đa Kênh (Omnichannel)",
      sub: "Zalo OA & Messenger & Telegram",
      desc: "Đồng bộ webhook từ Zalo Official Account và Facebook Page về chung một NestJS Backend xử lý, tạo đơn đồng bộ vào STAYEA Admin.",
      icon: Share2,
      badge: "Mở Rộng Kinh Doanh",
    },
  ]

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
          <span>14 / ĐỊNH HƯỚNG PHÁT TRIỂN</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Hạn Chế & <span className="text-gradient-emerald">Lộ Trình Phát Triển Thành Đồ Án Tốt Nghiệp</span>
        </h2>
        <p className="text-sm text-slate-300 mt-1">
          Các bước hoàn thiện tiếp theo để nâng cấp từ Đồ án 1 lên một sản phẩm thương mại hoàn chỉnh.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="p-5 rounded-2xl bg-[#061e22] border border-emerald-500/20 hover:border-emerald-400/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-700/40">
                  {p.num}
                </span>
                <span className="text-[10px] text-amber-300 font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/30">
                  {p.badge}
                </span>
              </div>

              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-300 flex items-center justify-center mb-3 border border-emerald-500/30">
                <p.icon className="w-5 h-5" />
              </div>

              <h3 className="font-bold text-white text-base mb-1">{p.title}</h3>
              <span className="text-xs text-slate-400 font-mono block mb-2">{p.sub}</span>
              <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-emerald-500/10 text-[11px] text-emerald-300 flex items-center gap-1">
              <span>Nâng tầm sản phẩm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-3.5 rounded-xl bg-[#031416] border border-emerald-500/20 text-xs text-slate-300 flex items-center gap-3">
        <Lightbulb className="w-5 h-5 text-amber-400 shrink-0" />
        <div>
          <strong>Mục tiêu dài hạn:</strong> Xây dựng hệ sinh thái AI Concierge du lịch đầu tiên tại Việt Nam có khả năng cá nhân hóa lịch trình theo gu nghỉ dưỡng và xử lý thanh toán đa kênh tự động.
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-4">
        <span>Đồ án 1 • Hướng phát triển</span>
        <span className="text-emerald-400">Cam kết tiếp tục nghiên cứu và mở rộng</span>
      </div>
    </div>
  )
}
