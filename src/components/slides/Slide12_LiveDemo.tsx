import React from "react"
import { motion } from "motion/react"
import { Sparkles, CheckCircle2, Play, Bot } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import { InteractiveChatDemo } from "../InteractiveChatDemo"

export const Slide12_LiveDemo: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-10 lg:p-12 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-1">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-xs md:text-sm font-cinzel font-bold tracking-[0.25em] text-amber-300 uppercase">
              12 · TRẢI NGHIỆM THỰC TẾ
            </span>
          </div>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-extrabold gold-gradient-text tracking-tight mt-0.5">
            Demo Tương Tác: STAYEA AI Concierge Widget
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-cinzel font-bold">
          <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>LIVE WIDGET</span>
        </div>
      </div>

      {/* Main Split: Left Guide + Right Live Interactive Chat */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-center flex-1 max-h-[520px]">
        {/* Left Side: Test Cases Guide (5 cols) */}
        <div className="lg:col-span-5 space-y-3 text-xs">
          <div className="p-4 rounded-3xl bg-black/40 border border-amber-500/30 backdrop-blur-md">
            <h4 className="font-playfair font-bold text-white text-sm mb-1 flex items-center gap-2 text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              1. Tra Cứu Dịch Vụ Thực Tế
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Bấm thử nhanh <strong>"🏡 Tìm Villa ven biển"</strong>. AI sẽ tra cứu danh mục thực tế trong DB và báo giá chuẩn xác.
            </p>
          </div>

          <div className="p-4 rounded-3xl bg-gradient-to-b from-[#092b30]/90 to-[#041619]/90 border border-amber-400/50 shadow-xl">
            <h4 className="font-playfair font-bold text-white text-sm mb-1 flex items-center gap-2 text-amber-300">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              2. Kích Hoạt Function Calling Tạo Đơn
            </h4>
            <p className="text-slate-200 text-xs leading-relaxed">
              Bấm <strong>"🚗 Đặt xe 7 chỗ tự lái"</strong>. AI trích xuất thông tin khách Tuấn và gọi hàm <code>create_booking_draft</code> sinh thẻ đơn hàng sơ bộ trực tiếp!
            </p>
          </div>

          <div className="p-4 rounded-3xl bg-black/40 border border-red-500/30 backdrop-blur-md">
            <h4 className="font-playfair font-bold text-white text-sm mb-1 flex items-center gap-2 text-red-300">
              🛡️ 3. Thử Thách Tấn Công Prompt Injection
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Bấm <strong>"🛡️ Test Prompt Injection"</strong>. AI kích hoạt Guardrails từ chối cung cấp mật khẩu server và điều hướng lại cuộc trò chuyện lịch thiệp.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Chat Widget (7 cols) */}
        <div className="lg:col-span-7 h-full flex items-center justify-center">
          <InteractiveChatDemo isEmbedded={true} />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-2 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
        <span>Hội đồng có thể trực tiếp gõ câu hỏi vào khung chat bên phải để kiểm tra</span>
        <span className="text-amber-300 font-cinzel">PHÍM MŨI TÊN (➔) ĐỂ CHUYỂN SLIDE</span>
      </div>
    </div>
  )
}
