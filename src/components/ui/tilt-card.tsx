"use client";
import { useRef } from "react";

export default function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current!;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${py * -6}deg)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "perspective(900px)";
      }}
      className={`transition-transform will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
