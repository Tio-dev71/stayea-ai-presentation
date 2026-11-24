# 🌟 STAYEA AI Concierge - Slide Thuyết Trình Đồ Án 1

> **Đề tài:** Chatbot AI Chăm Sóc Khách Hàng & Tự Động Điều Phối Dịch Vụ Du Lịch Phú Quốc  
> **Nền tảng:** STAYEA Luxury Concierge Ecosystem  
> **Công nghệ chủ đạo:** AI 9router Gateway, Gemini 2.5 Flash, NestJS, Next.js 15, Drizzle ORM, Framer Motion

---

## 🚀 Tính Năng Nổi Bật Của Bộ Slide

1. **Hiệu Ứng Chuyển Động Điện Ảnh (Motion & Morph):**
   - Áp dụng `motion/react` (Framer Motion) mô phỏng hiệu ứng Morphing 3D mượt mà tương tự PowerPoint Morph cao cấp.
   - Thanh tiến trình thời gian thực (Progress bar) phát sáng theo từng slide.
   - Hiệu ứng pháo hoa ăn mừng (Confetti) tự động bắn khi chuyển sang slide Kết luận (Slide 15).

2. **Tích Hợp Live Interactive Chatbot Ngay Trong Slide (Slide 12):**
   - Khung chat thực tế với 2 chế độ: **STAYEA AI Concierge (Tự động 24/7)** và **Chuyên viên VIP (Người thật)**.
   - 4 kịch bản thử nhanh (One-click Quick Prompts):
     - 🏡 *Tra cứu Villa ven biển Phú Quốc* (Khai thác Dynamic Catalog chống ảo giác).
     - 🚗 *Đặt xe 7 chỗ tự lái Mitsubishi Xpander* (Kích hoạt Function Calling `create_booking_draft` sinh **Booking Preview Card** và mã đơn `ORD-AI-XXXXXX`).
     - 🚤 *Tour cano 4 đảo ngắm hoàng hôn*.
     - 🛡️ *Kiểm thử tấn công Prompt Injection* (AI kích hoạt Guardrails từ chối cung cấp mật khẩu server và điều hướng lại cuộc trò chuyện du lịch).

3. **Công Cụ Thuyết Trình Chuyên Nghiệp:**
   - 🗺️ **Slide Overview Grid (`Phím O`):** Xem lưới thu nhỏ toàn bộ 15 slides để nhảy nhanh đến bất kỳ slide nào.
   - 🎙️ **Speaker Presenter Notes (`Phím S`):** Cửa sổ ghi chú lời thoại, ý chính cần nhấn mạnh và bộ câu hỏi phản biện của hội đồng kèm đáp án mẫu.
   - 🖥️ **Fullscreen Mode (`Phím F`):** Trình chiếu toàn màn hình không viền.

---

## ⌨️ Phím Tắt Điều Khiển Khi Báo Cáo

| Phím Tắt | Chức Năng |
| :--- | :--- |
| `➔` / `Space` / `PageDown` | Chuyển sang slide tiếp theo |
| `⬅` / `PageUp` | Quay lại slide trước đó |
| `O` | Bật / Tắt danh sách tổng quan 15 slides |
| `S` | Bật / Tắt ghi chú thuyết trình (Speaker Notes & FAQ) |
| `F` | Bật / Tắt chế độ toàn màn hình (Fullscreen) |
| `Home` / `End` | Về slide đầu tiên / Nhảy tới slide kết luận |

---

## 📦 Hướng Dẫn Chạy Cục Bộ (Local Development)

```bash
# Di chuyển vào thư mục dự án trên Desktop
cd /Users/tiodev/Desktop/stayea-ai-presentation

# Cài đặt thư viện (nếu chưa cài)
pnpm install
# hoặc npm install

# Khởi chạy máy chủ phát triển
pnpm dev
# hoặc npm run dev
```

Mở trình duyệt truy cập: `http://localhost:3000`

---

## ☁️ Hướng Dẫn Đẩy Lên GitHub & Triển Khai Lên Vercel

### Bước 1: Tạo Repository mới trên GitHub
1. Truy cập [GitHub New Repo](https://github.com/new).
2. Đặt tên repository: `stayea-ai-chatbot-presentation`.
3. Chọn chế độ **Public** hoặc **Private** rồi nhấn **Create repository**.

### Bước 2: Đẩy source code lên GitHub
Chạy các lệnh sau trong terminal:

```bash
cd /Users/tiodev/Desktop/stayea-ai-presentation

# Đổi remote URL thành repo của bạn
git remote add origin https://github.com/<tai-khoan-github-cua-ban>/stayea-ai-chatbot-presentation.git
git branch -M main
git push -u origin main
```

### Bước 3: Triển khai lên Vercel
1. Đăng nhập [Vercel Dashboard](https://vercel.com).
2. Nhấn **Add New...** ➔ **Project**.
3. Chọn repository `stayea-ai-chatbot-presentation`.
4. Vercel sẽ tự động phát hiện `Framework Preset: Vite` và cấu hình trong file `vercel.json`:
   - **Build Command:** `pnpm build` hoặc `npm run build`
   - **Output Directory:** `dist`
5. Nhấn **Deploy** ➔ Hoàn tất trong chưa đầy 30 giây! Bạn sẽ nhận được đường link dạng `https://stayea-ai-chatbot-presentation.vercel.app` để trình chiếu bất kỳ đâu.

---

## 📚 Danh Mục 15 Slides Chuẩn Đồ Án 1

- **Slide 01:** Trang Tiêu Đề (Title Slide)
- **Slide 02:** Thực Trạng & Vấn Đề Cốt Lõi (Problem Statement)
- **Slide 03:** Mục Tiêu & Phạm Vi Nghiên Cứu (Objectives)
- **Slide 04:** Kiến Trúc Công Nghệ & AI 9router (Tech Stack & AI Gateway)
- **Slide 05:** Chu Trình Thực Thi 2 Lượt (Two-Turn Execution Cycle)
- **Slide 06:** Kỹ Thuật Dynamic Catalog Injection (Chống Ảo Giác AI)
- **Slide 07:** Cơ Chế Function Calling (Tự Động Sinh Đơn Hàng)
- **Slide 08:** Mô Hình Hybrid CSKH (AI + Human-in-the-Loop)
- **Slide 09:** Bảo Mật Guardrails & Resilient Smart Fallback
- **Slide 10:** Thiết Kế Cơ Sở Dữ Liệu (PostgreSQL & Drizzle ORM)
- **Slide 11:** Module Quản Trị AI & Prompt Sandbox (Admin Control Panel)
- **Slide 12:** Kịch Bản Demo Tương Tác Trực Tiếp (Live Interactive Widget)
- **Slide 13:** Kết Quả Đạt Được & Hiệu Quả Thực Tiễn (Metrics & KPIs)
- **Slide 14:** Hạn Chế & Hướng Phát Triển (Đồ Án Tốt Nghiệp Q1/2027)
- **Slide 15:** Tổng Kết & Hỏi Đáp Phản Biện (Q&A)
