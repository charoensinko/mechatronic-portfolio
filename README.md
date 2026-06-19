# Mechatronics Portfolio — Prototype

เว็บพอร์ตโฟลิโอ (Vite + React + Tailwind CSS v4 + lucide-react)
เวอร์ชันนี้ = **ไม่มีเส้น grid** + สลับ Dark/Light ได้ + responsive

---

## โครงสร้างไฟล์

```
mechatronicporfolio/
├─ index.html
├─ package.json
├─ vite.config.js
├─ vercel.json
├─ .gitignore
├─ README.md
└─ src/
   ├─ main.jsx
   ├─ index.css
   └─ App.jsx   ← โค้ดเว็บทั้งหมดอยู่ที่นี่ (แก้เนื้อหาที่นี่)
```

---

## วิธีรันในเครื่อง (VS Code Terminal)

> ต้องมี Node.js ติดตั้งก่อน (แนะนำเวอร์ชัน 18 ขึ้นไป — เช็คด้วย `node -v`)
> ถ้ายังไม่มี โหลดที่ https://nodejs.org (เลือก LTS)

1. แตกไฟล์ zip นี้ลงในโฟลเดอร์ `mechatronicporfolio` บน Desktop
2. เปิดโฟลเดอร์นั้นด้วย VS Code (File → Open Folder)
3. เปิด Terminal ใน VS Code (เมนู Terminal → New Terminal หรือ Ctrl + `)
4. รันคำสั่ง:

```bash
npm install      # ติดตั้ง dependencies (ครั้งแรกครั้งเดียว)
npm run dev      # เปิด dev server
```

5. เปิดเบราว์เซอร์ไปที่ URL ที่ขึ้นใน Terminal (ปกติคือ http://localhost:5173)
6. แก้โค้ดใน `src/App.jsx` แล้วหน้าเว็บจะรีเฟรชเองอัตโนมัติ (hot reload)

ทดสอบ production build (ไม่บังคับ):

```bash
npm run build    # สร้างไฟล์ลงโฟลเดอร์ dist/
npm run preview  # ลองเปิดดูเวอร์ชัน build
```

---

## วิธี Deploy ขึ้น Vercel

### ขั้นที่ 1 — ดัน code ขึ้น GitHub ก่อน

```bash
git init
git add .
git commit -m "Initial portfolio prototype"
```

จากนั้นสร้าง repo ว่างบน https://github.com/new (ตั้งชื่อเช่น `mechatronic-portfolio`)
แล้วเชื่อม + push (เปลี่ยน USERNAME เป็นของคุณ):

```bash
git remote add origin https://github.com/USERNAME/mechatronic-portfolio.git
git branch -M main
git push -u origin main
```

### ขั้นที่ 2 — เชื่อม Vercel (วิธีง่ายสุด ผ่านเว็บ)

1. เข้า https://vercel.com → Sign up / Log in ด้วยบัญชี GitHub
2. กด **Add New → Project**
3. เลือก repo `mechatronic-portfolio` → กด **Import**
4. Vercel จะ detect Framework = **Vite** ให้อัตโนมัติ
   - Build Command: `npm run build` (ตั้งให้แล้ว)
   - Output Directory: `dist` (ตั้งให้แล้ว)
   - **ไม่ต้องแก้อะไร** กด **Deploy** ได้เลย
5. รอ ~1 นาที → ได้ URL live เช่น `https://mechatronic-portfolio.vercel.app`

> ตั้งแต่นี้ทุกครั้งที่ `git push` ขึ้น main → Vercel จะ deploy ใหม่อัตโนมัติ
> และทุก branch/PR จะได้ Preview URL ให้ลองดูก่อน merge

### (ทางเลือก) Deploy ผ่าน Vercel CLI

```bash
npm i -g vercel
vercel           # ครั้งแรก: ตอบคำถาม setup
vercel --prod    # deploy เวอร์ชัน production
```

---

## หมายเหตุสำหรับพัฒนาต่อ

- **เนื้อหา placeholder** อยู่ท้ายไฟล์ `src/App.jsx` (ตัวแปร SKILLS, PROJECTS, EXPERIENCE, EDUCATION) — แก้ตรงนั้นได้เลย
- **ฟอร์มติดต่อ** ยังเป็น mock — ของจริงให้ต่อ Formspree (https://formspree.io) หรือ serverless function
- **โมเดล 3D** ยังเป็นกล่องหมุน CSS — ของจริงให้ใส่ glTF + `@google/model-viewer` หรือ Three.js / React Three Fiber
- **ปุ่ม Download Resume / ลิงก์โซเชียล** ยังเป็น `#` — ใส่ลิงก์จริงและวางไฟล์ PDF ใน `public/`
- Vercel Hobby plan ฟรีสำหรับใช้ส่วนตัว (non-commercial) — พอร์ตหางานอยู่ในเงื่อนไข

---

Built with Vite + React + Tailwind CSS v4
