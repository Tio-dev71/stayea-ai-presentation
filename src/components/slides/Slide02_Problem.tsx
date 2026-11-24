import React from "react"
import { motion } from "motion/react"
import { AlertTriangle, Clock, Bot, XCircle, CheckCircle2, TrendingDown } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide02_Problem: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm md:text-base font-heading font-bold tracking-[0.25em] text-amber-300 uppercase">
            03 · THỰC TRẠNG & BỐI CẢNH NGHIÊN CỨU
          </span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black gold-gradient-text tracking-tight mt-1.5">
          Hạn Chế Của Chatbot Kịch Bản Cũ
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mt-2 max-w-4xl leading-relaxed">
          Doanh nghiệp du lịch Phú Quốc vừa tốn chi phí nhân sự trực ca đêm, vừa đánh mất doanh thu vì độ trễ phản hồi vào các khung giờ vàng.
        </p>
      </div>

      {/* Main Split Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 my-auto items-center">
        {/* Left Col (7 cols): Pain Points with Circular Badges */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-4">
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
                className="flex items-start gap-4 group p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-red-500/25 backdrop-blur-md"
              >
                <div className="w-11 h-11 rounded-2xl bg-red-500/20 border border-red-400/40 flex items-center justify-center shrink-0 text-red-300 text-lg font-bold shadow-[0_0_12px_rgba(239,68,68,0.35)]">
                  {item.letter}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-heading font-bold text-white tracking-wide">{item.title}</h4>
                  <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Two Large Stat Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-1">
            <div className="canva-stat-card p-5 sm:p-6">
              <span className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-red-400 block leading-none mb-1.5">
                45%
              </span>
              <span className="text-xs sm:text-sm font-heading font-bold tracking-wider text-red-200 uppercase block mb-1">
                TỶ LỆ RỚT KHÁCH BAN ĐÊM
              </span>
              <span className="text-xs sm:text-sm text-slate-400">Do không có nhân sự phản hồi tức thì</span>
            </div>

            <div className="canva-stat-card p-5 sm:p-6">
              <span className="font-heading text-4xl sm:text-5xl md:text-6xl font-black gold-gradient-text block leading-none mb-1.5">
                80%
              </span>
              <span className="text-xs sm:text-sm font-heading font-bold tracking-wider text-amber-200 uppercase block mb-1">
                CÂU HỎI LẶP LẠI (FAQ)
              </span>
              <span className="text-xs sm:text-sm text-slate-400">Về vị trí villa, giá xe, lịch tour cano</span>
            </div>
          </div>
        </div>

        {/* Right Col (5 cols): Solution Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#07252a]/95 to-[#041619]/98 border-2 border-amber-400/40 shadow-2xl space-y-5 backdrop-blur-2xl"
        >
          <div className="flex items-center gap-4 pb-4 border-b border-amber-500/20">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black shadow-lg shadow-amber-500/40">
              <Bot className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div>
              <span className="text-xs font-heading uppercase text-amber-300 font-bold tracking-wider block mb-0.5">
                LỜI GIẢI ĐỀ TÀI
              </span>
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-black text-white">
                STAYEA AI Concierge 24/7
              </h3>
            </div>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm md:text-base text-slate-200">
            <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p>
                <strong className="text-emerald-300">Tư vấn tự nhiên:</strong> Hiểu rõ ngữ cảnh câu hỏi dài, nhu cầu phối hợp combo phòng và xe.
              </p>
            </div>

            <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p>
                <strong className="text-emerald-300">Tra cứu kho thật:</strong> Tự động cập nhật phòng trống, giá xe niêm yết từ PostgreSQL.
              </p>
            </div>

            <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p>
                <strong className="text-emerald-300">Tự động lên đơn:</strong> Function Calling tạo đơn giữ chỗ tức thì, chuyển tiếp Admin duyệt.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
