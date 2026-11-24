import React from "react"
import { motion } from "motion/react"
import { Sliders, MessageSquare, Check, Save } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide11_AdminPanel: React.FC<{ isActive: boolean }> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs md:text-sm font-cinzel font-bold tracking-[0.25em] text-amber-300 uppercase">
            11 · MÔI TRƯỜNG QUẢN TRỊ ADMIN
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text tracking-tight mt-1">
          Admin Control Panel & Prompt Sandbox
        </h2>
        <p className="text-xs md:text-sm text-slate-300 mt-1">
          Giao diện quản trị toàn diện: Cấu hình phong cách AI, thêm bớt quy tắc nghiệp vụ và thử nghiệm an toàn trên Sandbox.
        </p>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 my-auto items-center">
        {/* Left: Settings (7 cols) */}
        <div className="md:col-span-7 p-6 rounded-3xl bg-black/40 border border-amber-500/30 backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-2">
            <span className="text-sm font-bold text-white flex items-center gap-2 font-playfair">
              <Sliders className="w-4 h-4 text-amber-400" />
              Cấu Hình Tham Số STAYEA AI
            </span>
            <span className="text-[10px] text-amber-300 font-mono">PATCH /stayea/ai/config</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-2xl bg-black/50 border border-amber-500/20">
              <span className="text-slate-400 block text-[10px]">Mô hình AI:</span>
              <span className="text-amber-300 font-mono font-bold">gemini-2.5-flash</span>
            </div>
            <div className="p-3 rounded-2xl bg-black/50 border border-amber-500/20">
              <span className="text-slate-400 block text-[10px]">Độ sáng tạo (Temperature):</span>
              <span className="text-emerald-300 font-mono font-bold">0.70 (Cân bằng)</span>
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-300 font-semibold block mb-1.5 font-cinzel">
              Phong cách xưng hô (Tone of Voice):
            </span>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-xl bg-amber-500/20 text-amber-300 font-semibold text-xs border border-amber-400/40">
                ✨ Luxury Hospitality (Sang trọng, ân cần)
              </span>
              <span className="px-3 py-1 rounded-xl bg-black/40 text-slate-400 text-xs border border-slate-700">
                Friendly
              </span>
              <span className="px-3 py-1 rounded-xl bg-black/40 text-slate-400 text-xs border border-slate-700">
                Concise
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-300 font-semibold block mb-1.5 font-cinzel">
              Quy tắc kinh doanh tùy chỉnh (Custom Rules):
            </span>
            <div className="space-y-1.5">
              {[
                "Ưu tiên gợi ý các căn Villa đối tác có nhãn 'Độc quyền STAYEA'",
                "Xưng hô 'Dạ em chào anh/chị' theo chuẩn phong cách nghỉ dưỡng cao cấp",
                "Luôn thu thập đủ SĐT, họ tên và ngày đi để gửi Admin điều phối duyệt",
              ].map((rule, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-xl bg-amber-950/30 border border-amber-500/20 text-[11px] text-amber-200 flex items-center gap-2"
                >
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Sandbox (5 cols) */}
        <div className="md:col-span-5 p-6 rounded-3xl bg-gradient-to-b from-[#092b30]/90 to-[#041619]/90 border border-amber-400/50 shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-amber-500/20">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-300" />
              <span className="text-sm font-bold text-white font-playfair">Prompt Sandbox</span>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[9px] uppercase font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Thử nghiệm an toàn
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-2xl bg-black/50 text-slate-300 border border-amber-500/20">
              <span className="text-[10px] text-slate-400 block font-semibold mb-0.5">Admin Test Input:</span>
              "Bên em có xe 7 chỗ tự lái đưa đón sân bay Phú Quốc không?"
            </div>

            <div className="p-3 rounded-2xl bg-amber-950/40 text-amber-200 border border-amber-500/30">
              <span className="text-[10px] text-amber-400 block font-semibold mb-0.5">Sandbox Response (Simulated):</span>
              "Dạ STAYEA có sẵn xe Mitsubishi Xpander 7 chỗ tự lái giá 1.200.000 ₫/ngày..."
            </div>

            <div className="p-2 rounded-xl bg-black/40 text-[10px] text-slate-400 font-mono space-y-0.5">
              <div>Model: gemini-2.5-flash</div>
              <div>Prompt Length: 1,842 chars</div>
              <div>Status: 200 OK (0.8s)</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs text-center font-cinzel">
            🎯 Admin thử nghiệm đạt chuẩn mới nhấn "Lưu cấu hình"
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
        <span>Route: /stayea/ai-agent (stayea-admin-ai-agent-page.tsx)</span>
        <span className="text-amber-300 font-cinzel">PHÍM MŨI TÊN (➔) ĐỂ CHUYỂN SLIDE</span>
      </div>
    </div>
  )
}
