import React, { useState } from "react";
import {
  Github, Linkedin, Mail, Download, ArrowRight, Moon, Sun, ExternalLink,
  Cpu, Cog, CircuitBoard, Code2, Bot, Wrench, GraduationCap,
  Briefcase, MapPin, Menu, X, Play
} from "lucide-react";

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // ---- Theme tokens (toggle-driven, ไม่พึ่ง tailwind config) ----
  const t = dark
    ? {
        bg: "bg-slate-950", surface: "bg-slate-900", surface2: "bg-slate-800/60",
        border: "border-slate-800", text: "text-slate-100", sub: "text-slate-400",
        navBg: "bg-slate-950/80", chip: "bg-slate-800 text-slate-300 border-slate-700",
        card: "bg-slate-900 border-slate-800 hover:border-emerald-500/50",
        accent: "text-emerald-400", accentBg: "bg-emerald-500 hover:bg-emerald-400 text-slate-950",
        accentOutline: "border-emerald-500/60 text-emerald-400 hover:bg-emerald-500/10",
        grid: "opacity-[0.07]",
      }
    : {
        bg: "bg-slate-50", surface: "bg-white", surface2: "bg-slate-100",
        border: "border-slate-200", text: "text-slate-900", sub: "text-slate-500",
        navBg: "bg-white/80", chip: "bg-slate-100 text-slate-600 border-slate-200",
        card: "bg-white border-slate-200 hover:border-emerald-500/60 shadow-sm",
        accent: "text-emerald-600", accentBg: "bg-emerald-600 hover:bg-emerald-500 text-white",
        accentOutline: "border-emerald-500/60 text-emerald-600 hover:bg-emerald-50",
        grid: "opacity-[0.04]",
      };

  const nav = [
    ["About", "about"], ["Skills", "skills"], ["Projects", "projects"],
    ["Experience", "experience"], ["Contact", "contact"],
  ];

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${t.bg} ${t.text} min-h-screen font-sans transition-colors duration-300`}>
      {/* ---------------- NAV ---------------- */}
      <header className={`sticky top-0 z-40 backdrop-blur ${t.navBg} border-b ${t.border}`}>
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <button onClick={() => go("hero")} className="flex items-center gap-2 font-semibold tracking-tight">
            <span className={`grid place-items-center w-8 h-8 rounded-lg ${t.accentBg}`}>
              <Cog size={18} />
            </span>
            <span>YourName<span className={t.accent}>.</span></span>
          </button>

          <nav className="hidden md:flex items-center gap-7 text-sm">
            {nav.map(([label, id]) => (
              <button key={id} onClick={() => go(id)} className={`${t.sub} hover:${t.text} transition-colors`}>
                {label}
              </button>
            ))}
            <button onClick={() => setDark(!dark)} className={`p-2 rounded-lg ${t.surface2} ${t.border} border`}>
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => go("contact")} className={`px-4 py-2 rounded-lg text-sm font-medium ${t.accentBg}`}>
              Let's connect
            </button>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <button onClick={() => setDark(!dark)} className={`p-2 rounded-lg ${t.surface2} ${t.border} border`}>
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className={`p-2 rounded-lg ${t.surface2} ${t.border} border`}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className={`md:hidden border-t ${t.border} ${t.surface} px-5 py-3 flex flex-col gap-1`}>
            {nav.map(([label, id]) => (
              <button key={id} onClick={() => go(id)} className={`text-left py-2 ${t.sub}`}>{label}</button>
            ))}
          </div>
        )}
      </header>

      <main className="relative">
        {/* ---------------- HERO ---------------- */}
        <section id="hero" className="max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border ${t.chip} mb-6`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to internships & new-grad roles
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Your Name
              </h1>
              <p className={`mt-3 text-xl md:text-2xl font-medium ${t.accent}`}>
                Mechatronics Engineer
              </p>
              <p className={`mt-5 text-base md:text-lg ${t.sub} max-w-md leading-relaxed`}>
                Robotics · embedded systems · control. I design, build, and program
                machines that bridge mechanical, electrical, and software domains.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => go("projects")} className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium ${t.accentBg}`}>
                  View Projects <ArrowRight size={18} />
                </button>
                <a href="#" className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium border ${t.accentOutline}`}>
                  <Download size={18} /> Download Resume
                </a>
              </div>
              <div className={`mt-8 flex items-center gap-4 ${t.sub}`}>
                <a href="#" className="hover:scale-110 transition-transform"><Github size={20} /></a>
                <a href="#" className="hover:scale-110 transition-transform"><Linkedin size={20} /></a>
                <a href="#" className="hover:scale-110 transition-transform"><Mail size={20} /></a>
              </div>
            </div>

            {/* rotating 3D placeholder (แทนโมเดล glTF จริง) */}
            <div className="flex justify-center md:justify-end">
              <Rotating3DPlaceholder dark={dark} accentClass={t.accent} subClass={t.sub} />
            </div>
          </div>
        </section>

        {/* ---------------- ABOUT ---------------- */}
        <Section id="about" t={t} kicker="01" title="About Me">
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`md:col-span-2 ${t.sub} leading-relaxed space-y-4`}>
              <p>
                <span className={t.text}>[Placeholder]</span> Final-year Mechatronics Engineering
                student at [University]. I'm fascinated by the point where mechanical design
                meets real-time control — designing a part in CAD, wiring the electronics,
                then writing firmware that makes it move.
              </p>
              <p>
                My focus areas are autonomous robotics and motion control. Outside the lab I
                compete with the university robotics team and tinker with 3D printing and
                home automation. I care about building things that actually work, then
                measuring how well they work.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2 text-sm">
                <span className="inline-flex items-center gap-2"><MapPin size={15} className={t.accent} /> Bangkok, Thailand</span>
                <span className="inline-flex items-center gap-2"><GraduationCap size={15} className={t.accent} /> B.Eng. Mechatronics, 2026</span>
                <span className="inline-flex items-center gap-2"><Briefcase size={15} className={t.accent} /> Open to work</span>
              </div>
            </div>
            <div className={`rounded-2xl border ${t.border} ${t.surface} grid place-items-center aspect-square`}>
              <span className={`text-sm ${t.sub}`}>[ Your photo ]</span>
            </div>
          </div>
        </Section>

        {/* ---------------- SKILLS ---------------- */}
        <Section id="skills" t={t} kicker="02" title="Skills">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS.map((g) => (
              <div key={g.title} className={`rounded-2xl border p-5 ${t.card} transition-colors`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`grid place-items-center w-9 h-9 rounded-lg ${t.surface2} ${t.accent}`}>
                    <g.icon size={18} />
                  </span>
                  <h3 className="font-semibold">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className={`text-xs px-2.5 py-1 rounded-md border ${t.chip}`}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------------- PROJECTS ---------------- */}
        <Section id="projects" t={t} kicker="03" title="Projects" subtitle="Selected case studies — problem → role → process → results.">
          <div className="space-y-6">
            {PROJECTS.map((p, i) => (
              <div key={i} className={`group rounded-2xl border overflow-hidden ${t.card} transition-colors`}>
                <div className="grid md:grid-cols-5">
                  {/* visual placeholder */}
                  <div className={`md:col-span-2 relative ${t.surface2} min-h-[200px] grid place-items-center`}>
                    <span className={`text-sm ${t.sub}`}>[ CAD render / demo video ]</span>
                    {p.demo && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-emerald-500 text-slate-950 font-medium">
                        <Play size={12} /> Demo
                      </span>
                    )}
                  </div>
                  {/* content */}
                  <div className="md:col-span-3 p-6">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className={`mt-2 text-sm ${t.sub} leading-relaxed`}>{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <div className={`text-xl font-bold ${t.accent}`}>{m.value}</div>
                          <div className={`text-[11px] uppercase tracking-wide ${t.sub}`}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((tg) => (
                        <span key={tg} className={`text-xs px-2.5 py-1 rounded-md border ${t.chip}`}>{tg}</span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
                      <a href="#" className={`inline-flex items-center gap-1.5 ${t.accent} hover:underline`}>
                        <Github size={15} /> Code
                      </a>
                      <a href="#" className={`inline-flex items-center gap-1.5 ${t.accent} hover:underline`}>
                        <Play size={15} /> Watch demo
                      </a>
                      <a href="#" className={`inline-flex items-center gap-1.5 ${t.accent} hover:underline`}>
                        <ExternalLink size={15} /> Full writeup
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------------- EXPERIENCE + EDUCATION ---------------- */}
        <Section id="experience" t={t} kicker="04" title="Experience & Education">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className={`text-sm font-semibold uppercase tracking-wide ${t.sub} mb-5`}>Experience</h3>
              <Timeline t={t} items={EXPERIENCE} />
            </div>
            <div>
              <h3 className={`text-sm font-semibold uppercase tracking-wide ${t.sub} mb-5`}>Education & Awards</h3>
              <Timeline t={t} items={EDUCATION} />
            </div>
          </div>
        </Section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="max-w-6xl mx-auto px-5 py-20 md:py-28">
          <div className={`rounded-3xl border ${t.border} ${t.surface} p-8 md:p-12`}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className={`text-sm font-mono ${t.accent}`}>05</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-1">Let's connect</h2>
                <p className={`mt-4 ${t.sub} leading-relaxed`}>
                  I'm actively looking for internship and new-grad opportunities in robotics,
                  automation, and embedded systems. Reach out — I'd love to talk.
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  <a href="#" className="flex items-center gap-3 hover:underline"><Mail size={17} className={t.accent} /> you@email.com</a>
                  <a href="#" className="flex items-center gap-3 hover:underline"><Linkedin size={17} className={t.accent} /> linkedin.com/in/yourname</a>
                  <a href="#" className="flex items-center gap-3 hover:underline"><Github size={17} className={t.accent} /> github.com/yourname</a>
                </div>
                <a href="#" className={`mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium ${t.accentBg}`}>
                  <Download size={18} /> Download Resume
                </a>
              </div>

              {/* mock form — ของจริงต่อ Formspree */}
              <div className={`rounded-2xl border ${t.border} ${t.surface2} p-6`}>
                <div className="space-y-4">
                  <Field t={t} label="Name" placeholder="Recruiter name" />
                  <Field t={t} label="Email" placeholder="name@company.com" />
                  <div>
                    <label className={`block text-xs font-medium mb-1.5 ${t.sub}`}>Message</label>
                    <textarea rows={3} placeholder="Your message…" className={`w-full rounded-lg border ${t.border} ${t.surface} px-3 py-2 text-sm outline-none focus:border-emerald-500`} />
                  </div>
                  <button className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium ${t.accentBg}`}>
                    Send message <ArrowRight size={17} />
                  </button>
                  <p className={`text-[11px] text-center ${t.sub}`}>* Prototype only — wire to Formspree / serverless later</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- FOOTER ---------------- */}
        <footer className={`border-t ${t.border}`}>
          <div className={`max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm ${t.sub}`}>
            <span>© 2026 Your Name · Mechatronics Engineer</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:scale-110 transition-transform"><Github size={18} /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Linkedin size={18} /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Mail size={18} /></a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ---------------- helpers ---------------- */
function Section({ id, t, kicker, title, subtitle, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-5 py-16 md:py-20 scroll-mt-20">
      <div className="mb-8">
        <span className={`text-sm font-mono ${t.accent}`}>{kicker}</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-1">{title}</h2>
        {subtitle && <p className={`mt-2 ${t.sub}`}>{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function Field({ t, label, placeholder }) {
  return (
    <div>
      <label className={`block text-xs font-medium mb-1.5 ${t.sub}`}>{label}</label>
      <input placeholder={placeholder} className={`w-full rounded-lg border ${t.border} ${t.surface} px-3 py-2 text-sm outline-none focus:border-emerald-500`} />
    </div>
  );
}

function Timeline({ t, items }) {
  return (
    <div className="space-y-6">
      {items.map((it, i) => (
        <div key={i} className="relative pl-6">
          <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500" />
          {i !== items.length - 1 && (
            <span className={`absolute left-[4px] top-4 bottom-[-18px] w-px ${t.border} border-l`} />
          )}
          <div className={`text-xs font-mono ${t.sub}`}>{it.period}</div>
          <div className="font-semibold mt-0.5">{it.title}</div>
          <div className={`text-sm ${t.accent}`}>{it.org}</div>
          <p className={`text-sm ${t.sub} mt-1 leading-relaxed`}>{it.detail}</p>
        </div>
      ))}
    </div>
  );
}

function Rotating3DPlaceholder({ dark, accentClass, subClass }) {
  return (
    <div className="relative" style={{ perspective: "900px" }}>
      <style>{`
        @keyframes spin3d { from { transform: rotateX(-22deg) rotateY(0deg);} to { transform: rotateX(-22deg) rotateY(360deg);} }
        @media (prefers-reduced-motion: reduce){ .cube3d{ animation: none !important; } }
      `}</style>
      <div
        className="cube3d relative"
        style={{ width: 200, height: 200, transformStyle: "preserve-3d", animation: "spin3d 14s linear infinite" }}
      >
        {[
          { tf: "translateZ(100px)" }, { tf: "rotateY(180deg) translateZ(100px)" },
          { tf: "rotateY(90deg) translateZ(100px)" }, { tf: "rotateY(-90deg) translateZ(100px)" },
          { tf: "rotateX(90deg) translateZ(100px)" }, { tf: "rotateX(-90deg) translateZ(100px)" },
        ].map((f, i) => (
          <div
            key={i}
            className="absolute grid place-items-center"
            style={{
              width: 200, height: 200, transform: f.tf,
              border: `1px solid ${dark ? "rgba(16,185,129,0.5)" : "rgba(5,150,105,0.5)"}`,
              background: dark ? "rgba(16,185,129,0.06)" : "rgba(16,185,129,0.04)",
              backdropFilter: "blur(2px)",
            }}
          >
            <Cog size={48} className={accentClass} style={{ opacity: 0.55 }} />
          </div>
        ))}
      </div>
      <p className={`text-center text-xs mt-6 ${subClass}`}>
        [ interactive 3D model placeholder ]<br />ของจริง → glTF + Three.js / model-viewer
      </p>
    </div>
  );
}

/* ---------------- placeholder data ---------------- */
const SKILLS = [
  { title: "CAD / Mechanical", icon: Wrench, items: ["SolidWorks", "Fusion 360", "GD&T", "3D Printing", "DFM"] },
  { title: "Electronics", icon: CircuitBoard, items: ["PCB (KiCad)", "Sensors", "Motor drivers", "Power", "Soldering"] },
  { title: "Embedded", icon: Cpu, items: ["Arduino", "ESP32", "STM32", "Raspberry Pi", "RTOS"] },
  { title: "Control & Sim", icon: Cog, items: ["MATLAB/Simulink", "PID", "State-space", "Kinematics"] },
  { title: "Robotics", icon: Bot, items: ["ROS2", "OpenCV", "PLC (Siemens)", "Path planning"] },
  { title: "Programming", icon: Code2, items: ["C / C++", "Python", "Git", "Linux"] },
];

const PROJECTS = [
  {
    title: "Autonomous line-following robot with PID control",
    desc: "Designed and built a differential-drive robot that follows a track autonomously. Tuned a PID controller for stable high-speed tracking; full mechanical, electrical, and firmware ownership.",
    metrics: [{ value: "−35%", label: "trajectory error" }, { value: "1.4 m/s", label: "max stable speed" }],
    tags: ["STM32", "C", "SolidWorks", "PID", "PCB"],
    demo: true,
  },
  {
    title: "6-DOF robotic arm — pick & place",
    desc: "CAD-designed robotic arm with inverse-kinematics control via ROS2. Built for a sorting task; reduced cycle time through trajectory optimization.",
    metrics: [{ value: "12→8 s", label: "cycle time" }, { value: "98%", label: "pick success" }],
    tags: ["ROS2", "Python", "Fusion 360", "OpenCV"],
    demo: true,
  },
  {
    title: "Smart-factory conveyor sorting (PLC)",
    desc: "Vision-assisted sorting line programmed on a Siemens PLC with HMI. Integrated sensors and pneumatics for reliable part diversion at production speed.",
    metrics: [{ value: "+22%", label: "throughput" }, { value: "0.3%", label: "error rate" }],
    tags: ["PLC", "TIA Portal", "HMI", "Sensors"],
    demo: false,
  },
];

const EXPERIENCE = [
  { period: "2025", title: "Automation Engineering Intern", org: "[Company]", detail: "Supported PLC programming and robot cell commissioning on a smart-factory line." },
  { period: "2024 – now", title: "Robotics Team — Lead", org: "[University Robotics Club]", detail: "Led mechanical design and controls for competition robots." },
];

const EDUCATION = [
  { period: "2022 – 2026", title: "B.Eng. Mechatronics Engineering", org: "[University]", detail: "GPA X.XX · Relevant: Control Systems, Robotics, Embedded Systems." },
  { period: "2025", title: "1st Place — Robotics Competition", org: "[Event name]", detail: "Award for autonomous navigation challenge." },
  { period: "2024", title: "SolidWorks CSWA", org: "Dassault Systèmes", detail: "Certified Associate — Mechanical Design." },
];
