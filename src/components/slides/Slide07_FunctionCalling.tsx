import React from "react"
import { motion } from "motion/react"
import { Wrench, FileCheck, CheckCircle2, Bot } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide07_FunctionCalling: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs md:text-sm font-cinzel font-bold tracking-[0.25em] text-amber-300 uppercase">
            07 · TỰ ĐỘNG HÓA NGHIỆP VỤ
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text tracking-tight mt-1">
          Cơ Chế Function Calling: Tự Động Sinh Đơn
        </h2>
        <p className="text-xs md:text-sm text-slate-300 mt-1">
          Trích xuất thực thể ngôn ngữ tự nhiên thành lời gọi hàm có cấu trúc, tạo phiếu đặt dịch vụ vào Database.
        </p>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 my-auto items-center">
        {/* Tool 1 */}
        <div className="p-6 rounded-3xl bg-black/40 border border-amber-500/30 backdrop-blur-md flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-amber-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-400/40">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-mono font-bold text-white text-sm">tool: search_services</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-400/30 uppercase">
                Query Tool
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Tra cứu danh mục dịch vụ theo bộ lọc loại hình (homestay, xe tự lái, tour đảo), địa điểm và từ khóa.
            </p>

            <div className="p-3.5 rounded-2xl bg-black/60 border border-emerald-900/60 font-mono text-[11px] text-slate-300 space-y-1.5">
              <span className="text-slate-500">// Parameters (JSON Schema):</span>
              <p><span className="text-teal-300">type:</span> "homestay" | "transport" | "tour"</p>
              <p><span className="text-teal-300">location:</span> "Dương Đông" | "An Thới"</p>
              <p><span className="text-teal-300">search:</span> "hồ bơi", "7 chỗ", "cano"</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-xs text-emerald-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Kích hoạt tự động khi khách hỏi chung về dịch vụ</span>
          </div>
        </div>

        {/* Tool 2 */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#092b30]/90 to-[#041619]/90 border border-amber-400/50 shadow-2xl flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-amber-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-400/40">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="font-mono font-bold text-white text-sm">tool: create_booking_draft</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase">
                Action Tool (Core)
              </span>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed mb-4">
              Kích hoạt khi khách đồng ý chốt lịch. AI trích xuất thực thể để lưu đơn vào hệ thống với mã <code>ORD-AI-XXXXXX</code>.
            </p>

            <div className="p-3.5 rounded-2xl bg-black/60 border border-amber-500/30 font-mono text-[11px] text-slate-300 space-y-1.5">
              <span className="text-slate-500">// Mandatory Arguments:</span>
              <p><span className="text-amber-300">serviceId:</span> ID dịch vụ chính xác từ catalog</p>
              <p><span className="text-amber-300">customerName:</span> Họ tên người đặt</p>
              <p><span className="text-amber-300">customerPhone:</span> Số điện thoại liên hệ</p>
              <p><span className="text-amber-300">startDate:</span> YYYY-MM-DD (ngày đi)</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-amber-500/20 text-xs text-amber-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Tự động tính tổng tiền & đưa vào hàng chờ Admin duyệt</span>
          </div>
        </div>
      </div>

      {/* Safety mechanism note */}
      <div className="relative z-10 p-3.5 rounded-2xl bg-black/40 border border-amber-500/20 text-xs text-slate-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-amber-400 shrink-0" />
          <span><strong>Text-Parser Fallback:</strong> Nếu LLM trả về chuỗi JSON trong văn bản thay vì tool call native, regex parser vẫn bắt được để không làm mất đơn của khách.</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
        <span>Đồ án 1 • Function Calling Flow</span>
        <span className="text-amber-300 font-cinzel">PHÍM MŨI TÊN (➔) ĐỂ CHUYỂN SLIDE</span>
      </div>
    </div>
  )
}
