import React from "react"
import { motion } from "motion/react"
import { Bot, Headphones, Users, ArrowLeftRight, CheckCircle2, ShieldAlert } from "lucide-react"

export const Slide08_HybridCSKH: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
          <span>08 / MÔ HÌNH VẬN HÀNH</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Mô Hình Hybrid CSKH: <span className="text-gradient-emerald">AI + Human-in-the-Loop</span>
        </h2>
        <p className="text-sm text-slate-300 mt-1">
          Sự kết hợp hoàn hảo giữa tốc độ tự động hóa của AI và sự thấu cảm, xử lý linh hoạt của con người.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
        {/* Mode A: AI Concierge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl bg-[#061f23] border border-emerald-500/30 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-400/30">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Tầng 1: STAYEA AI Concierge</h3>
                  <span className="text-xs text-emerald-300">Tự động hóa 24/7 (Zero Latency)</span>
                </div>
              </div>
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                80% Khối lượng
              </span>
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Giải đáp tức thì các câu hỏi thường gặp (vị trí villa, tiện ích, dòng xe).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Tư vấn theo ngân sách, số lượng thành viên và thời gian du lịch.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Thu thập họ tên, SĐT và tạo phiếu giữ chỗ sơ bộ (Draft Booking).</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-700/30 text-[11px] text-emerald-200">
            ⚡ <strong>Ưu điểm:</strong> Khách không phải chờ đợi dù nhắn tin lúc 2 giờ sáng.
          </div>
        </motion.div>

        {/* Mode B: Human Specialist */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 rounded-2xl bg-[#092b30] border border-amber-400/40 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-300 border border-amber-400/30">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Tầng 2: Chuyên Viên STAYEA VIP</h3>
                  <span className="text-xs text-amber-300">Human-in-the-Loop Trực Tiếp</span>
                </div>
              </div>
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                20% Chuyên sâu
              </span>
            </div>

            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Kiểm tra thực tế với đối tác chủ villa/nhà xe trước khi xác nhận đơn.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Xử lý các yêu cầu đặc biệt: tiệc cưới bãi biển, setup trăng mật, yêu cầu đưa đón VIP.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Giải quyết khiếu nại, hoàn tiền hoặc đổi lịch trình phát sinh.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-amber-950/50 border border-amber-500/30 text-[11px] text-amber-200">
            🛡️ <strong>Chốt chặn an toàn:</strong> Không bao giờ để AI tự động thu tiền hay hủy hợp đồng.
          </div>
        </motion.div>
      </div>

      {/* Switch Tab Banner */}
      <div className="p-3.5 rounded-xl bg-[#04191c] border border-emerald-500/20 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <ArrowLeftRight className="w-4 h-4 text-emerald-400 shrink-0" />
          <span><strong>Trải nghiệm liền mạch trên cùng 1 Widget:</strong> Khách chỉ cần bấm chuyển tab giữa <code>STAYEA AI</code> và <code>Chat Chuyên Viên</code> mà không làm mất lịch sử hội thoại.</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-4">
        <span>Đồ án 1 • Chiến lược Vận hành</span>
        <span className="text-emerald-400">Tối ưu chi phí nhưng vẫn giữ vững trải nghiệm khách hàng cao cấp</span>
      </div>
    </div>
  )
}
