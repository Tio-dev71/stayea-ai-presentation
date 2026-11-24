import React from "react"
import { motion } from "motion/react"
import { AlertTriangle, Clock, Bot, XCircle, CheckCircle2, TrendingDown } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide02_Problem: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.2em] text-amber-300 uppercase">
            03 · THỰC TRẠNG & BỐI CẢNH NGHIÊN CỨU
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text tracking-tight mt-1">
          Hạn Chế Của Chatbot Kịch Bản Cũ
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Doanh nghiệp du lịch Phú Quốc vừa tốn chi phí nhân sự trực ca đêm, vừa đánh mất doanh thu vì độ trễ phản hồi vào giờ cao điểm.
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
                className="flex items-start gap-3.5 group p-3.5 rounded-2xl bg-white/[0.04] border border-red-500/20 backdrop-blur-md"
              >
                <div className="w-9 h-9 rounded-full bg-red-500/20 border border-red-400/40 flex items-center justify-center shrink-0 text-red-300 text-sm font-bold shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                  {item.letter}
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-white tracking-wide">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-snug mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Two Large Stat Cards */}
          <div className="grid grid-cols-2 gap-4 pt-1 max-w-lg">
            <div className="canva-stat-card p-4">
              <span className="font-heading text-3xl sm:text-4xl font-black text-red-400 block leading-none mb-1">
                45%
              </span>
              <span className="text-[10px] sm:text-[11px] font-heading font-bold tracking-wider text-red-200 uppercase block">
                TỶ LỆ RỚT KHÁCH BAN ĐÊM
              </span>
              <span className="text-[10px] text-slate-400">Do không có nhân sự phản hồi</span>
            </div>

            <div className="canva-stat-card p-4">
              <span className="font-heading text-3xl sm:text-4xl font-black gold-gradient-text block leading-none mb-1">
                80%
              </span>
              <span className="text-[10px] sm:text-[11px] font-heading font-bold tracking-wider text-amber-200 uppercase block">
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
          className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-b from-[#07252a]/95 to-[#041619]/95 border border-amber-400/40 shadow-2xl space-y-4 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 pb-3 border-b border-amber-500/20">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black shadow-md shadow-amber-500/30">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-heading uppercase text-amber-300 font-bold tracking-wider block">
                LỜI GIẢI ĐỀ TÀI
              </span>
              <h3 className="font-heading text-base font-bold text-white">
                STAYEA AI Concierge 24/7
              </h3>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-200">
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p>
                <strong>Tư vấn tự nhiên:</strong> Hiểu rõ ngữ cảnh câu hỏi dài, nhu cầu phối hợp combo phòng và xe.
              </p>
            </div>

            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p>
                <strong>Tra cứu kho thật:</strong> Tự động cập nhật phòng trống, giá xe niêm yết từ PostgreSQL.
              </p>
            </div>

            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p>
                <strong>Tự động lên đơn:</strong> Function Calling tạo đơn giữ chỗ tức thì, chuyển tiếp Admin duyệt.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
