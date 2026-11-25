import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Sparkles,
  ArrowRight,
  Users,
  ShieldCheck,
  Zap,
  Bot,
  Star,
  Compass,
  Layers,
  CheckCircle2,
} from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import { Card3D } from "../Card3D"
import {
  morphTopVariants,
  morphLeftVariants,
  morphRightVariants,
  morphBottomVariants,
} from "../MorphTransition"

export const Slide01_Title: React.FC<{ isActive: boolean }> = () => {
  // Interactive service tabs showcasing a real-world case study (Tourism & Hospitality CSKH)
  const [activeService, setActiveService] = useState<number>(0)

  const services = [
    {
      title: "Biệt Thự Nghỉ Dưỡng Ven Biển",
      tag: "LƯU TRÚ VILLA",
      image: "/images/villa.jpg",
      sub: "Hệ thống biệt thự nghỉ dưỡng cao cấp view biển, hồ bơi riêng, tự động tra cứu kho phòng trống theo thời gian thực.",
      metric: "Chính xác kho phòng 100%",
    },
    {
      title: "Dịch Vụ Thuê Xe Tự Lái 4-7 Chỗ",
      tag: "XE TỰ LÁI",
      image: "/images/car.jpg",
      sub: "Đưa đón sân bay, giao nhận xe tận nơi, tự động kích hoạt function calling để lên phiếu giữ xe sơ bộ vào database.",
      metric: "Tự động lên phiếu giữ xe",
    },
    {
      title: "Tour Trải Nghiệm & Cano Tham Quan Đảo",
      tag: "TOUR TRẢI NGHIỆM",
      image: "/images/cano.jpg",
      sub: "Lặn ngắm san hô, chụp flycam, tư vấn lịch trình chi tiết theo con nước và dự báo thời tiết đảo.",
      metric: "Điều phối tour thông minh",
    },
  ]

  const currentSvc = services[activeService]

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-14 pb-16 sm:pb-16 lg:pb-18 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Top Header Tagline */}
      <motion.div
        variants={morphTopVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10 flex items-center justify-between mb-1"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] animate-pulse" />
          <span className="text-xs sm:text-sm font-heading font-black tracking-[0.22em] text-emerald-300 uppercase">
            BÁO CÁO ĐỒ ÁN 1 · KHOA CÔNG NGHỆ THÔNG TIN
          </span>
        </div>
      </motion.div>

      {/* Main Split Body: Left Typography & Stats | Right 3D Interactive Showcase */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 2xl:gap-14 my-auto items-center">
        {/* Left Column (7 cols): Title, Value Pillars & Stats optimized for 14-inch & large screens */}
        <motion.div
          variants={morphLeftVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-7 space-y-3.5 xl:space-y-4 2xl:space-y-6"
        >
          {/* Main Giant Title */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-heading font-semibold mb-2 shadow-md backdrop-blur-md">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>Đề tài Đồ án 1 · Kỹ Thuật Phần Mềm</span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl xl:text-7xl 2xl:text-8xl font-black leading-[0.98] gold-gradient-text-pure">
              CHATBOT AI
            </h1>

            <h2 className="font-display text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold text-[#f4eed9] mt-1.5 mb-2 leading-[1.06]">
              Chăm Sóc Khách Hàng
            </h2>

            <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-slate-200 font-medium tracking-wide mt-2 mb-1 leading-relaxed max-w-2xl 2xl:max-w-3xl">
              Hệ thống Trợ lý ảo Chăm sóc khách hàng tự động đa kịch bản với khả năng tùy biến linh hoạt qua System Prompt, kết hợp cổng định tuyến{" "}
              <strong className="text-emerald-300 font-bold">AI 9router Gateway</strong> và tự động hóa quy trình nghiệp vụ.
            </p>
          </div>

          {/* 3 Value Pillars */}
          <div className="space-y-2.5 xl:space-y-3 2xl:space-y-4 pt-1">
            {[
              {
                letter: "01",
                text: "Tư Vấn Tự Nhiên & Cá Nhân Hóa Đa Ngành",
                sub: "Dễ dàng tùy biến ngữ cảnh, văn phong phục vụ và quy tắc ứng xử qua System Prompt phù hợp từng doanh nghiệp.",
              },
              {
                letter: "02",
                text: "Cổng Điều Phối AI 9router Gateway",
                sub: "Độc lập, bảo mật API Key, cân bằng tải đa mô hình và chuẩn hóa phản hồi thời gian thực.",
              },
              {
                letter: "03",
                text: "Tự Động Chốt Đơn & Khởi Tạo Phiếu Giữ Chỗ",
                sub: "Tự động trích xuất thông tin khách và khởi tạo đơn đặt sơ bộ trực tiếp vào hệ thống quản trị.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3 sm:p-3.5 2xl:p-4.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-400/50 transition-all duration-300 shadow-md backdrop-blur-md cursor-pointer group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-amber-500/20 border border-emerald-400/50 flex items-center justify-center shrink-0 text-emerald-300 font-heading font-black text-xs sm:text-sm shadow-[0_0_15px_rgba(52,211,153,0.3)] group-hover:scale-110 transition-transform">
                  {item.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-heading font-bold text-white tracking-wide mb-0.5 leading-snug group-hover:text-amber-300 transition-colors">
                    {item.text}
                  </h4>
                  <p className="text-xs sm:text-[13px] 2xl:text-sm text-slate-300 leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 2xl:gap-6 pt-1 2xl:pt-3">
            <div className="canva-stat-card p-3 sm:p-3.5 2xl:p-5 rounded-2xl hover:border-amber-400/60 transition-colors">
              <span className="font-heading text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-black gold-gradient-text block leading-none mb-1.5">
                &lt; 1.2s
              </span>
              <span className="text-[10px] sm:text-xs font-heading font-bold tracking-wider text-amber-200/90 uppercase block mb-0.5 leading-normal">
                ĐỘ TRỄ PHẢN HỒI
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 leading-relaxed">
                Qua 9router Gateway
              </span>
            </div>

            <div className="canva-stat-card p-3 sm:p-3.5 2xl:p-5 rounded-2xl hover:border-amber-400/60 transition-colors">
              <span className="font-heading text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-black gold-gradient-text block leading-none mb-1.5">
                100%
              </span>
              <span className="text-[10px] sm:text-xs font-heading font-bold tracking-wider text-amber-200/90 uppercase block mb-0.5 leading-normal">
                CHÍNH XÁC KHO GIÁ
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 leading-relaxed">
                Chống ảo giác AI
              </span>
            </div>

            <div className="canva-stat-card p-3 sm:p-3.5 2xl:p-5 rounded-2xl hover:border-emerald-400/60 transition-colors">
              <span className="font-heading text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl font-black emerald-gradient-text block leading-none mb-1.5">
                24 / 7
              </span>
              <span className="text-[10px] sm:text-xs font-heading font-bold tracking-wider text-emerald-300 uppercase block mb-0.5 leading-normal">
                TỰ ĐỘNG HÓA
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 leading-relaxed">
                Chốt đơn tức thì
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column (5 cols): Crisp High-Quality Cover Image with 3D Tilt */}
        <motion.div
          variants={morphRightVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-5 relative w-full flex items-center justify-center"
        >
          {/* Ambient 3D Glow Aura */}
          <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-tr from-emerald-500/30 via-amber-500/20 to-transparent blur-3xl pointer-events-none" />

          {/* 3D Tilt Card with dynamic cursor glare reflection */}
          <Card3D
            intensity={12}
            glare={true}
            className="w-full rounded-[28px] overflow-hidden bg-gradient-to-b from-[#062429]/95 to-[#021114]/98 border-2 border-emerald-500/40 shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
          >
            {/* Context Badge: Real-World Case Study Highlight */}
            <div className="px-4 py-2 bg-emerald-950/80 border-b border-emerald-500/30 flex items-center justify-between text-[11px] font-mono">
              <span className="flex items-center gap-1.5 font-bold text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                VÍ DỤ ÁP DỤNG THỰC TẾ
              </span>
              <span className="text-emerald-300 font-semibold">Hệ Thống Dịch Vụ Du Lịch</span>
            </div>

            {/* Interactive Service Switcher Ribbon on Top */}
            <div className="p-3 bg-black/50 border-b border-white/10 flex items-center gap-2 justify-between">
              {services.map((svc, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setActiveService(sIdx)}
                  className={`flex-1 py-1.5 px-2.5 rounded-xl text-[11px] font-heading font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    activeService === sIdx
                      ? "bg-gradient-to-r from-emerald-500/35 to-amber-500/35 text-amber-300 border border-amber-400/50 shadow-md"
                      : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span className="truncate">{svc.tag}</span>
                </button>
              ))}
            </div>

            {/* Dynamic Morphing Image Showcase with Crisp Object-Cover */}
            <div className="relative h-52 sm:h-56 md:h-60 lg:h-64 xl:h-64 2xl:h-[400px] w-full overflow-hidden bg-[#031518]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSvc.image}
                  src={currentSvc.image}
                  alt={currentSvc.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full h-full object-cover object-center"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#062429] via-transparent to-black/30 pointer-events-none" />

              {/* Floating 3D Pill on Image */}
              <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ví dụ áp dụng: CSKH Du Lịch & Nghỉ Dưỡng</span>
              </div>

              {/* Dynamic Service Title on Image */}
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[11px] font-heading font-bold text-amber-300 uppercase tracking-widest block mb-0.5">
                  {currentSvc.tag}
                </span>
                <h3 className="text-white font-heading font-black text-base sm:text-lg leading-snug">
                  {currentSvc.title}
                </h3>
              </div>
            </div>

            {/* Bottom Card Specs & AI Feature Highlights */}
            <div className="p-3.5 sm:p-4 2xl:p-5 space-y-2.5 2xl:space-y-4">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                <span className="text-slate-400 font-medium">Khả năng AI:</span>
                <span className="text-emerald-300 font-bold font-mono text-xs">
                  {currentSvc.metric}
                </span>
              </div>

              {/* 2 Big Architecture / Security Pills */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-2.5 2xl:p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block font-heading uppercase tracking-wider mb-0.5 leading-normal">
                    KIẾN TRÚC
                  </span>
                  <span className="text-amber-300 font-black font-mono text-xs">
                    Agentic + 9router
                  </span>
                </div>
                <div className="p-2.5 2xl:p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block font-heading uppercase tracking-wider mb-0.5 leading-normal">
                    BẢO MẬT
                  </span>
                  <span className="text-emerald-300 font-black font-mono text-xs">
                    Human-in-the-Loop
                  </span>
                </div>
              </div>

              {/* Team teaser note */}
              <div className="flex items-center justify-between pt-0.5 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-400 font-medium">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  Nhóm thực hiện: 4 thành viên
                </span>
                <span className="text-amber-300 font-heading font-bold flex items-center gap-1">
                  Đồ án 1
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </div>
  )
}
