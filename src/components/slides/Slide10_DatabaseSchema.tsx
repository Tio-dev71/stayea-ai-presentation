import React from "react"
import { motion } from "motion/react"
import { Table, Database, CheckCircle2 } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide10_DatabaseSchema: React.FC<{ isActive: boolean }> = () => {
  const tables = [
    {
      name: "stayea_ai_configs",
      purpose: "Lưu System Prompt, Tone, Model & Custom Rules",
      fields: [
        { name: "id", type: "text (PK)", desc: "'default'" },
        { name: "systemPrompt", type: "text", desc: "Chỉ thị gốc" },
        { name: "model", type: "text", desc: "'gemini-2.5-flash'" },
        { name: "temperature", type: "numeric", desc: "0.70" },
        { name: "autoInjectCatalog", type: "boolean", desc: "Bật/Tắt tiêm DB" },
        { name: "customRules", type: "jsonb", desc: "Quy tắc bổ sung" },
      ],
    },
    {
      name: "stayea_chat_conversations",
      purpose: "Quản lý phiên hội thoại Khách / Chuyên viên",
      fields: [
        { name: "id", type: "text (PK)", desc: "Mã phiên chat" },
        { name: "type", type: "enum", desc: "'customer'|'partner'" },
        { name: "participantName", type: "text", desc: "Tên khách" },
        { name: "participantPhone", type: "text", desc: "SĐT khách" },
        { name: "unreadAdminCount", type: "integer", desc: "Tin chưa đọc" },
        { name: "lastMessageAt", type: "timestamp", desc: "Thời gian tin cuối" },
      ],
    },
    {
      name: "stayea_chat_messages",
      purpose: "Lịch sử tin nhắn chi tiết trong từng hội thoại",
      fields: [
        { name: "id", type: "text (PK)", desc: "Mã tin nhắn" },
        { name: "conversationId", type: "text (FK)", desc: "Mã hội thoại" },
        { name: "senderType", type: "enum", desc: "'customer'|'admin'|'ai'" },
        { name: "content", type: "text", desc: "Nội dung tin nhắn" },
        { name: "metadata", type: "jsonb", desc: "Tool call id, thẻ đơn" },
        { name: "createdAt", type: "timestamp", desc: "Thời gian gửi" },
      ],
    },
    {
      name: "stayea_orders",
      purpose: "Lưu đơn hàng do AI Concierge tạo ra",
      fields: [
        { name: "orderCode", type: "text (PK)", desc: "ORD-AI-XXXXXX" },
        { name: "serviceId", type: "text", desc: "Mã villa / xe / tour" },
        { name: "source", type: "text", desc: "'ai_agent' (nguồn tạo)" },
        { name: "status", type: "enum", desc: "'pending_admin'" },
        { name: "totalAmount", type: "numeric", desc: "Tổng tiền đơn" },
        { name: "adminNotes", type: "text", desc: "Ghi chú từ AI Agent" },
      ],
    },
  ]

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 md:p-14 lg:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs md:text-sm font-cinzel font-bold tracking-[0.25em] text-amber-300 uppercase">
            10 · THIẾT KẾ CƠ SỞ DỮ LIỆU
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-extrabold gold-gradient-text tracking-tight mt-1">
          Cấu Trúc Bảng PostgreSQL & Drizzle ORM
        </h2>
        <p className="text-xs md:text-sm text-slate-300 mt-1">
          Bảng dữ liệu lưu trữ cấu hình Prompt, lịch sử hội thoại và đơn hàng được thiết kế type-safe và tối ưu index.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-auto">
        {tables.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
            className="p-4 rounded-3xl bg-black/40 border border-amber-500/30 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Table className="w-4 h-4 text-amber-400" />
                <h3 className="font-mono font-bold text-white text-xs">{t.name}</h3>
              </div>
              <p className="text-[10px] text-slate-400 mb-3 leading-tight">{t.purpose}</p>

              <div className="space-y-1.5 border-t border-amber-500/10 pt-2 font-mono text-[10px]">
                {t.fields.map((f, idx) => (
                  <div key={idx} className="flex items-center justify-between py-0.5">
                    <span className="text-amber-200">{f.name}</span>
                    <span className="text-slate-400 text-[9px]">{f.type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-white/10 text-[9px] text-slate-400 flex items-center gap-1 font-mono">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Drizzle ORM Type-Safe</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Value note */}
      <div className="relative z-10 p-3.5 rounded-2xl bg-black/40 border border-amber-500/20 text-xs text-slate-300">
        <strong>Lợi ích vượt trội:</strong> Lưu trữ System Prompt trong DB giúp Admin có thể thay đổi tính cách AI ngay lập tức mà không cần build lại dự án hay khởi động lại máy chủ.
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-400">
        <span>Đồ án 1 • Database Architecture</span>
        <span className="text-amber-300 font-cinzel">PHÍM MŨI TÊN (➔) ĐỂ CHUYỂN SLIDE</span>
      </div>
    </div>
  )
}
