import React from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = encodeURIComponent(`Hello from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const mailto = `mailto:ibnunurramadani@example.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_100%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          <p className="mt-2 text-white/70">Have a project in mind? Let’s build something great together.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid max-w-2xl gap-4">
          <div>
            <label htmlFor="name" className="text-sm text-white/80">Name</label>
            <input id="name" name="name" required className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-white/80">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-white/80">Message</label>
            <textarea id="message" name="message" rows="5" required className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-cyan-400/50" />
          </div>
          <div className="pt-2">
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-cyan-400 transition-colors">
              <Send size={16} /> Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
