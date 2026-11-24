import React from "react"
import { motion } from "motion/react"
import { Database, ShieldCheck, Check, AlertCircle, FileText, Code } from "lucide-react"

export const Slide06_CatalogInjection: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
          <span>06 / KỸ THUẬT CỐT LÕI</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Dynamic Catalog Injection <span className="text-gradient-emerald">& Chống Ảo Giác AI</span>
        </h2>
        <p className="text-sm text-slate-300 mt-1">
          Kỹ thuật tiêm danh mục dịch vụ thời gian thực từ cơ sở dữ liệu vào System Prompt giúp AI luôn nói đúng giá và đúng sản phẩm.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
        {/* Left: Code / Prompt Snippet */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="p-5 rounded-2xl bg-[#031517] border border-emerald-500/30 flex flex-col justify-between font-mono text-[11px]"
        >
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-emerald-500/20 text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                <Code className="w-3.5 h-3.5" />
                formatDynamicCatalogPrompt()
              </span>
              <span className="text-[10px] text-slate-500">PostgreSQL ➔ Prompt Context</span>
            </div>

            <div className="space-y-2 text-slate-300 overflow-x-auto">
              <p className="text-slate-500">// 1. Bơm danh mục thực tế đang mở bán</p>
              <p className="text-emerald-400">DANH MỤC DỊCH VỤ THỰC TẾ (ĐỒNG BỘ REAL-TIME):</p>
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-[10px] space-y-1 text-emerald-200">
                <p>1. [MÃ: svc_villa_01] "Sunset Luxury Villa" — 3.500.000 ₫/đêm (Bãi Trường)</p>
                <p>2. [MÃ: svc_car_02] "Mitsubishi Xpander 7 chỗ" — 1.200.000 ₫/ngày (Tự lái)</p>
                <p>3. [MÃ: svc_tour_03] "Tour cano 4 đảo VIP" — 1.150.000 ₫/khách (An Thới)</p>
              </div>

              <p className="text-slate-500 pt-1">// 2. Ràng buộc pháp lý & quy tắc an toàn</p>
              <div className="p-2 rounded-lg bg-red-950/30 border border-red-500/20 text-[10px] text-red-200 space-y-1">
                <p>⚠️ "BẠN CHỈ ĐƯỢC TƯ VẤN CÁC DỊCH VỤ TRÊN."</p>
                <p>⚠️ "TUYỆT ĐỐI KHÔNG TỰ BỊA ĐẶT DỊCH VỤ HOẶC TỰ Ý GIẢM GIÁ NIÊM YẾT."</p>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-emerald-500/10 text-[10px] text-slate-400">
            stayea-ai-agent.service.ts #L395-L495
          </div>
        </motion.div>

        {/* Right: Benefits & Architecture */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-between space-y-4"
        >
          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
            <h3 className="font-bold text-white text-sm flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              1. Triệt Tiêu Hiện Tượng Ảo Giác (Zero-Hallucination)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mô hình LLM thông thường hay tự bịa giá phòng rẻ hơn hoặc hứa hẹn khuyến mãi không có thực. Bằng việc ép chặt ngữ cảnh theo danh mục Database, STAYEA AI cam kết <strong>100% thông tin tư vấn là chính xác</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#072428] border border-emerald-500/20">
            <h3 className="font-bold text-white text-sm flex items-center gap-2 mb-1.5">
              <Database className="w-4 h-4 text-cyan-400" />
              2. Không Cần Huấn Luyện Lại Mô Hình (Zero Retraining)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Khi đối tác thêm Villa mới hoặc tăng giá thuê xe mùa lễ hội, hệ thống tự động cập nhật ngay lập tức vào phiên chat kế tiếp mà <strong>không cần fine-tuning tốn kém</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200">
            💡 <strong>Tối ưu chi phí Token:</strong> Hàm lọc thông minh chỉ chọn các dịch vụ có cờ `active = true` và rút gọn thành định dạng Markdown cô đọng, giữ tổng Prompt dưới 1.500 tokens.
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-4">
        <span>Đồ án 1 • Giải pháp Chống Ảo Giác</span>
        <span className="text-emerald-400">Kết quả: Đảm bảo độ tin cậy tuyệt đối trong giao dịch thương mại</span>
      </div>
    </div>
  )
}
