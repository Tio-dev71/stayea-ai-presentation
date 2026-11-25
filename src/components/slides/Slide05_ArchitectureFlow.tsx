import React from "react"
import { motion } from "motion/react"
import { ArrowRight, Bot, Database, User, Server, Cpu, CheckCircle } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import {
  morphTopVariants,
  morphLeftVariants,
  morphRightVariants,
  morphCenterVariants,
} from "../MorphTransition"

export const Slide05_ArchitectureFlow: React.FC<{ isActive: boolean }> = () => {
  const steps = [
    {
      num: "1",
      actor: "TRẢI NGHIỆM KHÁCH HÀNG",
      title: "Tiếp Nhận Tự Nhiên",
      desc: "Khách nhắn tin trò chuyện tự nhiên như hỏi nhân viên thật, không bị gò bó vào menu kịch bản cứng nhắc.",
      tag: "Giao Tiếp 24/7",
      benefit: "Phản hồi ngay lập tức",
    },
    {
      num: "2",
      actor: "ĐIỂM MẠNH CHỐNG ẢO GIÁC",
      title: "Nạp Dữ Liệu Thực Tế",
      desc: "Hệ thống tự động lấy bảng giá, tồn kho mới nhất và kịch bản phục vụ riêng của doanh nghiệp trước khi trả lời.",
      tag: "Chính Xác 100%",
      benefit: "Không bao giờ nói sai giá",
    },
    {
      num: "3",
      actor: "CỔNG ĐIỀU PHỐI 9ROUTER",
      title: "Phân Tích & Bảo Mật",
      desc: "Định tuyến thông minh tới mô hình AI tối ưu nhất, bảo vệ khóa bí mật và chống phụ thuộc một nhà cung cấp.",
      tag: "Độc Lập Model",
      benefit: "Tốc độ dưới 1.2 giây",
    },
    {
      num: "4",
      actor: "TỰ ĐỘNG HÓA NGHIỆP VỤ",
      title: "Kiểm Tra & Tạo Đơn",
      desc: "Tự động trích xuất thông tin khách hàng, kiểm tra lịch trống và khởi tạo phiếu giữ chỗ sơ bộ an toàn.",
      tag: "Tự Động Chốt Đơn",
      benefit: "Hoạt động cả lúc 2h sáng",
    },
    {
      num: "5",
      actor: "TỐI ƯU CHUYỂN ĐỔI",
      title: "Phản Hồi & Thẻ Xác Nhận",
      desc: "Tổng hợp câu trả lời ân cần đúng phong cách thương hiệu kèm Thẻ Xác Nhận Đơn trực quan giúp khách chốt ngay.",
      tag: "Tăng Tỷ Lệ Chốt",
      benefit: "Sẵn sàng Admin duyệt",
    },
  ]

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-14 pb-16 sm:pb-16 lg:pb-18 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header with Morph Top */}
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
            06 · HỆ THỐNG LÀM ĐƯỢC GÌ?
          </span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-6xl font-black gold-gradient-text tracking-tight mt-1">
          Quy Trình Tư Vấn & Chốt Đơn Khép Kín
        </h2>
        <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-slate-200 mt-1.5 max-w-4xl leading-relaxed">
          Không chỉ trả lời câu hỏi, hệ thống biến cuộc hội thoại thành đơn hàng thực tế một cách chính xác và có kiểm soát.
        </p>
      </motion.div>

      {/* Step Cards Horizontal / Grid with Directional Morph */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 2xl:gap-5 my-auto">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={idx < 2 ? morphLeftVariants : idx === 2 ? morphCenterVariants : morphRightVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="canva-card p-5 sm:p-6 rounded-3xl flex flex-col justify-between relative group hover:border-amber-400/60 transition-all hover:-translate-y-2 shadow-xl"
          >
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-amber-400/20 to-emerald-500/20 border border-amber-400/40 flex items-center justify-center font-heading font-black text-amber-300 text-sm sm:text-base shadow-[0_0_12px_rgba(245,184,56,0.3)]">
                  {step.num}
                </span>
                <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300">
                  {step.tag}
                </span>
              </div>

              <span className="text-xs font-heading uppercase text-amber-300 tracking-wider font-bold block mb-1">
                {step.actor}
              </span>

              <h3 className="font-heading font-bold text-white text-base sm:text-lg group-hover:text-amber-200 transition-colors mb-2 leading-snug">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Micro value line */}
            <div className="pt-4 border-t border-white/10 mt-4 flex items-center gap-1.5 text-xs text-emerald-300 font-medium">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{step.benefit}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
