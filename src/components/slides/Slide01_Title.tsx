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

export const Slide01_Title: React.FC<{ isActive: boolean }> = () => {
  // Interactive service tabs showcasing the STAYEA ecosystem
  const [activeService, setActiveService] = useState<number>(0)

  const services = [
    {
      title: "Biệt Thự Ven Biển 5 Sao",
      tag: "LƯU TRÚ LUXURY",
      image: "/images/villa.jpg",
      sub: "Khu biệt thự nghỉ dưỡng cao cấp view biển Phú Quốc, bể bơi vô cực riêng.",
      metric: "Chính xác kho phòng 100%",
    },
    {
      title: "Xe Tự Lái 4-7 Chỗ",
      tag: "VẬN CHUYỂN VIP",
      image: "/images/car.jpg",
      sub: "Đưa đón sân bay Phú Quốc, bàn giao xe tại resort trong vòng 30 phút.",
      metric: "Tự động lên phiếu giữ xe",
    },
    {
      title: "Tour Cano 4 Đảo Nam Phú Quốc",
      tag: "TRẢI NGHIỆM ĐỘC BẢN",
      image: "/images/cano.jpg",
      sub: "Lặn ngắm san hô Hòn Mây Rút, chụp flycam, tư vấn lịch trình theo con nước.",
      metric: "Điều phối tour thông minh",
    },
  ]

  const currentSvc = services[activeService]

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Top Header Tagline with 3D Depth */}
      <motion.div
        initial={{ opacity: 0, y: -20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="relative z-10 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] animate-pulse" />
          <span className="text-xs sm:text-sm md:text-base font-heading font-black tracking-[0.25em] text-emerald-300 uppercase">
            BÁO CÁO ĐỒ ÁN 1 · KHOA CÔNG NGHỆ THÔNG TIN
          </span>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-mono flex items-center gap-2 shadow-xl backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span className="font-semibold">STAYEA AI Concierge v1.0</span>
        </motion.div>
      </motion.div>

      {/* Main Split Body: Left Typography & Stats | Right 3D Interactive Showcase */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 2xl:gap-16 my-auto items-center">
        {/* Left Column (7 cols): Giant Title, Value Pillars & Stats */}
        <div className="lg:col-span-7 space-y-5 xl:space-y-6">
          {/* Main Giant Title with 3D Morph Stagger */}
          <motion.div
            initial={{ opacity: 0, x: -35, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-heading font-semibold mb-3 shadow-md backdrop-blur-md">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>Đề tài Đồ án 1 · Kỹ Thuật Phần Mềm</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.02] gold-gradient-text-pure">
              CHATBOT AI
            </h1>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mt-1 drop-shadow-2xl">
              Chăm Sóc Khách Hàng
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium tracking-wide mt-3 leading-relaxed max-w-3xl">
              Hệ thống Trợ lý ảo Du lịch & Tự động điều phối dịch vụ độc bản trên nền tảng{" "}
              <strong className="text-amber-300 font-bold">STAYEA Phú Quốc</strong> kết hợp cổng định tuyến{" "}
              <strong className="text-emerald-300 font-bold">AI 9router Gateway</strong>.
            </p>
          </motion.div>

          {/* 3 Value Pillars with Interactive 3D Lift */}
          <motion.div
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.2 }}
            className="space-y-2.5 pt-1"
          >
            {[
              {
                letter: "01",
                text: "Tư Vấn Tự Nhiên & Chuẩn 5 Sao",
                sub: "Phong cách phục vụ ân cần (Luxury Hospitality Tone), am hiểu tường tận hệ sinh thái nghỉ dưỡng.",
              },
              {
                letter: "02",
                text: "Cổng Điều Phối AI 9router Gateway",
                sub: "Độc lập, bảo mật API Key, cân bằng tải đa mô hình và chuẩn hóa phản hồi Real-time Streaming SSE.",
              },
              {
                letter: "03",
                text: "Function Calling & Tự Động Tạo Phiếu Giữ Chỗ",
                sub: "Tự động trích xuất thông tin khách và khởi tạo đơn đặt sơ bộ vào cơ sở dữ liệu PostgreSQL.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-400/50 transition-all duration-300 shadow-md backdrop-blur-md cursor-pointer group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-amber-500/20 border border-emerald-400/50 flex items-center justify-center shrink-0 text-emerald-300 font-heading font-black text-sm shadow-[0_0_15px_rgba(52,211,153,0.3)] group-hover:scale-110 transition-transform">
                  {item.letter}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-heading font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                    {item.text}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-snug mt-0.5">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Metric Highlights with 3D Pill Elevation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.3 }}
            className="grid grid-cols-3 gap-3.5 pt-1"
          >
            <div className="canva-stat-card p-3.5 sm:p-4 rounded-2xl hover:border-amber-400/60 transition-colors">
              <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-black gold-gradient-text block leading-none mb-1">
                &lt; 1.2s
              </span>
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-wider text-amber-200/90 uppercase block">
                ĐỘ TRỄ PHẢN HỒI
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Qua 9router Gateway
              </span>
            </div>

            <div className="canva-stat-card p-3.5 sm:p-4 rounded-2xl hover:border-amber-400/60 transition-colors">
              <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-black gold-gradient-text block leading-none mb-1">
                100%
              </span>
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-wider text-amber-200/90 uppercase block">
                CHÍNH XÁC KHO GIÁ
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Chống ảo giác AI
              </span>
            </div>

            <div className="canva-stat-card p-3.5 sm:p-4 rounded-2xl hover:border-emerald-400/60 transition-colors">
              <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-black emerald-gradient-text block leading-none mb-1">
                24 / 7
              </span>
              <span className="text-[11px] sm:text-xs font-heading font-bold tracking-wider text-emerald-300 uppercase block">
                TỰ ĐỘNG HÓA
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400">
                Chốt đơn tức thì
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column (5 cols): 3D Interactive Showcase with Real Images & Specular Light */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
          transition={{ type: "spring", stiffness: 180, damping: 24, delay: 0.25 }}
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
            {/* Interactive Service Switcher Ribbon on Top */}
            <div className="p-2.5 bg-black/40 border-b border-white/10 flex items-center gap-1.5 justify-between">
              {services.map((svc, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setActiveService(sIdx)}
                  className={`flex-1 py-1 px-2 rounded-xl text-[11px] font-heading font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    activeService === sIdx
                      ? "bg-gradient-to-r from-emerald-500/30 to-amber-500/30 text-amber-300 border border-amber-400/50 shadow-md"
                      : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span className="truncate">{svc.tag}</span>
                </button>
              ))}
            </div>

            {/* Dynamic Morphing Image Showcase */}
            <div className="relative h-60 sm:h-68 md:h-72 lg:h-80 xl:h-88 w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSvc.image}
                  src={currentSvc.image}
                  alt={currentSvc.title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#062429] via-transparent to-black/30 pointer-events-none" />

              {/* Floating 3D Pill on Image */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Phú Quốc Sanctuary</span>
              </div>

              {/* Dynamic Service Title on Image */}
              <div className="absolute bottom-3.5 left-4 right-4">
                <span className="text-[11px] font-heading font-bold text-amber-300 uppercase tracking-widest block mb-0.5">
                  {currentSvc.tag}
                </span>
                <h3 className="text-white font-heading font-black text-lg sm:text-xl leading-tight">
                  {currentSvc.title}
                </h3>
              </div>
            </div>

            {/* Bottom Card Specs & AI Feature Highlights */}
            <div className="p-5 space-y-3.5">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                <span className="text-slate-400 font-medium">Khả năng AI:</span>
                <span className="text-emerald-300 font-bold font-mono text-xs sm:text-sm">
                  {currentSvc.metric}
                </span>
              </div>

              {/* 2 Big Architecture / Security Pills */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block font-heading uppercase tracking-wider mb-0.5">
                    KIẾN TRÚC
                  </span>
                  <span className="text-amber-300 font-black font-mono text-xs sm:text-sm">
                    Agentic + 9router
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block font-heading uppercase tracking-wider mb-0.5">
                    BẢO MẬT
                  </span>
                  <span className="text-emerald-300 font-black font-mono text-xs sm:text-sm">
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
