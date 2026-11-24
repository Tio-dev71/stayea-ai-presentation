import React from "react"
import { motion } from "motion/react"
import { Sliders, Sparkles, MessageSquare, Check, RotateCcw, Save, Shield } from "lucide-react"

export const Slide11_AdminPanel: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
          <span>11 / MÔI TRƯỜNG QUẢN TRỊ</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Admin Control Panel & <span className="text-gradient-emerald">Prompt Sandbox Môi Trường Thử Nghiệm</span>
        </h2>
        <p className="text-sm text-slate-300 mt-1">
          Giao diện quản trị toàn diện: Cấu hình phong cách AI, thêm bớt quy tắc nghiệp vụ và thử nghiệm an toàn trước khi công bố.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-auto">
        {/* Left: Controls mockup (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 p-5 rounded-2xl bg-[#061d20] border border-emerald-500/30 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-emerald-400" />
                Cấu Hình Tham Số STAYEA AI
              </span>
              <span className="text-[10px] text-emerald-300 font-mono">PATCH /stayea/ai/config</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-[#031416] border border-emerald-900/60">
                <span className="text-slate-400 block text-[10px]">Mô hình AI:</span>
                <span className="text-emerald-300 font-mono font-bold">gemini-2.5-flash</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#031416] border border-emerald-900/60">
                <span className="text-slate-400 block text-[10px]">Độ sáng tạo (Temperature):</span>
                <span className="text-amber-300 font-mono font-bold">0.70 (Cân bằng)</span>
              </div>
            </div>

            <div>
              <span className="text-[11px] text-slate-300 font-semibold block mb-1">
                Phong cách xưng hô (Tone of Voice):
              </span>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-semibold text-xs border border-emerald-400">
                  ✨ Luxury Hospitality (Sang trọng, ân cần)
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#031416] text-slate-400 text-xs border border-slate-700">
                  Friendly
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#031416] text-slate-400 text-xs border border-slate-700">
                  Concise
                </span>
              </div>
            </div>

            <div>
              <span className="text-[11px] text-slate-300 font-semibold block mb-1">
                Quy tắc kinh doanh tùy chỉnh (Custom Business Rules):
              </span>
              <div className="space-y-1.5">
                {[
                  "Ưu tiên gợi ý các căn Villa đối tác có nhãn 'Độc quyền STAYEA'",
                  "Xưng hô 'Dạ em chào anh/chị' theo chuẩn phong cách nghỉ dưỡng",
                  "Luôn thu thập đủ SĐT, họ tên và ngày đi để gửi Admin điều phối duyệt",
                ].map((rule, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-[11px] text-emerald-200 flex items-center gap-2"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-500/10 flex items-center justify-between text-xs">
            <span className="text-slate-400 text-[10px]">Auto-Inject Catalog: <strong>BẬT</strong></span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-[11px]">Khôi phục mặc định</span>
              <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white font-semibold text-[11px]">Lưu cấu hình</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Sandbox Mockup (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-5 p-5 rounded-2xl bg-[#092b30] border border-amber-400/40 shadow-xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-emerald-500/20">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-bold text-white">Prompt Sandbox Trực Tiếp</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] uppercase font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                Thử nghiệm an toàn
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded-xl bg-[#041a1d] text-slate-300 border border-emerald-900/50">
                <span className="text-[10px] text-slate-400 block font-semibold mb-0.5">Admin Test Input:</span>
                "Bên em có xe 7 chỗ tự lái đưa đón sân bay Phú Quốc không?"
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-950/60 text-emerald-200 border border-emerald-500/30">
                <span className="text-[10px] text-emerald-400 block font-semibold mb-0.5">Sandbox Response (Simulated):</span>
                "Dạ STAYEA có sẵn xe Mitsubishi Xpander 7 chỗ tự lái giá 1.200.000 ₫/ngày..."
              </div>

              <div className="p-2 rounded-lg bg-black/30 text-[10px] text-slate-400 font-mono space-y-0.5">
                <div>Model: gemini-2.5-flash</div>
                <div>Prompt Length: 1,842 chars</div>
                <div>Status: 200 OK (0.8s)</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-[11px] text-amber-200">
            🎯 <strong>Lợi ích:</strong> Admin thử nghiệm và kiểm soát hoàn toàn chất lượng câu trả lời trước khi áp dụng cho người dùng cuối.
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-4">
        <span>Đồ án 1 • Admin Panel Feature</span>
        <span className="text-emerald-400 font-mono">Route: /stayea/ai-agent (stayea-admin-ai-agent-page.tsx)</span>
      </div>
    </div>
  )
}
