import React from "react"
import { motion } from "motion/react"
import { ShieldCheck, Database, CheckCircle2, Sparkles } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

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
      title: "Tour Cano 4 Đảo & Lặn San Hô",
      category: "TOUR TRẢI NGHIỆM VIP",
      price: "1.150.000 ₫ / khách",
      meta: "Cano SB cao tốc · Flycam tặng kèm · An Thới",
      image: "/images/cano.jpg",
      status: "Khởi hành hàng ngày",
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
            07 · KỸ THUẬT DYNAMIC CATALOG INJECTION
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black gold-gradient-text tracking-tight mt-1">
          Đồng Bộ Kho Dữ Liệu Thực Tế Chống Ảo Giác
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
          Giải pháp tiêm danh mục dịch vụ đang mở bán từ PostgreSQL vào System Prompt giúp AI luôn nói đúng giá, đúng loại phòng và đúng lịch xe.
        </p>
      </div>

      {/* Main Content: Real Product Showcase + Architectural Benefits */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-center">
        {/* Left Col (7 cols): 3 Real Service Showcase Cards */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between pb-1">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-amber-300">
              KHO DỊCH VỤ THỰC TẾ TRUY VẤN TỪ DATABASE
            </span>
            <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              Auto-Injected Prompt
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {sampleProducts.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 hover:border-emerald-400/50 transition-all group flex flex-col"
              >
                {/* Real Image */}
                <div className="relative h-28 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-mono text-emerald-300 border border-emerald-500/30">
                    {p.status}
                  </span>
                </div>

                {/* Details */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-heading font-semibold text-amber-300 block mb-0.5">
                      {p.category}
                    </span>
                    <h4 className="text-xs font-heading font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                      {p.title}
                    </h4>
                    <p className="text-[10px] text-slate-300 mt-1 line-clamp-1">
                      {p.meta}
                    </p>
                  </div>

                  <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-emerald-400">
                      {p.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Prompt constraint box */}
          <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Ràng buộc bảo mật:</strong> "AI chỉ được tư vấn sản phẩm thuộc danh mục trên; tuyệt đối từ chối tự tiện giảm giá hoặc bịa đặt dịch vụ."
            </span>
          </div>
        </div>

        {/* Right Col (5 cols): Core Technical Advantages */}
        <div className="lg:col-span-5 space-y-3.5">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4 rounded-3xl bg-white/[0.04] border border-amber-500/25 backdrop-blur-md"
          >
            <h3 className="font-heading font-bold text-white text-sm flex items-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Triệt Tiêu Hoàn Toàn Ảo Giác (Zero-Hallucination)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mô hình AI thông thường có thể tự bịa đặt giá rẻ để làm vui lòng người dùng. Nhờ Dynamic Injection, <strong>100% dữ liệu tư vấn</strong> đều phản ánh trung thực kho phòng và giá xe thực tế.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-4 rounded-3xl bg-white/[0.04] border border-amber-500/25 backdrop-blur-md"
          >
            <h3 className="font-heading font-bold text-white text-sm flex items-center gap-2 mb-1">
              <Database className="w-4 h-4 text-amber-400" />
              Cập Nhật Tức Thì Không Cần Fine-Tuning
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Khi đối tác thêm Villa mới hoặc điều chỉnh giá xe ngày Lễ/Tết, hệ thống cập nhật tức thì vào phiên chat kế tiếp mà <strong>không tốn chi phí huấn luyện lại mô hình</strong>.
            </p>
          </motion.div>

          {/* Stat Card */}
          <div className="canva-stat-card p-4">
            <span className="font-heading text-3xl font-black gold-gradient-text block leading-none mb-1">
              100%
            </span>
            <span className="text-[10px] font-heading font-bold tracking-wider text-amber-200 uppercase block">
              CHÍNH XÁC KHO GIÁ & THÔNG SỐ
            </span>
            <span className="text-[10px] text-slate-400">Dữ liệu nguồn duy nhất từ bảng dịch vụ PostgreSQL</span>
          </div>
        </div>
      </div>
    </div>
  )
}
