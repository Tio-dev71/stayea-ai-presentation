import React from "react"
import { motion } from "motion/react"
import { XCircle, CheckCircle2, Clock, DollarSign, AlertTriangle, Bot } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide02_Problem: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs md:text-sm font-cinzel font-bold tracking-[0.25em] text-amber-300 uppercase">
            02 · THỰC TRẠNG & BỐI CẢNH NGHIÊN CỨU
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text tracking-tight mt-1">
          Hạn Chế Của Chatbot Kịch Bản Cũ
        </h2>
        <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-2xl">
          Doanh nghiệp du lịch Phú Quốc vừa tốn chi phí nhân sự trực ca đêm, vừa đánh mất doanh thu vì độ trễ phản hồi.
        </p>
      </div>

      {/* Main Split Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left Col (7 cols): Pain Points with Circular Badges */}
        <div className="lg:col-span-7 space-y-4">
          <div className="space-y-3">
            {[
              {
                letter: "⚠️",
                title: "Cây kịch bản (Rule-based) cứng nhắc",
                desc: "Khách hỏi lệch một từ là bot báo lỗi 'Xin lỗi tôi không hiểu', gây ức chế và làm gián đoạn cảm xúc đặt kỳ nghỉ.",
              },
              {
                letter: "⏳",
                title: "Quá tải ca đêm & Giờ cao điểm",
                desc: "Khách hàng thường có thói quen tìm phòng và thuê xe vào 22h - 2h sáng; nhân viên không thể túc trực 24/7 tức thì.",
              },
              {
                letter: "📉",
                title: "Tách rời hoàn toàn với Database",
                desc: "Không thể tự tra cứu lịch xe còn trống hay tình trạng phòng villa, không có khả năng chốt đơn tạo phiếu giữ chỗ.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                className="flex items-start gap-3.5 group p-3 rounded-2xl bg-black/30 border border-red-500/20 backdrop-blur-md"
              >
                <div className="w-9 h-9 rounded-full bg-red-500/20 border border-red-400/40 flex items-center justify-center shrink-0 text-red-300 text-sm font-bold shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                  {item.letter}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-snug mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Two Large Stat Cards (Matching Canva Image 2 style) */}
          <div className="grid grid-cols-2 gap-4 pt-1 max-w-lg">
            <div className="canva-stat-card p-4">
              <span className="font-playfair text-3xl sm:text-4xl font-black text-red-400 block leading-none mb-1">
                45%
              </span>
              <span className="text-[10px] sm:text-[11px] font-cinzel font-bold tracking-wider text-red-200 uppercase block">
                TỶ LỆ RỚT KHÁCH BAN ĐÊM
              </span>
              <span className="text-[10px] text-slate-400">Do không có nhân sự phản hồi</span>
            </div>

            <div className="canva-stat-card p-4">
              <span className="font-playfair text-3xl sm:text-4xl font-black gold-gradient-text block leading-none mb-1">
                80%
              </span>
              <span className="text-[10px] sm:text-[11px] font-cinzel font-bold tracking-wider text-amber-200 uppercase block">
                CÂU HỎI LẶP LẠI (FAQ)
              </span>
              <span className="text-[10px] text-slate-400">Về vị trí villa, giá xe, lịch tour</span>
            </div>
          </div>
        </div>

        {/* Right Col (5 cols): Solution Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-b from-[#07252a]/95 to-[#041619]/95 border border-amber-400/40 shadow-2xl space-y-4"
        >
          <div className="flex items-center gap-3 pb-3 border-b border-amber-500/20">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black shadow-md shadow-amber-500/30">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-playfair text-base font-bold text-white">Giải Pháp: STAYEA AI Concierge</h3>
              <span className="text-xs text-amber-300 font-cinzel">Thế Hệ Agentic AI Mới</span>
            </div>
          </div>

          <ul className="space-y-3 text-xs text-slate-200">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Hiểu sâu ngôn ngữ tự nhiên:</strong> Tư vấn lịch thiệp, am hiểu kỳ nghỉ độc bản tại Phú Quốc.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Đồng bộ catalog thời gian thực:</strong> Tiêm dữ liệu phòng, xe, tour đang mở bán $\rightarrow$ Không ảo giác giá.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Tự động tạo đơn giữ chỗ:</strong> Kích hoạt Function Calling sinh đơn chuyển Admin duyệt điều phối.</span>
            </li>
          </ul>

          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs text-center font-cinzel font-semibold">
            ✨ Biến cuộc trò chuyện thành đơn hàng thương mại thực tế
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
        <span>Đồ án 1 • Chatbot AI CSKH</span>
        <span className="text-amber-300 font-cinzel">PHÍM MŨI TÊN (➔) ĐỂ CHUYỂN SLIDE</span>
      </div>
    </div>
  )
}
