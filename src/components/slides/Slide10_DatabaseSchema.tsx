import React from "react"
import { motion } from "motion/react"
import { Database, Table, Key, ArrowRight, ShieldCheck, Layers } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide10_DatabaseSchema: React.FC<{ isActive: boolean }> = () => {
  const tables = [
    {
      name: "stayea_ai_configs",
      label: "Cấu hình AI Agent",
      desc: "Lưu System Prompt động, Tone giọng, Temperature, Model và các Business Rules.",
      badge: "Config State",
      fields: ["systemPrompt", "tone", "temperature", "modelName", "customRules"],
    },
    {
      name: "stayea_chat_conversations",
      label: "Phiên hội thoại",
      desc: "Quản lý phiên chat giữa khách và hệ thống, lưu trạng thái active và thời gian nhắn cuối.",
      badge: "Session Graph",
      fields: ["id (UUID)", "participantId", "channel", "status", "lastMessageAt"],
    },
    {
      name: "stayea_chat_messages",
      label: "Lịch sử tin nhắn",
      desc: "Lưu toàn bộ tin nhắn đa chiều của User, AI Assistant (kèm tool_calls) và Human Agent.",
      badge: "Event Stream",
      fields: ["conversationId", "senderType", "content", "toolCalls", "metadata"],
    },
    {
      name: "stayea_orders",
      label: "Đơn giữ chỗ sơ bộ",
      desc: "Lưu đơn hàng do AI tạo tự động từ Function Calling, trạng thái chờ Quản trị viên duyệt.",
      badge: "Transaction Core",
      fields: ["orderCode", "customerName", "phone", "totalAmount", "status"],
    },
  ]

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.2em] text-amber-300 uppercase">
            11 · THIẾT KẾ CƠ SỞ DỮ LIỆU
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text tracking-tight mt-1">
          Kiến Trúc Dữ Liệu PostgreSQL & Drizzle ORM
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Thiết kế chuẩn hóa Type-safe 100%, phân tách rõ ràng giữa Quản trị Prompt, Quản lý Phiên chat và Lưu trữ Đơn hàng.
        </p>
      </div>

      {/* 4 Database Entities Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-auto">
        {tables.map((tbl, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className="canva-card p-5 rounded-3xl flex flex-col justify-between hover:border-amber-400/60 transition-all group hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-300">
                  <Table className="w-4 h-4" />
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                  {tbl.badge}
                </span>
              </div>

              <h3 className="font-heading font-bold text-white text-base group-hover:text-amber-200 transition-colors">
                {tbl.label}
              </h3>
              <p className="font-mono text-[11px] text-amber-300/80 mb-2">
                {tbl.name}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {tbl.desc}
              </p>
            </div>

            {/* Fields pill list */}
            <div className="pt-3 border-t border-white/10 space-y-1">
              <span className="text-[9px] font-heading uppercase text-slate-400 block tracking-wider font-semibold">
                TRƯỜNG CỐT LÕI:
              </span>
              <div className="flex flex-wrap gap-1">
                {tbl.fields.map((f, fIdx) => (
                  <span
                    key={fIdx}
                    className="px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-slate-300 border border-white/5"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
