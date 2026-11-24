import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Crown,
  Mic,
  FileText,
  CheckCircle2,
  Sparkles,
  Award,
  Layers,
  GraduationCap,
  Lightbulb,
  BookOpen,
  Check,
  Compass,
  ArrowUpRight,
} from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"
import { FacebookAvatar } from "../FacebookAvatar"
import { Card3D } from "../Card3D"

interface Member {
  id: string
  name: string
  mssv: string
  role: string
  gender: "male" | "female"
  isLead: boolean
  tasks: string
  taskChips: string[]
  icon: React.ElementType
  themeColor: {
    accent: string
    border: string
    badge: string
    glow: string
    avatarRing: string
    tagGradient: string
  }
  highlightNote: string
}

export const Slide02_Team: React.FC<{ isActive: boolean }> = () => {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null)

  const members: Member[] = [
    {
      id: "tho",
      name: "Nguyễn Đình Thọ",
      mssv: "75DCTT21524",
      role: "Trưởng nhóm",
      gender: "male",
      isLead: true,
      tasks: "Lên ý tưởng, làm slide, kiểm tra nội dung & điều phối chung",
      taskChips: ["Lên ý tưởng đề tài", "Thiết kế Slide Canva", "Kiểm duyệt nội dung"],
      icon: Crown,
      themeColor: {
        accent: "text-amber-300",
        border: "border-amber-400/50 hover:border-amber-300",
        badge: "bg-amber-500/20 text-amber-300 border-amber-400/40",
        glow: "rgba(245, 184, 56, 0.25)",
        avatarRing: "border-amber-400",
        tagGradient: "from-amber-500 to-amber-700",
      },
      highlightNote: "Phụ trách định hướng kiến trúc AI 9router, quản lý tiến độ và hoàn thiện slide báo cáo.",
    },
    {
      id: "tien",
      name: "Nguyễn Việt Tiến",
      mssv: "75DCTT21537",
      role: "Thành viên · Thuyết trình",
      gender: "male",
      isLead: false,
      tasks: "Thuyết trình báo cáo hội đồng & phản biện đề tài",
      taskChips: ["Thuyết trình hội đồng", "Chuẩn bị demo", "Báo cáo kịch bản AI"],
      icon: Mic,
      themeColor: {
        accent: "text-teal-300",
        border: "border-teal-400/50 hover:border-teal-300",
        badge: "bg-teal-500/20 text-teal-300 border-teal-400/40",
        glow: "rgba(45, 212, 191, 0.25)",
        avatarRing: "border-teal-400",
        tagGradient: "from-teal-500 to-emerald-700",
      },
      highlightNote: "Đại diện nhóm báo cáo trực tiếp trước Hội đồng Đồ án 1, điều phối phiên Demo tương tác.",
    },
    {
      id: "thuy-linh",
      name: "Ngô Thị Thùy Linh",
      mssv: "75DCTT21411",
      role: "Thành viên · Nghiên cứu",
      gender: "female",
      isLead: false,
      tasks: "Nghiên cứu tài liệu & xây dựng nội dung nghiệp vụ",
      taskChips: ["Nghiên cứu tài liệu", "Xây dựng Catalog", "Kịch bản CSKH STAYEA"],
      icon: BookOpen,
      themeColor: {
        accent: "text-cyan-300",
        border: "border-cyan-400/50 hover:border-cyan-300",
        badge: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",
        glow: "rgba(34, 211, 238, 0.25)",
        avatarRing: "border-cyan-400",
        tagGradient: "from-cyan-500 to-blue-700",
      },
      highlightNote: "Khảo sát thực trạng quy trình CSKH du lịch Phú Quốc, thu thập dữ liệu biệt thự & xe tự lái.",
    },
    {
      id: "ha-linh",
      name: "Đỗ Hà Linh",
      mssv: "75DCTT21408",
      role: "Thành viên · Hoàn thiện",
      gender: "female",
      isLead: false,
      tasks: "Nghiên cứu tài liệu & hoàn thiện báo cáo đề tài",
      taskChips: ["Hoàn thiện nội dung", "Kiểm thử kịch bản AI", "Tổng hợp số liệu"],
      icon: CheckCircle2,
      themeColor: {
        accent: "text-emerald-300",
        border: "border-emerald-400/50 hover:border-emerald-300",
        badge: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
        glow: "rgba(52, 211, 153, 0.25)",
        avatarRing: "border-emerald-400",
        tagGradient: "from-emerald-500 to-teal-700",
      },
      highlightNote: "Kiểm tra độ chính xác thông tin chống ảo giác AI, đồng bộ tài liệu thuyết minh đồ án.",
    },
  ]

  // PowerPoint Morph Stagger Transition container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  }

  // Fluid PowerPoint Morph item animation
  const morphItemVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      scale: 0.94,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 240,
        damping: 22,
        mass: 0.8,
      },
    },
  }

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="relative z-10 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <motion.span
            animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]"
          />
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm md:text-base font-heading font-extrabold tracking-[0.25em] text-emerald-300 uppercase">
              02 · GIỚI THIỆU THÀNH VIÊN
            </span>
            <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
              Đề tài: Chatbot AI Chăm Sóc Khách Hàng STAYEA Phú Quốc
            </span>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-mono flex items-center gap-2 shadow-xl backdrop-blur-md"
        >
          <Award className="w-4 h-4 text-amber-300 animate-pulse" />
          <span className="font-semibold">Khoa CNTT · Đồ Án 1</span>
        </motion.div>
      </motion.div>

      {/* Main Split Layout: Left 2x2 Morph Cards Grid | Elegant Divider | Right 3D Visual Card */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 2xl:gap-14 my-auto items-center">
        {/* Left Col (7 cols): Modern 2x2 Morph Cards with 3D Parallax Tilt */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
          {/* Subheading with Morph entrance */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="mb-4 flex items-center justify-between"
          >
            <div>
              <span className="text-xs sm:text-sm font-heading font-black uppercase tracking-widest text-amber-400 flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-amber-300" />
                DANH SÁCH SINH VIÊN THỰC HIỆN
              </span>
              <p className="text-xs sm:text-sm text-slate-300">
                4 thành viên phối hợp chặt chẽ theo phân chia công việc rõ ràng
              </p>
            </div>

            <span className="hidden sm:inline-block text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 backdrop-blur-md">
              Chạm thẻ để xem chi tiết
            </span>
          </motion.div>

          {/* 2x2 Morph Cards Grid with 3D Tilt, Glare, and Spring Morphing */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 xl:gap-4.5"
          >
            {members.map((member) => {
              const IconComp = member.icon
              const isSelected = selectedMemberId === member.id

              return (
                <motion.div key={member.id} variants={morphItemVariants} layout>
                  <Card3D
                    intensity={10}
                    glare={true}
                    onClick={() =>
                      setSelectedMemberId(isSelected ? null : member.id)
                    }
                    className={`group relative flex flex-col justify-between p-4 sm:p-5 rounded-[26px] cursor-pointer transition-all duration-300 backdrop-blur-xl border ${
                      isSelected
                        ? `border-amber-400 bg-gradient-to-br from-emerald-950/85 via-[#0a272e]/90 to-black/90 shadow-[0_20px_45px_rgba(245,184,56,0.3)]`
                        : `bg-white/[0.04] hover:bg-white/[0.08] ${member.themeColor.border}`
                    } shadow-lg`}
                    style={{ borderRadius: "26px" }}
                  >
                    {/* Inner ambient light effect */}
                    <div
                      className="absolute inset-0 rounded-[26px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 20% 20%, ${member.themeColor.glow}, transparent 70%)`,
                      }}
                    />

                    {/* Top Row: Facebook Avatar + Name & Role */}
                    <div className="flex items-start gap-3.5 relative z-10">
                      {/* Facebook Silhouette Avatar */}
                      <FacebookAvatar
                        gender={member.gender}
                        isLead={member.isLead}
                        size={58}
                        borderColor={member.themeColor.avatarRing}
                        tagColor={member.themeColor.tagGradient}
                        badgeIcon={IconComp}
                      />

                      <div className="flex-1 min-w-0">
                        {/* Name with subtle hover transition */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-heading text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors leading-snug">
                            {member.name}
                          </h3>
                        </div>

                        {/* Role Pill */}
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold border ${member.themeColor.badge}`}
                          >
                            {member.role}
                          </span>
                        </div>

                        {/* MSSV Tag */}
                        <div className="mt-1">
                          <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-emerald-500/30">
                            MSSV: {member.mssv}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tasks Section with PowerPoint Morph Chip tags */}
                    <div className="mt-3.5 pt-3 border-t border-white/10 relative z-10">
                      <span className="text-[11px] font-heading font-semibold text-amber-300 uppercase tracking-wider block mb-1.5 flex items-center justify-between">
                        <span>Nhiệm vụ chính:</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-300 transition-colors" />
                      </span>

                      {/* Morphing task tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {member.taskChips.map((chip, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 group-hover:bg-white/10 border border-white/10 text-slate-200 transition-colors"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>

                      {/* Expanded note on selection (Morphing detail drawer) */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2.5 pt-2 border-t border-amber-500/30 text-[11px] text-amber-200/90 leading-relaxed font-sans"
                          >
                            <span className="font-semibold text-amber-300">Đóng góp chuyên sâu: </span>
                            {member.highlightNote}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Card3D>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bottom helper pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-3.5 flex items-center gap-2 text-[11px] text-slate-400 justify-center sm:justify-start"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>
              Thành viên nam/nữ có biểu tượng nhận diện chuẩn · Phối hợp đồng bộ qua GitHub & Trello
            </span>
          </motion.div>
        </div>

        {/* Vertical Divider (Classic Canva double green line) */}
        <div className="hidden lg:flex lg:col-span-1 justify-center h-88 xl:h-96 items-center">
          <div className="canva-double-line" />
        </div>

        {/* Right Col (4 cols): Canva Large Title & 3D Thematic Visual Card */}
        <motion.div
          initial={{ opacity: 0, x: 35, filter: "blur(6px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 24,
            delay: 0.25,
          }}
          className="lg:col-span-4 xl:col-span-4 space-y-4 xl:space-y-5"
        >
          {/* Big Bold Heading matching Canva style */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-heading font-semibold mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>ĐỒ ÁN 1 · PHÂN CÔNG</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.08]">
              THÀNH VIÊN <br />
              <span className="gold-gradient-text-pure">TRONG NHÓM</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-slate-200 font-medium mt-2 leading-relaxed">
              Báo cáo tiến độ phân chia công việc, nghiên cứu kiến trúc hệ thống và kiểm thử đề tài{" "}
              <strong className="text-amber-300 font-bold">Chatbot AI CSKH STAYEA</strong>.
            </p>
          </div>

          {/* 3D Thematic Visual Card with Real Island Picture */}
          <Card3D
            intensity={10}
            glare={true}
            className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-[#062429]/90 backdrop-blur-xl"
          >
            <div className="relative h-48 sm:h-56 md:h-60 w-full overflow-hidden bg-[#031518]">
              <img
                src="/images/phuquoc.jpg"
                alt="Phú Quốc Island"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                  transform: "translateZ(0)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062429] via-transparent to-black/30" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                <span className="text-[11px] font-heading uppercase text-amber-300 tracking-wider font-bold block mb-0.5">
                  ĐỊA BÀN NGHIÊN CỨU & TRIỂN KHAI
                </span>
                <h4 className="font-heading font-black text-base sm:text-lg">
                  Hệ Thống Nghỉ Dưỡng Đảo Phú Quốc
                </h4>
              </div>
            </div>

            {/* Quick Task Summary Box */}
            <div className="p-4 space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-slate-400">Thời gian báo cáo:</span>
                <span className="text-white font-mono font-bold text-xs sm:text-sm">
                  Tháng 11 / 2026
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Giảng viên hướng dẫn:</span>
                <span className="text-emerald-300 font-bold font-heading text-xs sm:text-sm">
                  Bộ môn Kỹ Thuật Phần Mềm
                </span>
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </div>
  )
}
