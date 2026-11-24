import React from "react"
import { motion } from "motion/react"
import { Database, Mic, Share2, ArrowRight, Lightbulb } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide14_FutureWork: React.FC<{ isActive: boolean }> = () => {
  const plans = [
    {
      num: "01",
      title: "Kiến Trúc RAG & Vector Database",
      sub: "Retrieval-Augmented Generation",
      desc: "Tích hợp pgvector / Qdrant để lưu trữ kho cẩm nang du lịch Phú Quốc và chính sách hoàn hủy chi tiết từng đối tác.",
      badge: "Kế hoạch Q1/2027",
    },
    {
      num: "02",
      title: "Voice AI Concierge Trực Tiếp",
      sub: "WebRTC + Speech-to-Speech",
      desc: "Đàm thoại giọng nói tự nhiên với khách du lịch, hỗ trợ gọi điện thoại trực tiếp hoặc rảnh tay khi đang lái xe.",
      badge: "Đồ Án Tốt Nghiệp",
    },
    {
      num: "03",
      title: "Tích Hợp Đa Kênh (Omnichannel)",
      sub: "Zalo OA & Facebook Messenger",
      desc: "Đồng bộ tin nhắn AI trên đa nền tảng mạng xã hội, giúp khách hàng nhắn tin từ kênh nào cũng được hỗ trợ liền mạch.",
      badge: "Mở Rộng Quy Mô",
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
            15 · HẠN CHẾ & HƯỚNG PHÁT TRIỂN
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text tracking-tight mt-1">
          Lộ Trình Nâng Cấp Lên Đồ Án Tốt Nghiệp
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Từ nền tảng Đồ án 1, hoàn thiện hệ sinh thái AI Concierge thông minh toàn diện với Voicebot và Đa kênh.
        </p>
      </div>

      {/* 3 Expansion Roadmap Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 my-auto">
        {plans.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            className="canva-card p-6 rounded-3xl flex flex-col justify-between hover:border-amber-400/60 transition-all group hover:-translate-y-1.5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400/20 to-emerald-500/20 border border-amber-400/40 flex items-center justify-center font-heading font-bold text-amber-300 text-sm">
                  {p.num}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-semibold">
                  {p.badge}
                </span>
              </div>

              <h3 className="font-heading font-bold text-white text-base group-hover:text-amber-200 transition-colors mb-1">
                {p.title}
              </h3>
              <span className="text-[10px] font-mono text-amber-300/80 block mb-2.5">
                {p.sub}
              </span>
              <p className="text-xs text-slate-300/80 leading-relaxed">
                {p.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs text-amber-300 font-heading font-semibold">
              <span>Giai đoạn nghiên cứu kế tiếp</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
