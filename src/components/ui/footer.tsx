import React from "react";

const links = [
  [
    { label: "Docs", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "Discord", href: "#" },
  ],
  [
    { label: "Blog", href: "#" },
    { label: "Terms and conditions", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Contact us", href: "#" },
  ],
];

export function Footer() {
  return (
    <footer className="relative w-full bg-black overflow-hidden min-h-[320px] flex flex-col justify-end">
      {/* Glassy blurred background */}
      <div className="absolute right-0 bottom-0 w-[70vw] h-[60vw] max-w-[1100px] max-h-[700px] bg-gradient-to-br from-[#a259ff80] via-[#6a00ff60] to-[#00000000] blur-3xl opacity-80 rounded-full pointer-events-none" style={{filter: 'blur(80px)'}} />
      <div className="relative z-10 flex flex-col h-full justify-between max-w-7xl mx-auto w-full px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full">
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 mb-8 md:mb-0">
            <div className="flex flex-col gap-3">
              {links[0].map(link => (
                <a key={link.label} href={link.href} className="text-white text-lg font-light hover:underline transition-all duration-150">{link.label}</a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {links[1].map(link => (
                <a key={link.label} href={link.href} className="text-white text-lg font-light hover:underline transition-all duration-150">{link.label}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between w-full mt-8 relative">
          <span className="text-white text-sm md:text-base font-light">© 2023 Inovat, Inc. All Rights Reserved.</span>
          <span className="select-none pointer-events-none font-extrabold text-[12vw] md:text-[8vw] leading-none text-white/70 tracking-tight absolute right-0 bottom-[-2vw] md:bottom-[-1vw] z-0" style={{WebkitTextStroke: '2px rgba(255,255,255,0.2)', letterSpacing: '-0.05em'}}>INOVAT</span>
        </div>
      </div>
    </footer>
  );
} 