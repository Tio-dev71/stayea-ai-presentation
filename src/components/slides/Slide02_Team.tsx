import React from "react"
import { motion } from "motion/react"
import { Crown, Mic, FileText, CheckCircle2, Sparkles, Award, Shield, UserCheck } from "lucide-react"
import { CanvaAtmosphere } from "../CanvaAtmosphere"

export const Slide02_Team: React.FC<{ isActive: boolean }> = () => {
  const members = [
    {
      name: "Nguyễn Đình Thọ",
      mssv: "75DCTT21524",
      role: "Trưởng nhóm",
      isLead: true,
      tasks: "Lên ý tưởng, làm slide, kiểm tra nội dung",
      avatar: "/images/team-1.jpg",
      icon: Crown,
      tagColor: "from-amber-500 to-amber-700",
      borderColor: "border-amber-400",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/40",
    },
    {
      name: "Nguyễn Việt Tiến",
      mssv: "75DCTT21537",
      role: "Thành viên",
      isLead: false,
      tasks: "Thuyết trình báo cáo hội đồng",
      avatar: "/images/team-2.jpg",
      icon: Mic,
      tagColor: "from-emerald-500 to-teal-700",
      borderColor: "border-emerald-400",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
    },
    {
      name: "Ngô Thị Thùy Linh",
      mssv: "75DCTT21411",
      role: "Thành viên",
      isLead: false,
      tasks: "Nghiên cứu tài liệu & xây dựng nội dung",
      avatar: "/images/team-3.jpg",
      icon: FileText,
      tagColor: "from-cyan-500 to-blue-700",
      borderColor: "border-cyan-400",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",
    },
    {
      name: "Đỗ Hà Linh",
      mssv: "75DCTT21408",
      role: "Thành viên",
      isLead: false,
      tasks: "Nghiên cứu tài liệu & hoàn thiện nội dung",
      avatar: "/images/team-4.jpg",
      icon: FileText,
      tagColor: "from-emerald-500 to-cyan-700",
      borderColor: "border-emerald-400",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
    },
  ]

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16 overflow-hidden select-none">
      <CanvaAtmosphere />

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex items-center justify-between"
      >
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="text-xs sm:text-sm md:text-base font-heading font-bold tracking-[0.25em] text-emerald-300 uppercase">
            02 · GIỚI THIỆU NHÂN SỰ ĐỀ TÀI
          </span>
        </div>

        <div className="px-4 py-2 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-mono flex items-center gap-2 shadow-xl backdrop-blur-md">
          <Award className="w-4 h-4 text-amber-300" />
          <span className="font-semibold">Khoa CNTT - Đồ Án Chuyên Ngành 1</span>
        </div>
      </motion.div>

      {/* Main Split Layout: Left 4 Members List | Divider | Right Canva Graphic */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 my-auto items-center">
        {/* Left Col (7 cols): 4 Member Cards with Circular Avatars */}
        <div className="lg:col-span-7 space-y-4 xl:space-y-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-1"
          >
            <span className="text-xs sm:text-sm font-heading font-bold uppercase tracking-widest text-amber-400 block mb-1">
              DANH SÁCH SINH VIÊN THỰC HIỆN
            </span>
            <p className="text-xs sm:text-sm md:text-base text-slate-300">
              Nhóm sinh viên chuyên ngành Kỹ thuật Phần mềm / Công nghệ Thông tin
            </p>
          </motion.div>

          <div className="space-y-3.5 xl:space-y-4">
            {members.map((member, idx) => {
              const IconComp = member.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-emerald-400/50 transition-all duration-300 group shadow-lg backdrop-blur-md"
                >
                  {/* Circular Avatar Frame (Matching Canva template) */}
                  <div className="relative shrink-0">
                    <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full overflow-hidden border-2 ${member.borderColor} p-0.5 shadow-md shadow-emerald-950/40`}>
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover object-top rounded-full group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Badge Icon on Avatar */}
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br ${member.tagColor} border border-white/40 flex items-center justify-center text-white shadow-md`}>
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Name, Student ID & Assigned Tasks */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-amber-300 transition-colors">
                        {member.name}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${member.badgeColor}`}>
                        {member.role}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs sm:text-sm font-mono font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/30">
                        MSSV: {member.mssv}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm md:text-base text-slate-200 mt-2">
                      <strong className="text-amber-300 font-semibold">Nhiệm vụ: </strong>
                      {member.tasks}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Vertical Divider (Classic Canva double green line) */}
        <div className="hidden lg:flex lg:col-span-1 justify-center h-96 items-center">
          <div className="canva-double-line" />
        </div>

        {/* Right Col (4 cols): Canva Large Title & Thematic Visual Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-4 space-y-6"
        >
          {/* Big Bold Heading matching user's Image 2 */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-heading font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ĐỒ ÁN CHUYÊN NGÀNH 1</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.08]">
              THÀNH VIÊN <br />
              <span className="gold-gradient-text-pure">TRONG NHÓM</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium mt-3.5 leading-relaxed">
              Báo cáo tiến độ phân chia công việc, nghiên cứu kiến trúc hệ thống và kiểm thử đề tài <strong className="text-amber-300 font-bold">Chatbot AI CSKH STAYEA</strong>.
            </p>
          </div>

          {/* Thematic Visual Card with Real Island Picture */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-[#062429]/90 backdrop-blur-xl">
            <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden">
              <img
                src="/images/phuquoc.jpg"
                alt="Phú Quốc Island"
                className="w-full h-full object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062429] via-transparent to-black/30" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-heading uppercase text-amber-300 tracking-wider font-bold block mb-0.5">
                  ĐỊA BÀN NGHIÊN CỨU & TRIỂN KHAI
                </span>
                <h4 className="font-heading font-black text-lg sm:text-xl">Hệ Thống Nghỉ Dưỡng Đảo Phú Quốc</h4>
              </div>
            </div>

            {/* Quick Task Summary Box */}
            <div className="p-5 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                <span className="text-slate-400">Thời gian báo cáo:</span>
                <span className="text-white font-mono font-bold text-sm sm:text-base">Tháng 11 / 2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Giảng viên hướng dẫn:</span>
                <span className="text-emerald-300 font-bold font-heading text-sm sm:text-base">Bộ môn Kỹ Thuật Phần Mềm</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
