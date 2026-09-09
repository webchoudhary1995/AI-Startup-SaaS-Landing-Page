"use client";

import { motion } from "framer-motion";

/* SVG text-logo representations for well-known tech brands */
const logos = [
  { name: "Vercel",    svg: <VercelLogo    /> },
  { name: "Stripe",    svg: <StripeLogo    /> },
  { name: "Notion",    svg: <NotionLogo    /> },
  { name: "Linear",    svg: <LinearLogo    /> },
  { name: "Figma",     svg: <FigmaLogo     /> },
  { name: "Supabase",  svg: <SupabaseLogo  /> },
  { name: "Loom",      svg: <LoomLogo      /> },
  { name: "Intercom",  svg: <IntercomLogo  /> },
];

/* Duplicate for seamless infinite scroll */
const track = [...logos, ...logos];

export default function SocialProof() {
  return (
    <section className="relative py-14 overflow-hidden border-y border-slate-800/60">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, #020617, transparent)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, #020617, transparent)" }} />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-xs uppercase tracking-widest text-slate-500 font-medium mb-10"
      >
        Trusted by top tech teams worldwide
      </motion.p>

      <div className="flex overflow-hidden">
        <div className="animate-marquee flex gap-16 items-center shrink-0">
          {track.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
              title={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Inline SVG logo components ─────────────────────────────────────── */

function VercelLogo() {
  return (
    <svg height="22" viewBox="0 0 283 64" fill="white" xmlns="http://www.w3.org/2000/svg" aria-label="Vercel">
      <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.8 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.8 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4 0 7.07-1.63 8.88-4.31l7.48 4.36c-3.31 5.05-9.01 8-16.36 8-11.06 0-19-7.2-19-18s7.94-18 19-18c7.35 0 13.05 2.96 16.36 8.01l-7.48 4.36C217.31 25.63 214.24 24 210.24 24c-6.08 0-10 4-10 10zm-28.64-8h8v15c0 4 2 5 5 5 1.68 0 3.18-.39 4.5-1.09V51c-1.81.94-4 1.5-6.5 1.5-6.5 0-11-4-11-11V26h-8v-9h8V9.5l8-2.5V17h13v9h-13z"/>
      <path d="M72.83 4.5L38.5 66H7.17L72.83 4.5z"/>
    </svg>
  );
}

function StripeLogo() {
  return (
    <svg height="24" viewBox="0 0 60 25" fill="white" xmlns="http://www.w3.org/2000/svg" aria-label="Stripe">
      <path d="M5.45 9.8C5.45 8.73 6.36 8.3 7.87 8.3c2.18 0 4.94.66 7.12 1.85V3.6C12.8 2.6 10.1 2.2 7.4 2.2 2.97 2.2 0 4.54 0 8.08c0 5.5 7.56 4.63 7.56 7.02 0 1.27-1.1 1.68-2.65 1.68-2.3 0-5.23-.95-7.54-2.23v6.67c2.57 1.1 5.17 1.56 7.54 1.56 4.57 0 7.7-2.27 7.7-5.85C12.6 11.2 5.45 12.24 5.45 9.8zm13.7-7.3l-4.74 1.01-.02 15.82 4.76-.01V2.5zm4.28 5.08h4.6V2.5l-4.6.01v5.07zm0 14.75h4.6V7.58h-4.6v14.75zm15.96-15.12c-1.76 0-2.9.83-3.64 1.4l-.24-1.13h-4.1v21.36l4.67-1 .02-5.18c.67.48 1.65 1.17 3.28 1.17 3.33 0 6.36-2.68 6.36-8.6 0-5.43-3.07-7.91-6.35-7.91zm-1.11 12.16c-1.08 0-1.73-.39-2.18-.87l-.02-6.87c.48-.54 1.15-.9 2.2-.9 1.68 0 2.85 1.89 2.85 4.31 0 2.47-1.15 4.33-2.85 4.33zm18.58-12.16c-4.85 0-7.74 3.24-7.74 8.63 0 5.7 3.22 8.59 8.2 8.59 2.36 0 4.15-.53 5.54-1.43v-3.95c-1.39.78-2.98 1.23-5.01 1.23-1.98 0-3.72-.69-3.95-3.1h9.97c.03-.27.06-1.34.06-1.85-.01-4.82-2.3-8.12-7.07-8.12zm-3.01 6.87c0-2.3 1.41-3.25 2.96-3.25 1.5 0 2.82.97 2.82 3.25h-5.78z"/>
    </svg>
  );
}

function NotionLogo() {
  return (
    <svg height="22" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg" aria-label="Notion">
      <path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-.193 6.22-7.377 6.803L19.463 99.94c-5.443.39-8.063.39-10.98-2.14L2.913 91.633C.583 89.3 0 87.747 0 85.807V10.333c0-3.497 1.554-6.22 6.017-6.02z"/>
      <path fill="#020617" d="M61.35.227L6.017 4.313C1.554 4.113 0 6.837 0 10.333v75.474c0 1.94.583 3.493 2.913 5.827l5.57 6.167c2.917 2.53 5.537 2.53 10.98 2.14l69.877-4.31c7.183-.583 7.377-2.527 7.377-6.803V10.643c0-2.14-.78-2.917-3.3-4.667L74.167 3.143C69.893.037 68.147-.356 61.35.227zm-5.443 15.553c-.583 0-.777.78-.194 1.167l3.3 2.337v52.69c-.583.39-1.167.777-1.75.97-1.167.39-2.14.193-2.917-.777L20.24 22.493c-.776-1.167-.97-1.36-1.943-1.36H11.47c-.97 0-1.553.583-1.553 1.553v55.023c0 .777.583 1.36 1.94 1.747l5.053 1.36c.583.193.97.777.97 1.36v.193c0 .583-.387 1.167-.97 1.167l-14.17.97c-.583.194-1.167-.193-1.167-.776V25.213c0-.97.583-1.553 1.553-1.553h7.57c.97 0 1.553.777 1.943 1.36l37.45 53.657c.97 1.36 1.943 1.553 3.3 1.167l8.543-2.14c1.167-.39 1.943-1.167 1.943-1.943V17.313c0-.97-.777-1.167-1.75-1.36l-5.053-.97c-.583-.193-.97-.777-.97-1.36v-.194c0-.583.583-1.167 1.167-1.167h14.17c.583 0 .97.39.97.97v1.166c0 .584-.387.97-.97 1.17l-2.917.97c-.776.193-1.36.97-1.36 1.94v53.853c0 .97.584 1.553 1.747 1.553l3.107-.194c1.167-.193 1.75-.777 1.75-1.553V17.897c0-.97-.583-1.553-1.553-1.553l-5.637-.78c-.194 0-.387-.194-.387-.387V14.8c0-.39.39-.777.777-.777h10.59c.583 0 .97.39.97.97v53.85c0 .97-.583 1.553-1.553 1.747l-8.543 1.943c-.97.194-1.36.97-.776 1.75l9.12 11.08c.776.97 1.553 1.36 2.917 1.167l14.17-.97c.777-.194 1.167-.777 1.167-1.554V29.1c0-.583-.39-1.167-.97-1.36l-37.45-12.637c-.194-.193-.583-.193-.777 0z"/>
    </svg>
  );
}

function LinearLogo() {
  return (
    <svg height="22" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg" aria-label="Linear">
      <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="5"/>
      <path d="M20.6 80L80 20.6M50 15L85 50 50 85 15 50z" stroke="white" strokeWidth="5" fill="none"/>
    </svg>
  );
}

function FigmaLogo() {
  return (
    <svg height="26" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Figma">
      <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/>
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19z" fill="#FF7262"/>
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#FF7262"/>
    </svg>
  );
}

function SupabaseLogo() {
  return (
    <svg height="24" viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Supabase">
      <path d="M63.7 110.2c-2.5 3.1-7.6 1.4-7.7-2.5l-1.2-64.6H100c7.6 0 11.9 8.9 7.2 14.7L63.7 110.2z" fill="url(#a)"/>
      <path d="M45.3 2.8c2.5-3.1 7.6-1.4 7.7 2.5l.9 64.6H10c-7.6 0-11.9-8.9-7.2-14.7L45.3 2.8z" fill="#3ECF8E"/>
      <defs>
        <linearGradient id="a" x1="53.9" y1="54.2" x2="94.2" y2="71.4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#249361"/><stop offset="1" stopColor="#3ECF8E"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function LoomLogo() {
  return (
    <svg height="22" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Loom">
      <circle cx="28" cy="28" r="28" fill="#625DF5"/>
      <path d="M28 14a14 14 0 1 0 12.12 7L28 28V14z" fill="white"/>
    </svg>
  );
}

function IntercomLogo() {
  return (
    <svg height="22" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg" aria-label="Intercom">
      <path d="M48 0H6A6 6 0 0 0 0 6v42a6 6 0 0 0 6 6h42a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6zm-21 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 36c-9.94 0-18-5.37-18-12h36c0 6.63-8.06 12-18 12zm18-20a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-4-8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-4 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg>
  );
}
