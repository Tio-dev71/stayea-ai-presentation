import React from "react"
import { motion } from "motion/react"
import { Sparkles, Terminal, CheckCircle2, Play } from "lucide-react"
import { InteractiveChatDemo } from "../InteractiveChatDemo"

export const Slide12_LiveDemo: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-10 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <span>12 / TRẢI NGHIỆM THỰC TẾ</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Demo Tương Tác: <span className="text-gradient-emerald">STAYEA AI Concierge Widget</span>
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-xs">
          <Play className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
          <span>Interactive Live Widget</span>
        </div>
      </div>

      {/* Main Container: Left Guide + Right Live Interactive Chat */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-center flex-1 max-h-[510px]">
        {/* Left Side: Test Cases Guide (4 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-3 text-xs"
        >
          <div className="p-3.5 rounded-xl bg-[#061f23] border border-emerald-500/30">
            <h4 className="font-bold text-white text-xs mb-1 flex items-center gap-1.5 text-emerald-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              1. Kịch bản Tra cứu Dịch vụ Thực tế
            </h4>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Nhấp vào nút thử nhanh <strong>"🏡 Tìm Villa ven biển"</strong>. AI sẽ lọc danh mục lưu trú và báo đúng giá niêm yết trong cơ sở dữ liệu.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#092b30] border border-amber-400/40 shadow-lg">
            <h4 className="font-bold text-white text-xs mb-1 flex items-center gap-1.5 text-amber-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              2. Kịch bản Function Calling Tạo Đơn
            </h4>
            <p className="text-slate-200 text-[11px] leading-relaxed">
              Nhấp vào <strong>"🚗 Đặt xe 7 chỗ tự lái"</strong>. AI trích xuất thông tin anh Tuấn (SĐT, ngày đi) và kích hoạt hàm <code>create_booking_draft()</code> để sinh thẻ đơn hàng màu ngọc bích trực tiếp!
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-500/30">
            <h4 className="font-bold text-white text-xs mb-1 flex items-center gap-1.5 text-red-300">
              🛡️ 3. Kịch bản Tấn công Prompt Injection
            </h4>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              Nhấp vào <strong>"🛡️ Test Prompt Injection"</strong>. AI kích hoạt Guardrails từ chối cung cấp mật khẩu server và điều hướng lại cuộc trò chuyện du lịch lịch thiệp.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Interactive Chat Widget (7 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 h-full flex items-center justify-center"
        >
          <InteractiveChatDemo isEmbedded={true} />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-3">
        <span>Thầy cô và các bạn có thể trực tiếp gõ câu hỏi vào khung chat bên phải để thử nghiệm</span>
        <span className="text-amber-300 font-semibold">Tích hợp chuẩn trải nghiệm người dùng thực tế</span>
      </div>
    </div>
  )
}
