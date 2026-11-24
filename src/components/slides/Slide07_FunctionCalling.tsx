import React from "react"
import { motion } from "motion/react"
import { Wrench, CheckCircle2, ArrowRight, FileCheck, Layers, Bot } from "lucide-react"

export const Slide07_FunctionCalling: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
          <span>07 / TỰ ĐỘNG HÓA NGHIỆP VỤ</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Cơ Chế Function Calling: <span className="text-gradient-emerald">Tự Động Sinh Đơn Hàng</span>
        </h2>
        <p className="text-sm text-slate-300 mt-1">
          Chuyển hóa văn bản tự nhiên thành lời gọi hàm có cấu trúc, tự động ghi nhận phiếu đặt chỗ vào Database.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
        {/* Tool Definition 1: search_services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-5 rounded-2xl bg-[#061e22] border border-emerald-500/30 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-emerald-500/20">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-emerald-400" />
                <span className="font-mono font-bold text-white text-xs">tool: search_services</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-teal-500/20 text-teal-300 font-mono">
                Query Tool
              </span>
            </div>
            <p className="text-xs text-slate-300 mb-3">
              Tra cứu dịch vụ theo bộ lọc phân loại (`homestay`, `transport`, `tour`), địa điểm (Dương Đông, An Thới) và từ khóa tìm kiếm.
            </p>
            <div className="p-3 bg-[#031315] rounded-xl border border-emerald-900/60 font-mono text-[10px] text-slate-300 space-y-1">
              <span className="text-slate-500">// Parameters:</span>
              <p><span className="text-teal-400">type:</span> "homestay" | "transport" | "tour"</p>
              <p><span className="text-teal-400">location:</span> string (khu vực)</p>
              <p><span className="text-teal-400">search:</span> string (từ khóa: "hồ bơi", "7 chỗ")</p>
            </div>
          </div>

          <div className="mt-3 text-[11px] text-emerald-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Kích hoạt tự động khi khách hỏi chung về dịch vụ</span>
          </div>
        </motion.div>

        {/* Tool Definition 2: create_booking_draft */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-5 rounded-2xl bg-[#092b30] border border-amber-400/40 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-emerald-500/20">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-amber-300" />
                <span className="font-mono font-bold text-white text-xs">tool: create_booking_draft</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-400/20 text-amber-300 font-mono">
                Action Tool (Core)
              </span>
            </div>
            <p className="text-xs text-slate-200 mb-3">
              Kích hoạt khi khách đồng ý chốt lịch. AI trích xuất thực thể để lưu đơn vào hệ thống và phát sinh mã đơn dạng <code>ORD-AI-XXXXXX</code>.
            </p>
            <div className="p-3 bg-[#041a1d] rounded-xl border border-amber-500/30 font-mono text-[10px] text-slate-300 space-y-1">
              <span className="text-slate-500">// Mandatory Arguments:</span>
              <p><span className="text-amber-300">serviceId:</span> ID dịch vụ chính xác từ catalog</p>
              <p><span className="text-amber-300">customerName:</span> Họ tên người đặt</p>
              <p><span className="text-amber-300">customerPhone:</span> Số điện thoại liên hệ</p>
              <p><span className="text-amber-300">startDate:</span> YYYY-MM-DD (ngày bắt đầu)</p>
            </div>
          </div>

          <div className="mt-3 text-[11px] text-amber-200 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Tự động tính tổng tiền & đưa vào hàng chờ Admin</span>
          </div>
        </motion.div>
      </div>

      {/* Safety mechanism note */}
      <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-slate-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-emerald-400 shrink-0" />
          <span><strong>Text-Parser Fallback:</strong> Nếu LLM trả về JSON thuần trong text thay vì cấu trúc tool calling, backend vẫn có regex parser cứu hộ để không làm rơi đơn của khách!</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-4">
        <span>Đồ án 1 • Function Calling Flow</span>
        <span className="text-amber-300">Biến AI thành nhân viên bán hàng số thực thụ</span>
      </div>
    </div>
  )
}
