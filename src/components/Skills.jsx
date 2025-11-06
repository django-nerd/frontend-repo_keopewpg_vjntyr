import React, { useEffect, useRef } from 'react';

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll('[data-bar]')?.forEach((bar) => {
              const target = bar.getAttribute('data-target');
              if (target) bar.style.width = `${target}%`;
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="relative bg-[#06080e] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(30%_40%_at_20%_10%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <p className="mt-2 text-white/70 max-w-2xl">A snapshot of my technical toolkit and proficiency.</p>

        <div className="mt-8 grid gap-5">
          {skills.map((s) => (
            <div key={s.name} className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/90">{s.name}</span>
                <span className="text-cyan-300 font-medium">{s.level}%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  data-bar
                  data-target={s.level}
                  className="h-2 w-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 transition-all duration-1000 ease-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
