import React from "react"
import { motion } from "motion/react"
import { Database, Table, Key, Link2, CheckCircle2 } from "lucide-react"

export const Slide10_DatabaseSchema: React.FC<{ isActive: boolean }> = () => {
  const tables = [
    {
      name: "stayea_ai_configs",
      purpose: "Lưu cấu hình Prompt, Tone, Model & Custom Rules",
      fields: [
        { name: "id", type: "text (PK)", desc: "Mặc định 'default'" },
        { name: "systemPrompt", type: "text", desc: "Chỉ thị gốc cho AI" },
        { name: "model", type: "text", desc: "'gemini-2.5-flash'" },
        { name: "temperature", type: "numeric", desc: "0.70 (Sáng tạo vừa đủ)" },
        { name: "autoInjectCatalog", type: "boolean", desc: "Bật/Tắt tiêm DB" },
        { name: "customRules", type: "jsonb", desc: "Danh sách quy tắc bổ sung" },
      ],
    },
    {
      name: "stayea_chat_conversations",
      purpose: "Quản lý phiên hội thoại giữa Khách / Chuyên viên",
      fields: [
        { name: "id", type: "text (PK)", desc: "Mã định danh phiên chat" },
        { name: "type", type: "enum", desc: "'customer' | 'partner' | 'host'" },
        { name: "participantName", type: "text", desc: "Tên khách hàng" },
        { name: "participantPhone", type: "text", desc: "SĐT liên hệ" },
        { name: "unreadAdminCount", type: "integer", desc: "Số tin chưa đọc" },
        { name: "lastMessageAt", type: "timestamp", desc: "Thời gian tin nhắn cuối" },
      ],
    },
    {
      name: "stayea_chat_messages",
      purpose: "Lịch sử tin nhắn chi tiết trong từng hội thoại",
      fields: [
        { name: "id", type: "text (PK)", desc: "Mã tin nhắn" },
        { name: "conversationId", type: "text (FK)", desc: "Liên kết phiên hội thoại" },
        { name: "senderType", type: "enum", desc: "'customer'|'admin'|'ai'" },
        { name: "content", type: "text", desc: "Nội dung tin nhắn" },
        { name: "metadata", type: "jsonb", desc: "Tool call id, thẻ đơn hàng" },
        { name: "createdAt", type: "timestamp", desc: "Thời gian gửi" },
      ],
    },
    {
      name: "stayea_orders",
      purpose: "Lưu đơn hàng do AI Concierge tạo ra",
      fields: [
        { name: "orderCode", type: "text (PK)", desc: "ORD-AI-XXXXXX" },
        { name: "serviceId", type: "text", desc: "Mã phòng / xe / tour" },
        { name: "source", type: "text", desc: "'ai_agent' (nguồn tạo)" },
        { name: "status", type: "enum", desc: "'pending_admin' (chờ duyệt)" },
        { name: "totalAmount", type: "numeric", desc: "Tổng tiền tính tự động" },
        { name: "adminNotes", type: "text", desc: "Ghi chú tạo bởi AI Agent" },
      ],
    },
  ]

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-14 overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
          <span>10 / CƠ SỞ DỮ LIỆU</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Thiết Kế Cơ Sở Dữ Liệu <span className="text-gradient-emerald">(PostgreSQL & Drizzle ORM)</span>
        </h2>
        <p className="text-sm text-slate-300 mt-1">
          Hệ thống bảng dữ liệu chặt chẽ, tối ưu index giúp truy vấn lịch sử chat và kiểm soát cấu hình AI thời gian thực.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-auto">
        {tables.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
            className="p-4 rounded-xl bg-[#061d20] border border-emerald-500/20 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Table className="w-4 h-4 text-emerald-400" />
                <h3 className="font-mono font-bold text-white text-xs">{t.name}</h3>
              </div>
              <p className="text-[10px] text-slate-400 mb-3 leading-tight">{t.purpose}</p>

              <div className="space-y-1.5 border-t border-emerald-500/10 pt-2 font-mono text-[10px]">
                {t.fields.map((f, idx) => (
                  <div key={idx} className="flex items-center justify-between py-0.5">
                    <span className="text-emerald-300">{f.name}</span>
                    <span className="text-slate-400 text-[9px]">{f.type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-emerald-500/10 text-[9px] text-slate-500 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span>Drizzle Type-safe</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-slate-300 flex items-center justify-between">
        <span><strong>Tính năng nổi bật:</strong> Cấu hình Prompt đặt trong DB giúp quản trị viên thay đổi tính cách AI ngay lập tức mà không cần restart server hay deploy lại source code.</span>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-emerald-500/10 pt-4">
        <span>Đồ án 1 • Database Architecture</span>
        <span className="text-emerald-400 font-mono">packages/database/src/schemas/stayea/chat.schema.ts</span>
      </div>
    </div>
  )
}
