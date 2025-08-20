import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Shield as ShieldIcon, Bug, Cpu, ScanEye, Network, Fingerprint, Lock, Mail, Phone, ChevronRight, Globe2, ArrowRight, FileText, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

// ===== Brand =====
const brand = {
  bg: "bg-black",
  card: "bg-black/80",
  text: "text-white",
  subtext: "text-gray-400",
  border: "border-white/10",
  accentSolid: "bg-red-600 hover:bg-red-500",
  accentText: "text-red-500",
  red: "#cc0000",
};

const appFont = "font-[Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif]";

// ===== Inline SVG: Spider Security Shield (logo-style) =====
const SpiderShield: React.FC<{ className?: string; strokeWidth?: number }> = ({ className = "w-9 h-9", strokeWidth = 2 }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <path d="M32 4l22 6v17c0 16.6-10.8 29.9-22 33C21.8 56.9 12 43.6 12 27V10l20-6Z" fill="none" stroke={brand.red} strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <path d="M32 14c-9 0-16 7-16 16m32 0c0-9-7-16-16-16m-14 9c6 0 10 5 10 11m8 0c0-6 4-11 10-11M20 42c4-7 12-7 12-7s8 0 12 7" stroke={brand.red} strokeWidth={strokeWidth-0.3} fill="none"/>
    <circle cx="32" cy="30" r="3.5" fill={brand.red}/>
    <rect x="30.8" y="33.2" width="2.4" height="6" rx="1.2" fill={brand.red}/>
  </svg>
);

const Wordmark: React.FC<{ className?: string }> = ({ className = "text-2xl md:text-3xl font-extrabold tracking-tight" }) => (
  <div className={`select-none ${className}`} aria-label="Spider Security">
    <span className="text-white">Spider </span>
    <span className="text-red-600">Security</span>
  </div>
);

// ===== Tiny spider animation (subtle, not cluttered) =====
const TinySpider: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle cx="12" cy="12" r="3" fill="white"/>
    <circle cx="12" cy="9" r="2" fill="white"/>
    {/* legs */}
    <path d="M7 11 l-4 -2 M7 13 l-4 2 M17 11 l4 -2 M17 13 l4 2" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
  </svg>
);

// ===== Background graphics =====
const TopHackerBackdrop: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
    {/* modern animated hacker vibe (no spiderweb): layered gradients + slow conic sweep + subtle grid */}
    {/* gradient blobs */}
    <motion.div
      className="absolute inset-0"
      style={{
        background:
          `radial-gradient(1200px circle at 20% 20%, rgba(239,68,68,0.12), transparent 40%),
           radial-gradient(900px circle at 80% 30%, rgba(255,255,255,0.10), transparent 45%),
           radial-gradient(1100px circle at 60% 85%, rgba(239,68,68,0.08), transparent 52%)`,
      }}
      initial={{ opacity: 0.9 }}
      animate={{ opacity: [0.9, 1, 0.9] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* rotating conic highlight */}
    <motion.div
      className="absolute -inset-1 opacity-20"
      style={{
        backgroundImage:
          'conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.05), transparent 40%, rgba(255,255,255,0.05))',
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    />
    {/* subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
      aria-hidden
    />
    {/* sweeping light */}
    <motion.div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
      }}
      animate={{ x: ['-30%', '130%'] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);


const CustomGraphics: React.FC = () => (
  <div id="custom-graphics" className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* reserved for future minimal accents; removed spider thread to keep it sleek */}
  </div>
);


const SectionHeading: React.FC<{eyebrow?: string; title: string; subtitle?: string}> = ({eyebrow, title, subtitle}) => (
  <div className="mb-8">
    {eyebrow && (
      <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-wider bg-white/5 border-white/10 mb-3">
        <ShieldIcon className="w-3.5 h-3.5 text-red-500"/>
        <span className="text-gray-300">{eyebrow}</span>
      </div>
    )}
    <h2 className="text-3xl md:text-4xl text-white font-extrabold">{title}</h2>
    {subtitle && <p className="text-gray-400 mt-2 max-w-2xl">{subtitle}</p>}
  </div>
);

// ===== Certification badge (inline SVG placeholder; swap src to real logos on deploy) =====
const CertBadge: React.FC<{ label: string; title?: string }> = ({ label, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="px-4 py-3 rounded-xl border border-white/10 bg-black/70 text-white text-sm opacity-80 hover:opacity-100 transition will-change-transform"
    style={{ filter: 'grayscale(100%)' }}
    onMouseEnter={(e)=>{ (e.currentTarget as HTMLDivElement).style.filter='grayscale(0%)'; }}
    onMouseLeave={(e)=>{ (e.currentTarget as HTMLDivElement).style.filter='grayscale(100%)'; }}
    aria-label={title || label}
    title={title || label}
  >
    <svg width="84" height="22" viewBox="0 0 84 22" className="block">
      <rect x="0.5" y="0.5" width="83" height="21" rx="6" fill="#0b0b0b" stroke="rgba(255,255,255,0.12)" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="Inter, system-ui, Arial">{label}</text>
    </svg>
  </motion.div>
);

// ===== Utility: inject favicon/OG based on inline shield =====
const HeadTags: React.FC = () => {
  React.useEffect(() => {
    const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><path d='M32 4l22 6v17c0 16.6-10.8 29.9-22 33C21.8 56.9 12 43.6 12 27V10l20-6Z' fill='black' stroke='${brand.red}' stroke-width='3' stroke-linejoin='round'/><path d='M32 14c-9 0-16 7-16 16m32 0c0-9-7-16-16-16m-14 9c6 0 10 5 10 11m8 0c0-6 4-11 10-11M20 42c4-7 12-7 12-7s8 0 12 7' stroke='${brand.red}' stroke-width='2.4' fill='none'/><circle cx='32' cy='30' r='3.5' fill='${brand.red}'/><rect x='30.8' y='33.2' width='2.4' height='6' rx='1.2' fill='${brand.red}'/></svg>`;
    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.type = 'image/svg+xml';
    icon.href = 'data:image/svg+xml,' + encodeURIComponent(svg);
    document.head.appendChild(icon);

    const og = document.createElement('meta');
    og.setAttribute('property','og:title');
    og.content = 'Spider Security';
    document.head.appendChild(og);

    return () => {
      document.head.removeChild(icon);
      document.head.removeChild(og);
    };
  }, []);
  return null;
};

// ===== Simple charts (inline SVG) =====
const LineChart: React.FC<{data: number[]; max?: number; className?: string; label?: string}> = ({ data, max, className = "w-full h-32", label }) => {
  const M = max || Math.max(...data) || 1;
  const pts = data.map((v,i)=> `${(i/(data.length-1))*100},${100 - (v/M)*100}`).join(' ');
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={className} aria-label={label}>
      <defs>
        <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <polyline points={pts} fill="none" stroke="#ef4444" strokeWidth="2" />
      <polygon points={`0,100 ${pts} 100,100`} fill="url(#lg)" opacity="0.25"/>
    </svg>
  );
};

const BarChart: React.FC<{data: number[]; max?: number; className?: string; label?: string}> = ({ data, max, className = "w-full h-32", label }) => {
  const M = max || Math.max(...data) || 1;
  const w = 100 / data.length;
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={className} aria-label={label}>
      {data.map((v,i)=> (
        <rect key={i} x={i*w + 5*(1/data.length)} y={100 - (v/M)*100} width={w*0.7} height={(v/M)*100} fill="#ef4444" opacity={0.7} />
      ))}
    </svg>
  );
};

// ===== Nav =====
const Nav: React.FC = () => (
  <nav className={`sticky top-0 z-40 ${brand.bg} bg-opacity-95 backdrop-blur border-b ${brand.border}`}> 
    <div className={`mx-auto max-w-7xl px-4 py-3 flex items-center justify-between ${appFont} antialiased`}>
      <a href="#top" className="flex items-center gap-3">
        <SpiderShield className="w-8 h-8" />
        <Wordmark className="hidden sm:block text-xl font-bold" />
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm">
        {['about','pentesting','spiderbox','threatweb','services','industries','resources','contact'].map(x => (
          <a key={x} href={`#${x}`} className="text-white hover:text-red-500 transition">{x[0].toUpperCase()+x.slice(1)}</a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Button className={`${brand.accentSolid} rounded-2xl`}>Book a demo</Button>
      </div>
    </div>
  </nav>
);

// ===== Hero (Pentesting‑forward) =====
const Hero: React.FC = () => (
  <section id="top" className={`${brand.bg} relative ${appFont} antialiased min-h-[80vh]`}> 
    <TopHackerBackdrop />
    <CustomGraphics />
    <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-24 grid md:grid-cols-2 gap-10 items-center">
      <motion.div initial={{opacity:0, y:24}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-wider bg-white/5 border-white/10 mb-4">
          <Bug className="w-3.5 h-3.5 text-red-500"/>
          <span className="text-gray-300">Pentesting + SpiderBox™</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1]">
          Cutting‑Edge Penetration Testing
          <span className={`block ${brand.accentText}`}>with SpiderBox™ hardware & AI insight.</span>
        </h1>
        <p className="mt-5 max-w-xl text-gray-300 leading-relaxed">
          Our flagship service combines expert‑led penetration testing with SpiderBox™, a custom‑engineered device that connects securely to your network for deep, real‑time analysis.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <Button className={`${brand.accentSolid} rounded-2xl px-6 py-6 text-base`}>Schedule a Test</Button>
          <Button variant="outline" className="rounded-2xl bg-white text-black hover:bg-white/90 border-transparent px-6 py-6 text-base">See Methodology</Button>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <SpiderShield className="w-7 h-7" />
          <Wordmark className="text-lg" />
        </div>
      </motion.div>
      {/* Pentest "panel" visuals */}
      <motion.div initial={{opacity:0, scale:0.96, y:8}} animate={{opacity:1, scale:1, y:0}} transition={{delay:0.15,duration:0.7}} className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-red-600/10 to-white/0 blur-2xl"/>
        <div className={`relative rounded-3xl border ${brand.border} ${brand.card} p-4 shadow-2xl`}> 
          <div className="rounded-2xl border border-white/10 p-4 bg-black/50">
            <div className="flex items-center justify-between text-gray-300 text-sm">
              <span className="inline-flex items-center gap-2"><Bug className="w-4 h-4 text-red-500"/> Pentest Console</span>
              <span className="inline-flex items-center gap-1"><Globe2 className="w-4 h-4"/> Live</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                {icon: <ScanEye/>, label: 'Recon'},
                {icon: <Network/>, label: 'Lateral Map'},
                {icon: <Cpu/>, label: 'Exploit Chain'},
                {icon: <Fingerprint/>, label: 'Creds/Risk'},
                {icon: <ClipboardCheck/>, label: 'Findings'},
                {icon: <FileText/>, label: 'Report'},
              ].map((it, i)=> (
                <motion.div
                  key={i}
                  initial={{opacity:0, y:10}}
                  animate={{opacity:1, y:0}}
                  transition={{delay:0.1 + i*0.05}}
                  className="rounded-xl border border-white/10 p-3 bg-gradient-to-b from-white/10 to-white/0 text-gray-200 backdrop-blur-sm hover:border-red-500/40 hover:from-white/20"
                >
                  <div className="opacity-90 text-red-500">{it.icon}</div>
                  <div className="text-xs mt-2 text-gray-200">{it.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-white/10 p-3 bg-white/5">
              <div className="text-xs text-gray-400">Active Red Team Simulation</div>
              <div className="mt-1 text-gray-200">Threat actor emulation in progress — kill chain mapping & response testing</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ===== About (introduce Spider Security before services) =====
const About: React.FC = () => (
  <section id="about" className={`${brand.bg} relative border-t ${brand.border} ${appFont}`}>
    <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <SectionHeading eyebrow="Who we are" title="Spider Security" subtitle="Offensive security specialists building practical defenses for schools, clinics, and growing teams." />
        <ul className="space-y-2 text-gray-300">
          {[
            'Decades of hands‑on experience across EDU and healthcare',
            'Pentesting first: external, internal, web/API, wireless, social (opt‑in)',
            'Certified operators: OSCP, OSCE, eCPPT, CEH, Security+, PenTest+, GPEN, CISSP',
          ].map((t,i)=> (
            <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 text-red-500 mt-1"/> {t}</li>
          ))}
        </ul>
      </div>
      <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.4}} className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-red-600/10 to-white/0 blur-2xl"/>
        <div className={`relative rounded-3xl border ${brand.border} ${brand.card} p-6`}> 
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
            {[
              {k:'ThreatWeb™', v:'AI SIEM / XDR / NDR'},
              {k:'SpiderBox™', v:'Drop‑in VPN probe'},
              {k:'RedHook™', v:'Phishing training'},
              {k:'IR', v:'Incident response'},
            ].map((x,i)=> (
              <div key={i} className="rounded-xl border border-white/10 p-4 bg-gradient-to-b from-white/10 to-white/0">
                <div className="text-white font-semibold">{x.k}</div>
                <div className="text-gray-400 text-xs mt-1">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ===== Pentesting page section =====
const Pentesting: React.FC = () => (
  <section id="pentesting" className={`${brand.bg} relative border-t ${brand.border} ${appFont}`}> 
    <div className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeading eyebrow="Flagship Service" title="Penetration Testing" subtitle="Real attacker tradecraft, safe execution, and crystal‑clear remediation steps." />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {t:'External & Internal', d:'Full perimeter assessment and pivoting once inside to validate real risk.'},
          {t:'Web & API', d:'OWASP‑aligned testing with repeatable PoCs and clear business impact.'},
          {t:'Wireless & Social (opt‑in)', d:'Securely test Wi‑Fi posture and people‑centric controls when you’re ready.'},
        ].map((x,i)=> (
          <motion.div key={i} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.35, delay:i*0.05}}>
            <Card className={`rounded-2xl border ${brand.border} ${brand.card} hover:bg-white/5 transition`}>
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2"><Bug className="w-5 h-5 text-red-500"/> {x.t}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">{x.d}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <Card className={`rounded-2xl border ${brand.border} ${brand.card}`}>
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2"><ClipboardCheck className="w-5 h-5 text-red-500"/> Methodology</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <ol className="list-decimal list-inside space-y-2">
              {['Scoping & Rules of Engagement','Reconnaissance & Threat Modeling','Exploitation & Privilege Escalation','Post‑exploitation & Impact','Reporting & Read‑out'].map((k, i)=> (
                <li key={i}>{k}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
        <Card className={`rounded-2xl border ${brand.border} ${brand.card}`}>
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2"><FileText className="w-5 h-5 text-red-500"/> Deliverables</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <ul className="space-y-2">
              {['Executive summary with risk heatmap','Technical findings with PoC & reproducible steps','Priority remediation plan mapped to owners','Optional retest to validate fixes'].map((k, i)=> (
                <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 text-red-500 mt-1"/> {k}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <Button className={`${brand.accentSolid} rounded-2xl`}>Book a pentest consult <ArrowRight className="w-4 h-4 ml-1"/></Button>
      </div>
    </div>
  </section>
);

// ===== Red Team on Demand =====
const RedTeamOnDemand: React.FC = () => (
  <section id="rtod" className={`${brand.bg} relative border-t ${brand.border} ${appFont}`}>
    <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <SectionHeading eyebrow="Red Team on Demand" title="Elite operators. Zero hiring." subtitle="Launch expert‑driven penetration testing with the click of a button. Equivalent to engaging a team with OSCP, OSCE, eCPPT and more — delivered on demand." />
        <p className="text-gray-300">Think like the attacker. Move faster than the threat. Stay ahead of the breach. Deploy via <strong>SpiderBox™</strong> or a simple <strong>OVA</strong> — your choice.</p>
        <div className="mt-6 flex gap-3">
          <Button className={`${brand.accentSolid} rounded-2xl`}>Start a Red Team run</Button>
          <Button variant="outline" className="rounded-2xl bg-white text-black hover:bg-white/90 border-transparent">Review sample findings</Button>
        </div>
      </div>
      {/* certifications rail */}
      <div className="overflow-hidden">
        <motion.div initial={{x:0}} animate={{x:[0,-320,0]}} transition={{repeat:Infinity, duration:24, ease:'linear'}} className="flex gap-3 min-w-max">
          {['OSCP','OSCE','eCPPT','CEH','Security+','PenTest+','Network+','CySA+','GPEN','CISSP'].map((c,i)=> (
            <CertBadge key={i} label={c} />
          ))}
        </motion.div>
        <div className="text-xs text-gray-500 mt-2">Placeholders shown — drop official SVG/PNG logos at <code>/public/certs</code> and swap <code>&lt;CertBadge&gt;</code> for <code>&lt;img src=.../&gt;</code> on deploy.</div>
      </div>
    </div>
  </section>
);

// ===== SpiderBox page section =====
const SpiderBox: React.FC = () => (
  <section id="spiderbox" className={`${brand.bg} relative border-t ${brand.border} ${appFont}`}> 
    <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <SectionHeading eyebrow="Hardware" title="SpiderBox™ — drop‑in VPN probe for remote testing" subtitle="A stealth, PoE‑powered mini‑appliance that phones home and lets us safely test inside your network. Zero‑touch for your staff." />
        <ul className="space-y-2 text-gray-300">
          {['Auto‑connects to Spider Security VPN','Rack‑mountable 3D case with status OLED','Hardened Ubuntu, restricted keys, rotating tokens','Works with ThreatWeb™ for live detections'].map((t,i)=> (
            <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 text-red-500 mt-1"/> {t}</li>
          ))}
        </ul>
        <div className="mt-6 flex gap-3">
          <Button className={`${brand.accentSolid} rounded-2xl`}>Request a SpiderBox</Button>
          <Button variant="outline" className="rounded-2xl bg-white text-black hover:bg-white/90 border-transparent">See setup guide</Button>
        </div>
      </div>
      <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} viewport={{ once: true }} transition={{duration:0.45}} className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-red-600/10 to-white/0 blur-2xl"/>
        <div className={`relative rounded-3xl border ${brand.border} ${brand.card} p-6`}> 
          <div className="grid grid-cols-3 gap-3">
            {["VPN","PoE","OLED","Agent","NAT","Alerts"].map((x,i)=> (
              <div key={i} className="rounded-xl border border-white/10 p-4 bg-gradient-to-b from-white/10 to-white/0 text-center">
                <div className="text-white font-semibold">{x}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-gray-300 text-sm">Diagrammatic placeholders — swap with hardware render later.</div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ===== ThreatWeb section (secondary) =====
const ThreatWeb: React.FC = () => (
  <section id="threatweb" className={`${brand.bg} relative border-t ${brand.border} ${appFont}`}> 
    <div className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeading eyebrow="Platform" title="ThreatWeb™ — AI SIEM / XDR / NDR" subtitle="Always‑on monitoring, active responses, and dashboards branded for Spider Security." />
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className={`rounded-3xl border ${brand.border} ${brand.card}`}>
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2"><ShieldIcon className="w-5 h-5 text-red-500"/> Capabilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-300">
            {[
              '24/7 log monitoring with Wazuh at the core',
              'Active responses: IP block, process kill, auto‑isolation',
              'Email/Slack alerts (O365/Postfix supported)',
              'Windows/macOS/Linux agents with Sysmon + ClamAV',
            ].map((t,i)=>(
              <div key={i} className="flex items-start gap-2"><Check className="w-4 h-4 text-red-500 mt-1"/> <span>{t}</span></div>
            ))}
          </CardContent>
        </Card>
        <Card className={`rounded-3xl border ${brand.border} ${brand.card}`}>
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2"><ScanEye className="w-5 h-5 text-red-500"/> Live panel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              {[
                {icon: <ScanEye/>, label: 'Detections'},
                {icon: <Bug/>, label: 'Malware'},
                {icon: <Network/>, label: 'NDR'},
                {icon: <Fingerprint/>, label: 'User risk'},
                {icon: <Cpu/>, label: 'Response'},
                {icon: <ShieldIcon/>, label: '2FA'},
              ].map((it, i)=> (
                <motion.div key={i} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.3, delay:i*0.04}} className="rounded-xl border border-white/10 p-3 bg-gradient-to-b from-white/10 to-white/0 text-gray-200">
                  <div className="opacity-90 text-red-500">{it.icon}</div>
                  <div className="text-xs mt-2 text-gray-200">{it.label}</div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Charts row */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <Card className={`rounded-2xl border ${brand.border} ${brand.card}`}>
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2"><ScanEye className="w-5 h-5 text-red-500"/> Median dwell time across engagements (hours)</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart data={[36,34,30,28,26,24,22,20,18,16]} label="Median time from initial access to detection (hours)" />
          <p className="text-xs text-gray-400 mt-2">Lower is better — faster detection shortens attacker dwell time.</p>
          <div className="text-[10px] text-gray-500 mt-1">Aggregated sample from anonymized client pilots.</div>
          </CardContent>
        </Card>
        <Card className={`rounded-2xl border ${brand.border} ${brand.card}`}>
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2"><ClipboardCheck className="w-5 h-5 text-red-500"/> MITRE tactic coverage (% detections)</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={[95,88,82,76,70,66,60]} label="Coverage across ATT&CK tactics (TA0001–TA0009)" />
          <p className="text-xs text-gray-400 mt-2">Higher is better — breadth of detections across tactics.</p>
          <div className="text-[10px] text-gray-500 mt-1">Aggregated sample from anonymized client pilots.</div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

// ===== Services =====
const Services: React.FC = () => (
  <section id="services" className={`${brand.bg} relative border-t ${brand.border} ${appFont}`}> 
    <div className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeading title="Services" subtitle="Pentesting is our flagship. We complement it with ThreatWeb™, RedHook™, incident response, dark web monitoring, and 2FA rollout." />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {title: 'Penetration Testing', desc: 'Onsite & remote assessments with clear, actionable fixes.', icon: <Bug/>, featured: true},
          {title: 'ThreatWeb™ (SIEM/XDR/NDR)', desc: 'Always‑on monitoring, active response, and dashboards.', icon: <ShieldIcon/>},
          {title: 'Phishing Training – RedHook™', desc: 'Simulate attacks, measure risk, train your team.', icon: <ScanEye/>},
          {title: 'Incident Response & Recovery', desc: 'When minutes matter: triage, contain, eradicate, rebuild.', icon: <Lock/>},
          {title: 'Dark Web Monitoring', desc: 'Leak watch with executive alerts and takedown support.', icon: <Network/>},
          {title: '2FA Setup & Hardening', desc: 'Duo‑based rollout, policies, and user onboarding.', icon: <Fingerprint/>},
        ].map((s,i)=> (
          <motion.div key={i} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.35, delay:i*0.05}}>
            <Card className={`rounded-2xl border ${brand.border} ${brand.card} hover:bg-white/5 transition relative ${s.featured ? 'ring-1 ring-red-600/40' : ''}`}> 
              {s.featured && <span className="absolute -top-2 left-4 text-[10px] tracking-wider uppercase bg-red-600 text-white px-2 py-0.5 rounded-full">Focus</span>}
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">{React.cloneElement(s.icon as any, {className: "w-5 h-5 text-red-500"})} {s.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">{s.desc}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ===== Industries =====
const Industries: React.FC = () => (
  <section id="industries" className={`${brand.bg} relative ${appFont}`}> 
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <SectionHeading title="Purpose‑built for K‑12 & Healthcare" subtitle="We understand bell schedules, Chromebooks, EMRs, and auditors. Our reports speak your language and map to the controls you actually need." />
          <ul className="mt-2 space-y-3 text-gray-300">
            {['FERPA‑aware testing methodology','HIPAA‑aligned logging & retention','Low‑touch agents for labs & clinics','Clear RACI with your IT lead'].map((x,i)=> (
              <li key={i} className="flex gap-2 items-start"><Check className="w-4 h-4 text-red-500 mt-1"/> {x}</li>
            ))}
          </ul>
        </div>
        <motion.div initial={{opacity:0, x:12}} whileInView={{opacity:1, x:0}} viewport={{ once: true }} transition={{duration:0.4}} className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-red-600/15 to-white/0 blur-2xl"/>
          <div className={`relative rounded-3xl border ${brand.border} ${brand.card} p-6`}> 
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              {[
                {k:'98%', v:'Tickets resolved w/ playbooks'},
                {k:'<15m', v:'Avg. alert triage'},
                {k:'24/7', v:'Monitoring coverage'},
                {k:'NIST', v:'Controls mapped'},
              ].map((m,i)=> (
                <div key={i} className="rounded-xl border border-white/10 p-4 bg-white/5">
                  <div className="text-2xl text-white font-semibold">{m.k}</div>
                  <div className="text-xs text-gray-400 mt-1">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ===== Resources =====
const Resources: React.FC = () => (
  <section id="resources" className={`${brand.bg} relative ${appFont}`}> 
    <div className="mx-auto max-w-7xl px-4 py-16">
      <SectionHeading title="Resources" subtitle="Guides, templates, and how‑tos from real deployments. No fluff." />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {t:'Wazuh Active Response Playbooks', d:'Blocklists, quarantine, and auto RDP shutdown.'},
          {t:'Red Team Prep Checklist', d:'How to prep endpoints & staff before pentesting.'},
          {t:'K‑12 Audit Bundle', d:'Reports mapped to FERPA, NIST CSF, and vendor risk.'},
        ].map((r,i)=> (
          <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.3, delay:i*0.05}}>
            <Card className={`rounded-2xl border ${brand.border} ${brand.card}`}> 
              <CardHeader>
                <CardTitle className="text-white">{r.t}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">{r.d}
                <div className="mt-4"><Button variant="outline" className="rounded-2xl bg-white text-black hover:bg-white/90 border-transparent">Download</Button></div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ===== Contact =====
const Contact: React.FC = () => (
  <section id="contact" className={`${brand.bg} relative ${appFont}`}> 
    <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10">
      <div>
        <SectionHeading title="Contact us" subtitle="Tell us about your environment and goals. We’ll reply within one business day." />
        <div className="mt-4 space-y-3 text-gray-300">
          <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-red-500"/> kbrummitt@spidersecurity.io</div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-red-500"/> 423‑717‑9259</div>
        </div>
      </div>
      <div className={`rounded-3xl border ${brand.border} ${brand.card} p-6`}> 
        <form className="grid grid-cols-1 gap-4">
          <Input placeholder="Full name" className="bg-black/30 border-white/10 text-white"/>
          <Input placeholder="Work email" className="bg-black/30 border-white/10 text-white"/>
          <Input placeholder="Company / District" className="bg-black/30 border-white/10 text-white"/>
          <Input placeholder="How can we help? (pen test, XDR, training, etc.)" className="bg-black/30 border-white/10 text-white"/>
          <Button className={`${brand.accentSolid} rounded-2xl`}>Send</Button>
        </form>
      </div>
    </div>
  </section>
);

// ===== Footer =====
const Footer: React.FC = () => (
  <footer className={`${brand.bg} border-t ${brand.border} ${appFont}`}> 
    <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-4 gap-6">
      <div>
        <div className="flex items-center gap-2">
          <SpiderShield className="w-7 h-7" />
          <Wordmark className="text-lg" />
        </div>
        <p className="mt-3 text-gray-400 text-sm">ThreatWeb™, RedHook™, and hands‑on security built for real‑world teams.</p>
      </div>
      <div className="text-white text-sm">
        <div className="mb-2 font-semibold">Products</div>
        <ul className="space-y-1">
          <li><a href="#threatweb" className="hover:text-red-500">ThreatWeb™</a></li>
          <li><a href="#spiderbox" className="hover:text-red-500">SpiderBox™</a></li>
        </ul>
      </div>
      <div className="text-white text-sm">
        <div className="mb-2 font-semibold">Company</div>
        <ul className="space-y-1">
          <li><a href="#pentesting" className="hover:text-red-500">Pentesting</a></li>
          <li><a href="#services" className="hover:text-red-500">Services</a></li>
          <li><a href="#resources" className="hover:text-red-500">Resources</a></li>
        </ul>
      </div>
      <div className="text-white text-sm">
        <div className="mb-2 font-semibold">Contact</div>
        <ul className="space-y-1">
          <li>kbrummitt@spidersecurity.io</li>
          <li>423‑717‑9259</li>
        </ul>
      </div>
    </div>
    <div className="mx-auto max-w-7xl px-4 pb-8 text-gray-500 text-xs">© {new Date().getFullYear()} Spider Security. All rights reserved.</div>
  </footer>
);

// ===== App =====
export default function SpiderSecurityLanding() {
  return (
    <div className={`${brand.bg} ${brand.text} min-h-screen ${appFont} antialiased scroll-smooth`}>
      <HeadTags />
      <Nav />
      <Hero />
      <About />
      <Pentesting />
      <RedTeamOnDemand />
      <SpiderBox />
      <ThreatWeb />
      <Services />
      <Industries />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}
