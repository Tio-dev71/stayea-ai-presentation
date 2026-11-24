import React from "react"
import { motion } from "motion/react"
import { AlertTriangle, CheckCircle2, Clock, DollarSign, XCircle, Bot, Sparkles, HelpCircle } from "lucide-react"

export const Slide02_Problem: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden">
      {/* Slide Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
          <span>02 / VẤN ĐỀ & BỐI CẢNH</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Thực Trạng & <span className="text-gradient-emerald">Thách Thức Cốt Lõi</span> Trong CSKH Du Lịch
        </h2>
        <p className="text-sm text-slate-300 mt-1 max-w-3xl">
          Sự khác biệt rõ rệt giữa thế hệ Chatbot kịch bản cũ và thế hệ Trợ lý AI Concierge thông minh.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
        {/* Left: Traditional Bot Limitations */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-6 rounded-2xl bg-red-950/20 border border-red-500/30 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Chatbot Cổ Điển (Rule-based)</h3>
                  <p className="text-xs text-red-300">Cây quyết định (Decision Tree) định sẵn</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-red-500/20 text-red-300 border border-red-500/30">
                Lỗi thời
              </span>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Cứng nhắc, máy móc:</strong> Khách lệch cú pháp 1 từ là bot báo lỗi <em>"Xin lỗi, tôi không hiểu"</em>, gây ức chế cao.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Quá tải ca đêm:</strong> Nhân sự CSKH không thể trực 24/7, tỷ lệ rớt khách đêm muộn lên tới <strong>45%</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <DollarSign className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Tách rời cơ sở dữ liệu:</strong> Không thể tự tra cứu tình trạng phòng/xe còn trống hay tính toán tổng tiền đơn hàng.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-red-950/40 border border-red-500/20 text-[11px] text-red-200">
            ⚠️ <strong>Hệ quả:</strong> Doanh nghiệp vừa tốn chi phí nhân sự vận hành, vừa đánh mất doanh thu vào tay đối thủ.
          </div>
        </motion.div>

        {/* Right: STAYEA AI Concierge */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 shadow-xl shadow-emerald-950/50 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-500/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">STAYEA AI Concierge</h3>
                  <p className="text-xs text-emerald-300">Agentic LLM + AI 9router Gateway</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Đột phá
              </span>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Hiểu ngôn ngữ tự nhiên:</strong> Giao tiếp ân cần, am hiểu du lịch Phú Quốc (villa view biển, xe tự lái, tour lặn san hô).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Đồng bộ catalog thời gian thực:</strong> Tự động tiêm danh mục dịch vụ đang mở bán vào context $\rightarrow$ <strong>Chống ảo giác giá cả</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Tự động tạo đơn giữ chỗ:</strong> Gọi hàm Function Calling sinh trực tiếp phiếu đặt dịch vụ vào cơ sở dữ liệu chờ Admin duyệt.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-emerald-900/40 border border-emerald-400/30 text-[11px] text-emerald-200">
            ✨ <strong>Giá trị:</strong> Chăm sóc khách hàng 24/7 không độ trễ, biến cuộc trò chuyện thành đơn đặt dịch vụ thực tế.
          </div>
        </motion.div>
      </div>

      {/* Bottom takeaway */}
      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-4">
        <span>Đồ án 1 • Hệ thống Chatbot AI CSKH</span>
        <span className="text-emerald-400">Giải pháp: Chuyển đổi từ Chatbot tĩnh sang Trợ lý AI hành động (Agentic AI)</span>
      </div>
    </div>
  )
}
