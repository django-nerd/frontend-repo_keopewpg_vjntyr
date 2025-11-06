import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_80%_10%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-white/80">
              I’m a web developer passionate about creating seamless, performant, and accessible digital products. I enjoy
              crafting smooth interactions and modern interfaces powered by solid engineering.
            </p>
            <p className="mt-3 text-white/70">
              Strengths: problem-solving, attention to detail, and a strong sense of design. I value collaboration and clear
              communication to deliver meaningful outcomes.
            </p>
          </div>

          <ul className="grid gap-4">
            {[
              {
                title: 'Performance-first',
                desc: 'Optimized builds, code-splitting, and best practices to keep experiences fast.'
              },
              {
                title: 'Clean UX',
                desc: 'Intuitive layouts with consistent visual language and predictable interactions.'
              },
              {
                title: 'Reliable Delivery',
                desc: 'From planning to ship, I keep scope, quality, and timelines in balance.'
              }
            ].map((item) => (
              <li key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
                <p className="text-cyan-300 text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-white/80 text-sm">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
