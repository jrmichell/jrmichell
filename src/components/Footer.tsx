export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
        <span className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Jack Michell
        </span>
      </div>
    </footer>
  );
}
