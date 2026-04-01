function Terminal() {
  return (
    <div className="rounded-lg border border-white/10 overflow-hidden text-xs font-mono w-full max-w-md">
      <div className="bg-white/5 px-4 py-2.5 flex items-center gap-2 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="ml-2 text-gray-500 text-xs">~/dev</span>
      </div>
      <div className="bg-[#0f0e1a] p-5 space-y-3 leading-relaxed">
        <div>
          <span className="text-[#5651E5]">jack</span>
          <span className="text-gray-500">:</span>
          <span className="text-emerald-400">~/dev</span>
          <span className="text-gray-500">$ </span>
          <span className="text-gray-200">ls projects/</span>
        </div>
        <div className="text-emerald-400">
          Switcheroo&nbsp;&nbsp;SecretsManager&nbsp;&nbsp;dsa-proj
        </div>

        <div>
          <span className="text-[#5651E5]">jack</span>
          <span className="text-gray-500">:</span>
          <span className="text-emerald-400">~/dev</span>
          <span className="text-gray-500">$ </span>
          <span className="text-gray-200">git log --oneline -3</span>
        </div>
        <div className="space-y-1 text-gray-500">
          <div><span className="text-[#8b88ee]">a3f91c2</span> fix: improve CSV parsing edge cases</div>
          <div><span className="text-[#8b88ee]">7d204bb</span> feat: add password generator</div>
          <div><span className="text-[#8b88ee]">c19e3a1</span> chore: update dependencies</div>
        </div>

        <div>
          <span className="text-[#5651E5]">jack</span>
          <span className="text-gray-500">:</span>
          <span className="text-emerald-400">~/dev</span>
          <span className="text-gray-500">$ </span>
          <span className="text-gray-200">echo $EDITOR</span>
        </div>
        <div className="text-gray-500">
          nvim <span className="text-gray-600"># btw</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-[#5651E5]">jack</span>
          <span className="text-gray-500">:</span>
          <span className="text-emerald-400">~/dev</span>
          <span className="text-gray-500">$ </span>
          <span className="w-2 h-4 bg-gray-400 inline-block cursor-blink" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative text-white py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#5651E5] text-sm font-medium tracking-widest uppercase mb-4">
            Software Engineer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Jack Michell
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I build reliable, well-structured software. Focused on backend
            systems, clean architecture, and practical solutions.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="bg-[#5651E5] text-white text-sm px-5 py-2.5 rounded hover:bg-[#4845c4] transition-colors duration-150"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white/20 text-gray-300 text-sm px-5 py-2.5 rounded hover:border-white/40 hover:text-white transition-colors duration-150"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hidden md:flex justify-end">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
