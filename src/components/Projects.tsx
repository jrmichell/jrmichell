interface Project {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    name: 'Switcheroo',
    description:
      'A GUI file converter for converting between CSV and JSON, with data validation utilities including duplicate removal, whitespace trimming, and nested JSON flattening.',
    tags: ['C++', 'CMake'],
    github: 'https://github.com/jrmichell/Switcheroo',
  },
  {
    name: 'SecretsManager',
    description:
      'A GUI password manager with a built-in password generator, clipboard integration, and show/hide toggle for stored credentials. Supports optional website and username fields.',
    tags: ['Python', 'tkinter'],
    github: 'https://github.com/jrmichell/SecretsManager',
  },
  {
    name: 'dsa-proj',
    description:
      'A collaborative Data Structures and Algorithms project built with a small team, working with real city datasets to implement and demonstrate core DSA concepts.',
    tags: ['Python'],
    github: 'https://github.com/jrmichell/dsa-proj',
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-[#5651E5] mb-3">
          Projects
        </h2>
        <h3 className="text-2xl font-bold text-white mb-10">
          Things I've built
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-[#1e1d2e] border border-white/8 rounded-lg p-6 flex flex-col hover:-translate-y-1 hover:border-[#5651E5]/40 hover:shadow-lg hover:shadow-[#5651E5]/5 transition-all duration-200"
            >
              <h4 className="text-base font-semibold text-white mb-3">
                {project.name}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-2.5 py-0.5 rounded bg-[#5651E5]/15 text-[#8b88ee] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4 border-t border-white/8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#5651E5] transition-colors duration-150"
                  >
                    <GithubIcon />
                    Source
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#5651E5] transition-colors duration-150"
                  >
                    <ExternalLinkIcon />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
