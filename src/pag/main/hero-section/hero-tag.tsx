'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import gsap from 'gsap';

export const HeroTag = () => {
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const dot = scope.current?.querySelector('[data-dot]');
      if (!dot) return;

      gsap.to(dot, {
        opacity: 0.3,
        duration: 1,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    },
    { scope },
  );

  return (
    <div
      ref={scope}
      className="mb-12 inline-flex items-center gap-3 border border-[var(--accent)] bg-[rgba(0,255,136,0.05)] px-6 py-2 font-mono text-xs font-semibold tracking-[0.1em] uppercase [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))]"
    >
      <span
        data-dot
        className="h-[6px] w-[6px] bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]"
      />
      <span>Нова ера колаборації</span>
    </div>
  );
};
