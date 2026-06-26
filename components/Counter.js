"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ target }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        const step = Math.ceil(target / 60);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setValue(current);
        }, 25);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="mb-1.5 text-[2.2rem] font-extrabold leading-none text-gold">
      {value}+
    </div>
  );
}
