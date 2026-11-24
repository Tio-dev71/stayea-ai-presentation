import React from "react"
import { motion } from "motion/react"
import { Bot, Headphones, CheckCircle2, ArrowLeftRight } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide08_HybridCSKH: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs md:text-sm font-cinzel font-bold tracking-[0.25em] text-amber-300 uppercase">
            08 · MÔ HÌNH VẬN HÀNH HYBRID
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text tracking-tight mt-1">
          Mô Hình Hybrid: AI + Con Người Giám Sát
        </h2>
        <p className="text-xs md:text-sm text-slate-300 mt-1">
          Sự kết hợp giữa tốc độ tự động hóa 24/7 của AI và sự chu đáo, thấu cảm của chuyên viên trực tiếp.
        </p>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 my-auto items-center">
        {/* Left: AI Mode */}
        <div className="p-6 rounded-3xl bg-black/40 border border-amber-500/30 backdrop-blur-md flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-white text-base">Tầng 1: STAYEA AI Concierge</h3>
                  <span className="text-xs text-amber-300 font-cinzel">Tự động 24/7 (Zero Latency)</span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 uppercase">
                80% Khối lượng
              </span>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Giải đáp tức thì câu hỏi thường gặp về vị trí villa, số phòng ngủ, giá thuê xe.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Tư vấn gợi ý lịch trình tour cano ngắm hoàng hôn, lặn san hô theo số người.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Thu thập họ tên, SĐT và tạo phiếu giữ chỗ sơ bộ (Draft Booking).</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200">
            ⚡ <strong>Ưu điểm:</strong> Khách nhắn tin đêm muộn vẫn nhận được câu trả lời chu đáo ngay lập tức.
          </div>
        </div>

        {/* Right: Human Consultant */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-[#092b30]/90 to-[#041619]/90 border border-amber-400/50 shadow-2xl flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-white text-base">Tầng 2: Chuyên Viên STAYEA VIP</h3>
                  <span className="text-xs text-amber-300 font-cinzel">Human-in-the-Loop Trực Tiếp</span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase">
                20% Chuyên sâu
              </span>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Kiểm tra thực tế với đối tác chủ villa / nhà xe trước khi xác nhận đơn.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Xử lý các yêu cầu cá nhân hóa cao: tiệc nướng BBQ riêng, setup tân hôn, đón rước VIP.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Giải quyết các trường hợp phát sinh hoàn hủy hoặc đổi lịch do thời tiết biển đảo.</span>
              </li>
            </ul>
          </div>

          <div className="mt-4 p-3 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200">
            🛡️ <strong>Chốt chặn an toàn:</strong> Không bao giờ để AI tự ý thu tiền hay hủy hợp đồng.
          </div>
        </div>
      </div>

      {/* Switch Tab Banner */}
      <div className="relative z-10 p-3.5 rounded-2xl bg-black/40 border border-amber-500/20 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <ArrowLeftRight className="w-4 h-4 text-amber-400 shrink-0" />
          <span><strong>Trải nghiệm liền mạch trên 1 Widget:</strong> Khách chỉ cần bấm chuyển tab giữa <code>STAYEA AI</code> và <code>Chat Chuyên Viên</code> mà không bị ngắt kết nối.</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
        <span>Đồ án 1 • Chiến lược Vận hành Hybrid</span>
        <span className="text-amber-300 font-cinzel">PHÍM MŨI TÊN (➔) ĐỂ CHUYỂN SLIDE</span>
      </div>
    </div>
  )
}
