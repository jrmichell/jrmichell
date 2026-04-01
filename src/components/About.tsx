const skills = [
  'TypeScript', 'Python', 'Go', 'Rust',
  'React', 'Node.js', 'PostgreSQL', 'Docker',
  'Linux', 'Git', 'REST APIs', 'SQL',
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-[#5651E5] mb-3">
          About
        </h2>
        <h3 className="text-2xl font-bold text-white mb-8">
          A bit about me
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
            <p>
              I'm a software engineer with a focus on building solid, maintainable systems.
              I care about writing code that is correct, readable, and straightforward to reason about.
            </p>
            <p>
              Most of my work lives on the backend — designing APIs, working with databases,
              and making sure systems hold up under real-world conditions. I'm comfortable
              across the stack when the work calls for it.
            </p>
            <p>
              Outside of work, I spend time on open source projects, learning new tools,
              and occasionally picking apart how things are built.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded border border-white/10 text-gray-400 bg-white/5 hover:border-[#5651E5]/40 hover:text-gray-200 hover:bg-[#5651E5]/10 transition-all duration-150 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
