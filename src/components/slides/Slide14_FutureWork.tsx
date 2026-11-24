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
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm md:text-base font-heading font-bold tracking-[0.25em] text-amber-300 uppercase">
            15 · HẠN CHẾ & HƯỚNG PHÁT TRIỂN
          </span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black gold-gradient-text tracking-tight mt-1.5">
          Lộ Trình Nâng Cấp Lên Đồ Án Tốt Nghiệp
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mt-2 max-w-4xl leading-relaxed">
          Từ nền tảng Đồ án 1, hoàn thiện hệ sinh thái AI Concierge thông minh toàn diện với Voicebot và Đa kênh.
        </p>
      </div>

      {/* 3 Expansion Roadmap Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
        {plans.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            className="canva-card p-7 sm:p-8 md:p-9 rounded-3xl flex flex-col justify-between hover:border-amber-400/60 transition-all group hover:-translate-y-2 shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-emerald-500/20 border border-amber-400/40 flex items-center justify-center font-heading font-black text-amber-300 text-base sm:text-lg shadow-[0_0_15px_rgba(245,184,56,0.3)]">
                  {p.num}
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 font-bold">
                  {p.badge}
                </span>
              </div>

              <h3 className="font-heading font-bold text-white text-lg sm:text-xl md:text-2xl group-hover:text-amber-200 transition-colors mb-1.5">
                {p.title}
              </h3>
              <span className="text-xs sm:text-sm font-mono text-amber-300/90 block mb-3">
                {p.sub}
              </span>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                {p.desc}
              </p>
            </div>

            <div className="pt-5 border-t border-white/10 mt-5 flex items-center justify-between text-xs sm:text-sm text-amber-300 font-heading font-bold">
              <span>Giai đoạn nghiên cứu kế tiếp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
