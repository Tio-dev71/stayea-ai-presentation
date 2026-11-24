import React from "react"
import { motion } from "motion/react"
import { Database, Mic, Share2, ArrowRight, Lightbulb } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide14_FutureWork: React.FC<{ isActive: boolean }> = () => {
  const plans = [
    {
      num: "01",
      letter: "壹",
      title: "Kiến Trúc RAG & Vector Database",
      sub: "Retrieval-Augmented Generation",
      desc: "Tích hợp pgvector / Qdrant để lưu trữ kho cẩm nang du lịch Phú Quốc và chính sách hoàn hủy chi tiết từng đối tác.",
      badge: "Kế hoạch Q1/2027",
    },
    {
      num: "02",
      letter: "贰",
      title: "Voice AI Concierge Trực Tiếp",
      sub: "WebRTC + Speech-to-Speech",
      desc: "Đàm thoại giọng nói tự nhiên với khách du lịch, hỗ trợ gọi điện thoại trực tiếp hoặc rảnh tay khi đang lái xe.",
      badge: "Đồ Án Tốt Nghiệp",
    },
    {
      num: "03",
      letter: "叁",
      title: "Mở Rộng Đa Kênh (Omnichannel)",
      sub: "Zalo Official Account & Messenger",
      desc: "Đồng bộ webhook từ Zalo OA và Facebook Fanpage về chung một NestJS Backend xử lý, tạo đơn hàng đồng nhất.",
      badge: "Mở Rộng Kinh Doanh",
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
            14 · ĐỊNH HƯỚNG PHÁT TRIỂN
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text tracking-tight mt-1">
          Hạn Chế & Lộ Trình Đồ Án Tốt Nghiệp
        </h2>
        <p className="text-xs md:text-sm text-slate-300 mt-1">
          Các bước hoàn thiện tiếp theo để nâng cấp từ Đồ án 1 lên một sản phẩm thương mại hoàn chỉnh.
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="p-6 rounded-3xl bg-black/40 border border-amber-500/30 backdrop-blur-md hover:border-amber-400/60 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 font-cinzel font-bold text-xs flex items-center justify-center">
                  {p.letter}
                </span>
                <span className="text-[10px] text-amber-300 font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/30 font-cinzel">
                  {p.badge}
                </span>
              </div>

              <h3 className="font-playfair font-bold text-white text-base mb-1 group-hover:text-amber-300 transition-colors">
                {p.title}
              </h3>
              <span className="text-xs text-amber-200/80 font-mono block mb-2">{p.sub}</span>
              <p className="text-xs text-slate-300/90 leading-relaxed">{p.desc}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-amber-300 font-cinzel flex items-center gap-1">
              <span>Mở rộng hệ sinh thái</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Vision Statement */}
      <div className="relative z-10 p-4 rounded-3xl bg-black/40 border border-amber-500/20 text-xs text-slate-300 flex items-center gap-3">
        <Lightbulb className="w-5 h-5 text-amber-400 shrink-0" />
        <div>
          <strong className="text-amber-200 font-cinzel">Tầm nhìn dài hạn:</strong> Trở thành hệ sinh thái AI Concierge du lịch hàng đầu tại Việt Nam có khả năng tự động hóa 100% từ khâu tư vấn, đặt phòng đến điều phối đối tác.
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
        <span>Đồ án 1 • Hướng phát triển</span>
        <span className="text-amber-300 font-cinzel">PHÍM MŨI TÊN (➔) ĐỂ CHUYỂN SLIDE</span>
      </div>
    </div>
  )
}
