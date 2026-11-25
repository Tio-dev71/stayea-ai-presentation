import React from "react"
import { motion } from "motion/react"
import { ShieldCheck, Database, CheckCircle2, Sparkles } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import {
  morphTopVariants,
  morphLeftVariants,
  morphRightVariants,
} from "../MorphTransition"

export const Slide06_CatalogInjection: React.FC<{ isActive: boolean }> = () => {
  const sampleProducts = [
    {
      title: "Sunset Luxury Pool Villa",
      category: "LƯU TRÚ PHÚ QUỐC",
      price: "3.500.000 ₫ / đêm",
      meta: "4 Phòng ngủ · Hồ bơi vô cực · Bãi Trường",
      image: "/images/villa.jpg",
      status: "Còn trống 2 căn",
    },
    {
      title: "Mitsubishi Xpander 7 Chỗ",
      category: "XE TỰ LÁI & ĐƯA ĐÓN",
      price: "1.200.000 ₫ / ngày",
      meta: "Đời 2024 · Giao nhận tận sân bay Phú Quốc",
      image: "/images/car.jpg",
      status: "Sẵn sàng nhận xe",
    },
    {
      title: "Tour Cano 4 Đảo VIP",
      category: "TOUR TRẢI NGHIỆM ĐẢO",
      price: "1.150.000 ₫ / khách",
      meta: "Cano SB cao tốc · Flycam tặng kèm · An Thới",
      image: "/images/cano.jpg",
      status: "Khởi hành hàng ngày",
    },
  ]

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-14 pb-16 sm:pb-16 lg:pb-18 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Header with Morph Top */}
      <motion.div
        variants={morphTopVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-10"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs sm:text-sm font-heading font-bold tracking-[0.22em] text-amber-300 uppercase">
            07 · KỸ THUẬT DYNAMIC CATALOG INJECTION
          </span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-6xl font-black gold-gradient-text tracking-tight mt-1">
          Đồng Bộ Kho Dữ Liệu Thực Tế Chống Ảo Giác
        </h2>
        <p className="text-xs sm:text-sm md:text-base 2xl:text-lg text-slate-200 mt-1.5 max-w-4xl leading-relaxed">
          Giải pháp tiêm danh mục dịch vụ đang mở bán từ hệ thống vào ngữ cảnh tư vấn giúp AI luôn nói đúng giá, đúng loại phòng và đúng lịch xe.
        </p>
      </motion.div>

      {/* Main Content: Real Product Showcase + Architectural Benefits */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 my-auto items-center">
        {/* Left Col (7 cols): 3 Real Service Showcase Cards */}
        <motion.div
          variants={morphLeftVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-7 space-y-4"
        >
          <div className="flex items-center justify-between pb-1">
            <span className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-amber-300">
              KHO DỊCH VỤ THỰC TẾ TRUY VẤN TỪ DATABASE
            </span>
            <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/70 px-3 py-1 rounded-full border border-emerald-500/30">
              Auto-Injected Prompt
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {sampleProducts.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="rounded-3xl overflow-hidden bg-black/50 border border-white/10 hover:border-emerald-400/50 transition-all group flex flex-col shadow-xl"
              >
                {/* Real Image */}
                <div className="relative h-36 sm:h-44 md:h-48 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] sm:text-xs font-mono text-emerald-300 border border-emerald-500/30 font-bold">
                    {p.status}
                  </span>
                </div>

                {/* Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] sm:text-xs font-heading font-bold text-amber-300 block mb-1">
                      {p.category}
                    </span>
                    <h4 className="text-xs sm:text-sm md:text-base font-heading font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                      {p.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {p.meta}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm sm:text-base font-mono font-black text-emerald-400">
                      {p.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Prompt constraint box */}
          <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-xs sm:text-sm text-amber-200 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              <strong className="text-white">Ràng buộc bảo mật:</strong> "AI chỉ được tư vấn sản phẩm thuộc danh mục trên; tuyệt đối từ chối tự tiện giảm giá hoặc bịa đặt dịch vụ."
            </span>
          </div>
        </motion.div>

        {/* Right Col (5 cols): Core Technical Advantages with Morph Right */}
        <motion.div
          variants={morphRightVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-5 space-y-3.5 xl:space-y-4"
        >
          <div className="p-4 sm:p-5 rounded-3xl bg-white/[0.05] border border-amber-500/25 backdrop-blur-md">
            <h3 className="font-heading font-bold text-white text-base sm:text-lg flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Chống Ảo Giác AI (Zero-Hallucination)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-amber-200">Ảo giác AI</strong> là lỗi mô hình tự bịa đặt giá rẻ hoặc dịch vụ không có thật. Nhờ nạp danh mục thực tế theo thời gian thực, <strong>100% dữ liệu tư vấn</strong> đều khớp đúng kho phòng và giá xe.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl bg-white/[0.05] border border-amber-500/25 backdrop-blur-md">
            <h3 className="font-heading font-bold text-white text-base sm:text-lg flex items-center gap-2 mb-1.5">
              <Database className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Cập Nhật Tức Thì Không Cần Fine-Tuning</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-amber-200">Fine-Tuning</strong> là việc huấn luyện lại mô hình AI rất tốn kém mỗi khi dữ liệu đổi. Giải pháp của nhóm nạp dữ liệu động từ DB nên đổi giá Lễ/Tết là AI cập nhật ngay lập tức.
            </p>
          </div>

          {/* Stat Card */}
          <div className="canva-stat-card p-4 sm:p-5">
            <span className="font-heading text-3xl sm:text-4xl 2xl:text-5xl font-black gold-gradient-text block leading-none mb-1">
              100%
            </span>
            <span className="text-xs sm:text-sm font-heading font-bold tracking-wider text-amber-200 uppercase block mb-0.5">
              CHÍNH XÁC KHO GIÁ & THÔNG SỐ
            </span>
            <span className="text-xs text-slate-400">Dữ liệu nguồn duy nhất lấy trực tiếp từ hệ thống quản trị</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
