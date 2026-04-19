import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface InfiniteMarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
}

export const InfiniteMarquee = ({ items, speed = 30, reverse = false }: InfiniteMarqueeProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    const tween = gsap.to(track, {
      x: reverse ? half : -half,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: { x: gsap.utils.unitize((x) => parseFloat(x) % half) },
    });
    return () => {
      tween.kill();
    };
  }, [speed, reverse, items.length]);

  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-6 liquid-glass rounded-2xl">
      <div ref={trackRef} className="flex gap-12 whitespace-nowrap will-change-transform">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-12 text-2xl md:text-3xl font-display font-semibold tracking-tight">
            <span className="text-gradient bg-aurora bg-clip-text">{item}</span>
            <span className="text-muted-foreground/40">✦</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
};
