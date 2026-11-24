import React from "react"
import { motion } from "motion/react"
import { Sliders, MessageSquareHeart, ShieldCheck, CheckCircle2, Layers } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import { morphTopVariants, morphLeftVariants, morphRightVariants } from "../MorphTransition"

export const Slide10_DatabaseSchema: React.FC<{ isActive: boolean }> = () => {
  const strengths = [
    {
      icon: Sliders,
      label: "Tùy Biến Đa Ngành Tức Thì",
      sub: "Thay đổi kịch bản bằng Prompt",
      desc: "Không cần viết lại mã nguồn. Quản trị viên có thể đổi giọng điệu, quy tắc báo giá và tri thức dịch vụ cho Du lịch, Y tế hay Bán lẻ ngay lập tức.",
      badge: "Điểm Mạnh #1",
      highlights: ["Đổi kịch bản không cần code", "Cập nhật không gián đoạn", "Phù hợp mọi doanh nghiệp"],
      isLeft: true,
    },
    {
      icon: MessageSquareHeart,
      label: "Hiểu & Nhớ Ngữ Cảnh Xuyên Suốt",
      sub: "Cá nhân hóa từng khách hàng",
      desc: "Hệ thống lưu trữ mạch hội thoại thông minh giúp AI nhớ nhu cầu trước đó của khách, không hỏi lặp lại và bàn giao trọn vẹn khi chuyển sang nhân viên.",
      badge: "Điểm Mạnh #2",
      highlights: ["Nhớ lịch sử trò chuyện", "Chuyển tiếp AI ➔ Người mượt mà", "Tư vấn tự nhiên 24/7"],
      isLeft: true,
    },
    {
      icon: Layers,
      label: "Minh Bạch & Đối Soát Toàn Diện",
      sub: "Kiểm soát chất lượng CSKH",
      desc: "Mọi phiên tư vấn, hành động tạo đơn của AI và phản hồi của nhân viên đều được ghi nhận rõ ràng giúp doanh nghiệp dễ dàng kiểm định và tối ưu.",
      badge: "Điểm Mạnh #3",
      highlights: ["Truy xuất lịch sử 100%", "Đo lường hiệu quả AI", "Bảo vệ uy tín thương hiệu"],
      isLeft: false,
    },
    {
      icon: ShieldCheck,
      label: "Chốt Đơn Tự Động Có Kiểm Duyệt",
      sub: "An toàn tuyệt đối cho vận hành",
      desc: "AI tự động thu thập thông tin và lên phiếu giữ chỗ sơ bộ ngay cả ban đêm, nhưng luôn đi qua bước xác nhận của quản trị viên để tránh mọi sai sót.",
      badge: "Điểm Mạnh #4",
      highlights: ["Không bỏ lỡ khách đêm", "Chống ảo giác giá 100%", "Giữ quyền kiểm soát cho Admin"],
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
            11 · VÌ SAO CHỌN HỆ THỐNG CỦA CHÚNG TÔI?
          </span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black gold-gradient-text tracking-tight mt-1.5">
          4 Điểm Mạnh Vượt Trội & Giá Trị Thực Tiễn
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 mt-2 max-w-4xl leading-relaxed">
          Khác biệt hoàn toàn với chatbot kịch bản truyền thống nhờ khả năng tùy biến linh hoạt, tự động hóa an toàn và lấy dữ liệu thật làm gốc.
        </p>
      </motion.div>

      {/* 4 Strengths Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-auto">
        {strengths.map((item, idx) => {
          const IconComp = item.icon
          return (
            <motion.div
              key={idx}
              variants={item.isLeft ? morphLeftVariants : morphRightVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="canva-card p-6 sm:p-7 md:p-8 rounded-3xl flex flex-col justify-between hover:border-amber-400/60 transition-all group hover:-translate-y-2 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-3 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-amber-300">
                    <IconComp className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-white text-lg sm:text-xl group-hover:text-amber-200 transition-colors">
                  {item.label}
                </h3>
                <p className="font-heading text-xs sm:text-sm text-amber-300/90 font-semibold mb-3 mt-0.5">
                  {item.sub}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Highlights list */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-xs font-heading uppercase text-slate-400 block tracking-wider font-bold">
                  GIÁ TRỊ MANG LẠI:
                </span>
                <div className="space-y-1.5">
                  {item.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-center gap-2 text-xs font-medium text-emerald-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
