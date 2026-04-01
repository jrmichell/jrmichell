export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-[#5651E5] mb-3">
          Contact
        </h2>
        <h3 className="text-2xl font-bold text-white mb-8">Get in touch</h3>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <p className="text-sm text-gray-400 leading-relaxed">
              Whether it's a question, opportunity, or just to say hello — feel
              free to reach out directly. I'm always open to hearing about new
              projects or roles.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:me@jrmichell.com"
                className="bg-[#5651E5] text-white text-sm px-5 py-2.5 rounded hover:bg-[#4845c4] transition-colors duration-150"
              >
                me@jrmichell.com
              </a>
              <a
                href="/resume.pdf"
                download
                className="border border-white/20 text-gray-300 text-sm px-5 py-2.5 rounded hover:border-white/40 hover:text-white transition-colors duration-150"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="bg-[#1e1d2e] border border-white/8 rounded-lg p-6 flex gap-10 hover:border-white/15 transition-all duration-200">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-2">
                Availability
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-sm text-gray-300">
                  Open to new opportunities
                </span>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-3">
                Elsewhere
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a
                    href="https://github.com/jrmichell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#5651E5] transition-colors duration-150"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jack-michell-914559335/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#5651E5] transition-colors duration-150"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
