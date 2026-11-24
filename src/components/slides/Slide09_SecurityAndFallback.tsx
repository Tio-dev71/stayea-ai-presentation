import React from "react"
import { motion } from "motion/react"
import { ShieldAlert, RefreshCw, Lock, Zap, CheckCircle2, AlertTriangle } from "lucide-react"

export const Slide09_SecurityAndFallback: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
          <span>09 / AN TOÀN & ĐỘ TIN CẬY</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Bảo Mật Guardrails & <span className="text-gradient-emerald">Cơ Chế Chịu Lỗi Resilient</span>
        </h2>
        <p className="text-sm text-slate-300 mt-1">
          Hệ thống phòng thủ hai tầng: Chống tấn công khai thác Prompt và Cơ chế cứu sinh khi AI Gateway mất kết nối.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
        {/* Col 1: Safety Guardrails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-5 rounded-2xl bg-[#061e22] border border-red-500/30 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 pb-2 mb-3 border-b border-red-500/20 text-red-300 font-bold text-sm">
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span>1. Prompt Guardrails & Rate Limiting</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <Lock className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Chống Prompt Injection & Jailbreak:</strong> Chỉ thị rõ ràng trong System Prompt từ chối các yêu cầu <em>"Ignore previous instructions"</em>, không tiết lộ cấu hình hệ thống hay mã lệnh VPS.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Bảo vệ giá niêm yết (Price Protection):</strong> Nghiêm cấm AI tự ý hạ giá dịch vụ để chiều lòng khách hàng.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Giới hạn tần suất gọi (@Throttle):</strong> 20 lượt gửi/5 phút với khách công khai; 15 lượt/phút ở Sandbox Admin để phòng ngừa DDOS và vét cạn token.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-4 p-2.5 rounded-lg bg-red-950/40 border border-red-500/20 text-[10px] text-red-200">
            🛡️ Mã hóa & bảo mật: API Keys chỉ lưu trong biến môi trường server-side, không bao giờ lộ ra Client.
          </div>
        </motion.div>

        {/* Col 2: Resilient Smart Fallback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-5 rounded-2xl bg-[#092b30] border border-emerald-400/40 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 pb-2 mb-3 border-b border-emerald-500/20 text-emerald-300 font-bold text-sm">
              <RefreshCw className="w-4 h-4 text-emerald-400" />
              <span>2. Resilient Smart Local Fallback (Zero Downtime)</span>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed mb-3">
              Nếu dịch vụ mạng hoặc máy chủ AI 9router gặp sự cố quá tải, hàm <code>generateSmartFallback()</code> ngay lập tức tiếp quản mà <strong>không quăng lỗi 500 ra màn hình</strong>.
            </p>

            <div className="p-3 bg-[#031518] rounded-xl border border-emerald-800/40 text-[11px] text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span>Phân tích từ khóa (Keyword Engine)</span>
                <span className="text-emerald-400 font-mono">100% Offline Rule</span>
              </div>
              <p>• Nhận diện từ khóa: <code>xe</code>, <code>7 chỗ</code>, <code>tự lái</code> ➔ Xuất danh sách xe từ DB</p>
              <p>• Nhận diện: <code>villa</code>, <code>homestay</code>, <code>phòng</code> ➔ Xuất danh sách phòng kèm giá</p>
              <p>• Cung cấp số Hotline cứu hộ: <code>0921.724.444</code> để khách liên hệ tức thì</p>
            </div>
          </div>

          <div className="mt-4 p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-[10px] text-emerald-200">
            ✨ Trải nghiệm khách hàng luôn thông suốt 100%, không bao giờ xuất hiện màn hình trống hoặc thông báo lỗi code.
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-4">
        <span>Đồ án 1 • Độ sẵn sàng và tin cậy</span>
        <span className="text-emerald-400 font-mono">Endpoint Health: GET /stayea/ai/health ➔ status: online</span>
      </div>
    </div>
  )
}
