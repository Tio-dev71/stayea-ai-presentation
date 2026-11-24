import React from "react"
import { motion } from "motion/react"
import { ShieldCheck, Database, Code, CheckCircle2 } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide06_CatalogInjection: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs md:text-sm font-cinzel font-bold tracking-[0.25em] text-amber-300 uppercase">
            06 · KỸ THUẬT CỐT LÕI
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text tracking-tight mt-1">
          Dynamic Catalog Injection & Chống Ảo Giác
        </h2>
        <p className="text-xs md:text-sm text-slate-300 mt-1">
          Giải pháp tiêm danh mục dịch vụ thực tế từ cơ sở dữ liệu vào System Prompt giúp AI luôn nói đúng giá và đúng sản phẩm.
        </p>
      </div>

      {/* Main Split */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left: Code Snippet Card */}
        <div className="lg:col-span-6 p-5 rounded-3xl bg-black/50 border border-amber-500/30 backdrop-blur-md font-mono text-[11px]">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-amber-500/20 text-slate-400">
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold font-mono">
              <Code className="w-4 h-4" />
              formatDynamicCatalogPrompt()
            </span>
            <span className="text-[10px] text-slate-500">PostgreSQL ➔ Prompt Context</span>
          </div>

          <div className="space-y-2 text-slate-300">
            <p className="text-slate-500">// Bơm danh mục thực tế đang mở bán</p>
            <p className="text-amber-400 font-bold">DANH MỤC THỰC TẾ (ĐỒNG BỘ REAL-TIME):</p>
            <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-500/20 text-[10px] space-y-1 text-amber-200">
              <p>1. [MÃ: svc_01] "Sunset Luxury Villa" — 3.500.000 ₫/đêm (Bãi Trường)</p>
              <p>2. [MÃ: svc_02] "Mitsubishi Xpander 7 chỗ" — 1.200.000 ₫/ngày (Tự lái)</p>
              <p>3. [MÃ: svc_03] "Tour cano 4 đảo VIP" — 1.150.000 ₫/khách (An Thới)</p>
            </div>

            <p className="text-slate-500 pt-1">// Ràng buộc an toàn & pháp lý</p>
            <div className="p-2.5 rounded-2xl bg-red-950/30 border border-red-500/20 text-[10px] text-red-200 space-y-1">
              <p>⚠️ "BẠN CHỈ ĐƯỢC TƯ VẤN CÁC DỊCH VỤ TRÊN."</p>
              <p>⚠️ "TUYỆT ĐỐI KHÔNG TỰ Ý HẠ GIÁ HOẶC BỊA ĐẶT DỊCH VỤ."</p>
            </div>
          </div>
        </div>

        {/* Right: Value Pillars & Stat Cards */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-5 rounded-3xl bg-black/40 border border-amber-500/30 backdrop-blur-md">
            <h3 className="font-playfair font-bold text-white text-base flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Triệt Tiêu Ảo Giác (Zero-Hallucination)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mô hình LLM thông thường hay tự bịa giá rẻ hơn để làm hài lòng người hỏi. Bằng việc ép chặt ngữ cảnh theo danh mục Database, STAYEA AI cam kết <strong>100% thông tin tư vấn là chính xác</strong>.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-black/40 border border-amber-500/30 backdrop-blur-md">
            <h3 className="font-playfair font-bold text-white text-base flex items-center gap-2 mb-1.5">
              <Database className="w-5 h-5 text-amber-400" />
              Cập Nhật Tức Thì Không Cần Huấn Luyện Lại
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Khi đối tác thêm Villa mới hoặc tăng giá xe mùa cao điểm, hệ thống cập nhật ngay lập tức vào phiên chat kế tiếp mà <strong>không cần fine-tuning tốn kém</strong>.
            </p>
          </div>

          {/* Stat Box */}
          <div className="canva-stat-card p-4">
            <span className="font-playfair text-3xl font-black gold-gradient-text block leading-none mb-1">
              &lt; 1.500
            </span>
            <span className="text-[10px] font-cinzel font-bold tracking-wider text-amber-200 uppercase block">
              TOKENS TỐI ƯU CHO PROMPT
            </span>
            <span className="text-[10px] text-slate-400">Rút gọn Markdown cô đọng, giảm 60% chi phí token</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
        <span>Đồ án 1 • Giải pháp Chống Ảo Giác</span>
        <span className="text-amber-300 font-cinzel">PHÍM MŨI TÊN (➔) ĐỂ CHUYỂN SLIDE</span>
      </div>
    </div>
  )
}
