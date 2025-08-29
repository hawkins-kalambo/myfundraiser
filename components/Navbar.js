import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur border-b border-emerald-100">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo + Name */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Hawkins Kalambo Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-xl font-heading font-semibold text-emerald-700">
            Hawkins Kalambo
          </span>
        </a>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="#about" className="text-slate-700 hover:text-emerald-700">
            About
          </a>
          <a href="#admission" className="text-slate-700 hover:text-emerald-700">
            Admission Letter
          </a>
          <a href="#donate" className="text-slate-700 hover:text-emerald-700">
            Donate
          </a>
          <a href="#contact" className="text-slate-700 hover:text-emerald-700">
            Contact
          </a>
          <a
            href="#donate"
            className="inline-flex items-center rounded-xl px-4 py-2 bg-amber-500 text-white font-medium hover:bg-amber-600 transition shadow"
          >
            Donate Now
          </a>
        </div>
      </div>
    </nav>
  );
}
