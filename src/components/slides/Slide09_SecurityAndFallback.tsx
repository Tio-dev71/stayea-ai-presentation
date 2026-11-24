import React from "react"
import { motion } from "motion/react"
import { ShieldAlert, RefreshCw, Lock, Zap } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide09_SecurityAndFallback: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs md:text-sm font-cinzel font-bold tracking-[0.25em] text-amber-300 uppercase">
            09 · AN TOÀN & ĐỘ SẴN SÀNG
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text tracking-tight mt-1">
          Bảo Mật Guardrails & Resilient Smart Fallback
        </h2>
        <p className="text-xs md:text-sm text-slate-300 mt-1">
          Hệ thống phòng thủ 2 lớp: Chống tấn công khai thác Prompt và Cơ chế cứu sinh khi AI Gateway mất kết nối.
        </p>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 my-auto items-center">
        {/* Left: Security */}
        <div className="p-6 rounded-3xl bg-black/40 border border-red-500/30 backdrop-blur-md flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-red-500/20 text-red-300 font-playfair font-bold text-base">
              <ShieldAlert className="w-5 h-5 text-red-400" />
              <span>1. Prompt Guardrails & Rate Limiting</span>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Chống Prompt Injection & Jailbreak:</strong> Chỉ thị rõ ràng trong System Prompt từ chối các câu lệnh <em>"Ignore previous instructions"</em>, không tiết lộ mật khẩu hay mã lệnh VPS.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Bảo vệ giá niêm yết (Price Protection):</strong> Nghiêm cấm AI tự ý hạ giá dịch vụ để chiều lòng khách hàng.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Giới hạn tần suất gọi (@Throttle):</strong> 20 lượt gửi/5 phút đối với khách vãng lai, 15 lượt/phút ở Sandbox Admin để phòng chống DDOS.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-4 p-3 rounded-2xl bg-red-950/40 border border-red-500/30 text-[11px] text-red-200">
            🛡️ Bảo mật tuyệt đối: Toàn bộ API Keys chỉ lưu tại biến môi trường server-side, không bao giờ lộ ra Client.
          </div>
        </div>

        {/* Right: Resilient Fallback */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#092b30]/90 to-[#041619]/90 border border-amber-400/50 shadow-2xl flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-amber-500/20 text-amber-300 font-playfair font-bold text-base">
              <RefreshCw className="w-5 h-5 text-amber-400" />
              <span>2. Resilient Smart Local Fallback (Zero Downtime)</span>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed mb-4">
              Nếu cổng AI 9router gặp sự cố nghẽn mạng, hàm <code>generateSmartFallback()</code> ngay lập tức tiếp quản mà <strong>không quăng lỗi 500 ra màn hình</strong>.
            </p>

            <div className="p-3.5 rounded-2xl bg-black/60 border border-amber-500/30 text-[11px] text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span className="font-cinzel">Keyword Matching Engine</span>
                <span className="text-amber-400 font-mono">100% Offline Rule</span>
              </div>
              <p>• Từ khóa: <code>xe</code>, <code>7 chỗ</code>, <code>tự lái</code> ➔ Xuất danh sách xe từ DB</p>
              <p>• Từ khóa: <code>villa</code>, <code>homestay</code>, <code>phòng</code> ➔ Xuất danh sách phòng kèm giá</p>
              <p>• Cung cấp số Hotline cứu hộ: <code>0921.724.444</code> để khách gọi ngay</p>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-200">
            ✨ Trải nghiệm khách hàng luôn thông suốt 100%, không bao giờ xuất hiện màn hình trắng hoặc lỗi code.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
        <span>Độ tin cậy hệ thống cao</span>
        <span className="text-amber-300 font-mono">Health Check: GET /stayea/ai/health ➔ online</span>
      </div>
    </div>
  )
}
