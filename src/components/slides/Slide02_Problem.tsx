import React from "react"
import { motion } from "motion/react"
import { AlertTriangle, Clock, Bot, XCircle, CheckCircle2, TrendingDown } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import {
  morphTopVariants,
  morphLeftVariants,
  morphRightVariants,
} from "../MorphTransition"

export const Slide02_Problem: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-14 pb-16 sm:pb-16 lg:pb-18 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <motion.div
        variants={morphTopVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.22em] text-amber-300 uppercase">
            03 · THỰC TRẠNG & BỐI CẢNH NGHIÊN CỨU
          </span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-6xl font-black gold-gradient-text tracking-tight mt-1">
          Hạn Chế Của Chatbot Kịch Bản Cũ Trong CSKH
        </h2>
        <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-slate-200 mt-1.5 max-w-4xl leading-relaxed">
          Doanh nghiệp vừa tốn chi phí nhân sự trực ca đêm, vừa đánh mất doanh thu vì độ trễ phản hồi và phản hồi cứng nhắc vào các khung giờ vàng.
        </p>
      </motion.div>

      {/* Main Split Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 my-auto items-center">
        {/* Left Col (7 cols): Pain Points with Circular Badges */}
        <motion.div
          variants={morphLeftVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-7 space-y-3 xl:space-y-4"
        >
          <div className="space-y-2.5 xl:space-y-3">
            {[
              {
                letter: "⚠️",
                title: "Cây kịch bản (Rule-based) cứng nhắc",
                desc: "Khách hỏi lệch một từ là bot báo lỗi 'Xin lỗi tôi không hiểu', gây ức chế và làm gián đoạn cảm xúc.",
              },
              {
                letter: "⏳",
                title: "Quá tải ca đêm & Giờ cao điểm",
                desc: "Khách hàng thường có thói quen tìm kiếm và đặt dịch vụ vào 22h - 2h sáng; nhân viên không thể trực 24/7 tức thì.",
              },
              {
                letter: "📉",
                title: "Tách rời hoàn toàn với Dữ liệu thật",
                desc: "Không thể tự tra cứu tồn kho còn trống hay báo giá chính xác, không có khả năng chốt đơn tạo phiếu giữ chỗ.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 group p-3.5 sm:p-4 2xl:p-5 rounded-2xl bg-white/[0.05] border border-red-500/25 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-400/40 flex items-center justify-center shrink-0 text-red-300 text-base font-bold shadow-[0_0_12px_rgba(239,68,68,0.35)]">
                  {item.letter}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base md:text-lg font-heading font-bold text-white tracking-wide">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Two Large Stat Cards */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-5 pt-0.5">
            <div className="canva-stat-card p-3.5 sm:p-4 2xl:p-6">
              <span className="font-heading text-3xl sm:text-4xl 2xl:text-5xl font-black text-red-400 block leading-none mb-1">
                45%
              </span>
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-wider text-red-200 uppercase block mb-0.5">
                TỶ LỆ RỚT KHÁCH BAN ĐÊM
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400">Do không có nhân sự phản hồi tức thì</span>
            </div>

            <div className="canva-stat-card p-3.5 sm:p-4 2xl:p-6">
              <span className="font-heading text-3xl sm:text-4xl 2xl:text-5xl font-black gold-gradient-text block leading-none mb-1">
                80%
              </span>
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-wider text-amber-200 uppercase block mb-0.5">
                CÂU HỎI LẶP LẠI (FAQ)
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400">Hỏi giá, chính sách, lịch trống dịch vụ</span>
            </div>
          </div>
        </motion.div>

        {/* Right Col (5 cols): Solution Card */}
        <motion.div
          variants={morphRightVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-5 p-5 sm:p-6 2xl:p-8 rounded-3xl bg-gradient-to-b from-[#07252a]/95 to-[#041619]/98 border-2 border-amber-400/40 shadow-2xl space-y-3.5 2xl:space-y-5 backdrop-blur-2xl"
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
                Chatbot AI CSKH Đa Kịch Bản
              </h3>
              <span className="text-[11px] font-mono text-emerald-300">Case Study: Dịch vụ du lịch STAYEA</span>
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
