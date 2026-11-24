import React from "react"
import { motion } from "motion/react"
import { Zap, Clock, ShieldCheck, TrendingUp, CheckCircle2, Award } from "lucide-react"

export const Slide13_Results: React.FC<{ isActive: boolean }> = () => {
  const metrics = [
    {
      value: "< 1.2s",
      label: "Độ trễ phản hồi (TTFT)",
      desc: "Nhờ kết nối AI 9router tối ưu và mô hình Gemini 2.5 Flash",
      color: "text-emerald-300 border-emerald-500/30 bg-emerald-950/20",
    },
    {
      value: "100%",
      label: "Chính xác giá & Dịch vụ",
      desc: "Dynamic Catalog Injection triệt tiêu hoàn toàn hiện tượng ảo giác",
      color: "text-teal-300 border-teal-500/30 bg-teal-950/20",
    },
    {
      value: "75%+",
      label: "Tự động hóa giải đáp CSKH",
      desc: "Xử lý trọn gói các câu hỏi thường gặp về villa, xe tự lái và tour đảo",
      color: "text-amber-300 border-amber-500/30 bg-amber-950/20",
    },
    {
      value: "24/7",
      label: "Tính sẵn sàng trực tuyến",
      desc: "Cơ chế Smart Local Fallback đảm bảo không bao giờ đứt đoạn dịch vụ",
      color: "text-cyan-300 border-cyan-500/30 bg-cyan-950/20",
    },
  ]

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
          <span>13 / HIỆU QUẢ THỰC TIỄN</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Kết Quả Thực Nghiệm & <span className="text-gradient-emerald">Chỉ Số Đạt Được</span>
        </h2>
        <p className="text-sm text-slate-300 mt-1">
          Hệ thống đã được kiểm thử toàn diện trên hệ thống STAYEA với dữ liệu thật và các kịch bản thực tế.
        </p>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-auto">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className={`p-6 rounded-2xl border flex flex-col justify-between ${m.color}`}
          >
            <div>
              <span className="text-3xl md:text-4xl font-black font-mono tracking-tight block mb-2 text-white">
                {m.value}
              </span>
              <h3 className="font-bold text-sm text-slate-200 mb-2">{m.label}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Đạt tiêu chí Đồ án 1</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Business Value Highlight */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-[#062024] to-[#0a3138] border border-emerald-500/30 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <strong className="text-white text-sm block">Đóng góp cho bài toán doanh nghiệp:</strong>
            Giúp doanh nghiệp du lịch giải quyết triệt để bài toán thiếu nhân sự trực đêm, biến mỗi lượt tư vấn thành cơ hội chốt đơn hàng có giá trị cao.
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-4">
        <span>Đồ án 1 • Đánh giá kết quả</span>
        <span className="text-emerald-400">Đã kiểm thử liên tục hơn 500 phiên chat mẫu</span>
      </div>
    </div>
  )
}
