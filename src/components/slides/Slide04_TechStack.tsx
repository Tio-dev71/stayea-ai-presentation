import React from "react"
import { motion } from "motion/react"
import { Cpu, Server, Zap, CheckCircle2, Shield, Layers } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import {
  morphTopVariants,
  morphLeftVariants,
  morphRightVariants,
} from "../MorphTransition"

export const Slide04_TechStack: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16 overflow-hidden select-none">
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
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm md:text-base font-heading font-bold tracking-[0.25em] text-amber-300 uppercase">
            05 · CÔNG NGHỆ & HẠ TẦNG KỸ THUẬT
          </span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black gold-gradient-text tracking-tight mt-1.5">
          Kiến Trúc Độc Lập & Cổng AI 9router
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mt-2 max-w-4xl leading-relaxed">
          Mô hình Full-stack Monorepo tách biệt rõ ràng giữa Client Widget, NestJS Orchestrator và AI Gateway trung gian.
        </p>
      </motion.div>

      {/* Main Split Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 my-auto items-center">
        {/* Left Col (7 cols): 3 Tiers Architecture */}
        <motion.div
          variants={morphLeftVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-7 space-y-4 xl:space-y-5"
        >
          {[
            {
              tier: "TẦNG 1: FRONTEND WIDGET",
              title: "Next.js 15 & React 19 UI",
              desc: "Giao diện chat sang trọng, tối ưu hiển thị Mobile/Desktop, hỗ trợ Markdown và hiệu ứng Morphing mượt mà.",
              badge: "SSR / SSG",
              tech: ["Tailwind CSS", "Shadcn UI", "Lucide Icons"],
            },
            {
              tier: "TẦNG 2: BACKEND ORCHESTRATOR",
              title: "NestJS & Drizzle ORM (PostgreSQL)",
              desc: "Quản lý business logic, lọc dữ liệu dynamic catalog từ DB, thực thi function calling và bảo vệ API qua Throttler Guard.",
              badge: "Domain-Driven",
              tech: ["NestJS 10", "Drizzle ORM", "PostgreSQL"],
            },
            {
              tier: "TẦNG 3: CỔNG AI GATEWAY",
              title: "AI 9router Proxy Engine (Port 20128)",
              desc: "Chuẩn hóa giao tiếp OpenAI Chat Completions, cân bằng tải model, quản lý bảo mật token và xử lý luồng Streaming SSE.",
              badge: "High Concurrency",
              tech: ["OpenAI Spec", "Gemini 2.5 Flash", "SSE Streaming"],
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.05] border border-amber-500/25 hover:border-amber-400/50 backdrop-blur-md transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-heading font-bold tracking-widest text-amber-300 uppercase">
                  {item.tier}
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-amber-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-1.5 leading-relaxed">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono px-2.5 py-1 rounded bg-black/40 border border-white/10 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Col (5 cols): AI 9router Focus Card */}
        <motion.div
          variants={morphRightVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#082a30]/95 to-[#031518]/98 border-2 border-amber-400/40 shadow-2xl space-y-5 backdrop-blur-2xl"
        >
          <div className="flex items-center gap-4 pb-4 border-b border-amber-500/20">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black shadow-lg shadow-amber-500/40">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 fill-black" />
            </div>
            <div>
              <span className="text-xs font-heading uppercase text-amber-300 font-bold tracking-wider block mb-0.5">
                TRÁI TIM HẠ TẦNG
              </span>
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-black text-white">
                Tại Sao Chọn AI 9router?
              </h3>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-300">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-black/50 border border-white/10">
              <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-heading mb-0.5">Bảo mật Token Tuyệt Đối:</strong>
                Backend không gọi trực tiếp ra cloud công cộng, khóa bảo mật được cất giữ an toàn trên gateway.
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-black/50 border border-white/10">
              <Layers className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-heading mb-0.5">Độc lập Nhà Cung Cấp:</strong>
                Chuyển đổi linh hoạt giữa Google Gemini, Anthropic Claude hay mô hình nguồn mở mà không cần sửa code backend.
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-black/50 border border-white/10">
              <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-heading mb-0.5">Tối ưu Tốc Độ TTFT:</strong>
                Độ trễ bắt đầu phát sinh từ (Time to First Token) đạt dưới 1.2s, tạo cảm giác đàm thoại tức thì.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
