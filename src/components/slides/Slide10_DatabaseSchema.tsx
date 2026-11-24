import React from "react"
import { motion } from "motion/react"
import { Database, Table, Key, ArrowRight, ShieldCheck, Layers } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import { morphTopVariants, morphLeftVariants, morphRightVariants } from "../MorphTransition"

export const Slide10_DatabaseSchema: React.FC<{ isActive: boolean }> = () => {
  const tables = [
    {
      name: "stayea_ai_configs",
      label: "Cấu hình AI Agent",
      desc: "Lưu System Prompt động, Tone giọng, Temperature, Model và các Business Rules.",
      badge: "Config State",
      fields: ["systemPrompt", "tone", "temperature", "modelName", "customRules"],
      isLeft: true,
    },
    {
      name: "stayea_chat_conversations",
      label: "Phiên hội thoại",
      desc: "Quản lý phiên chat giữa khách và hệ thống, lưu trạng thái active và thời gian nhắn cuối.",
      badge: "Session Graph",
      fields: ["id (UUID)", "participantId", "channel", "status", "lastMessageAt"],
      isLeft: true,
    },
    {
      name: "stayea_chat_messages",
      label: "Lịch sử tin nhắn",
      desc: "Lưu toàn bộ tin nhắn đa chiều của User, AI Assistant (kèm tool_calls) và Human Agent.",
      badge: "Event Stream",
      fields: ["conversationId", "senderType", "content", "toolCalls", "metadata"],
      isLeft: false,
    },
    {
      name: "stayea_orders",
      label: "Đơn giữ chỗ sơ bộ",
      desc: "Lưu đơn hàng do AI tạo tự động từ Function Calling, trạng thái chờ Quản trị viên duyệt.",
      badge: "Transaction Core",
      fields: ["orderCode", "customerName", "phone", "totalAmount", "status"],
      isLeft: false,
    },
  ]

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <motion.div
        variants={morphTopVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm md:text-base font-heading font-bold tracking-[0.25em] text-amber-300 uppercase">
            11 · THIẾT KẾ CƠ SỞ DỮ LIỆU
          </span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black gold-gradient-text tracking-tight mt-1.5">
          Kiến Trúc Dữ Liệu PostgreSQL & Drizzle ORM
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mt-2 max-w-4xl leading-relaxed">
          Thiết kế chuẩn hóa Type-safe 100%, phân tách rõ ràng giữa Quản trị Prompt, Quản lý Phiên chat và Lưu trữ Đơn hàng.
        </p>
      </motion.div>

      {/* 4 Database Entities Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-auto">
        {tables.map((tbl, idx) => (
          <motion.div
            key={idx}
            variants={tbl.isLeft ? morphLeftVariants : morphRightVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="canva-card p-6 sm:p-7 md:p-8 rounded-3xl flex flex-col justify-between hover:border-amber-400/60 transition-all group hover:-translate-y-2 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-amber-300">
                  <Table className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
                  {tbl.badge}
                </span>
              </div>

              <h3 className="font-heading font-bold text-white text-lg sm:text-xl group-hover:text-amber-200 transition-colors">
                {tbl.label}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-amber-300/90 mb-3">
                {tbl.name}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {tbl.desc}
              </p>
            </div>

            {/* Fields pill list */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-xs font-heading uppercase text-slate-400 block tracking-wider font-bold">
                TRƯỜNG CỐT LÕI:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {tbl.fields.map((f, fIdx) => (
                  <span
                    key={fIdx}
                    className="px-2.5 py-1 rounded-lg bg-black/50 text-xs font-mono text-slate-200 border border-white/10"
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
