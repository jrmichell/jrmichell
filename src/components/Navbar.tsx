export default function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#161521] to-[#15151E] border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#">
          <img src="/logo.png" alt="Logo" className="h-9 w-auto" />
        </a>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
