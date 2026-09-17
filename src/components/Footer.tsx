import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="relative bg-[#0052FF] dark:bg-slate-950 text-white pt-20 pb-12 overflow-hidden select-none border-t border-transparent dark:border-slate-800 transition-colors duration-300">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/20 dark:border-slate-800">
          {/* Official Dotbey Brand Logo */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <Logo variant="light" />
              </div>
              <p className="text-xs sm:text-sm text-blue-100/90 dark:text-slate-400 max-w-sm font-normal leading-relaxed">
                At Dotbey we create powerful digital strategies that help ambitious brands stand out, connect with the right audience, and grow with confidence.
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-white dark:text-slate-200 mb-5 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3.5">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Contact", href: "/faq" },
                  { name: "License", href: "#" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm sm:text-base font-medium text-blue-100/90 dark:text-slate-400 hover:text-white dark:hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold text-white dark:text-slate-200 mb-5 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3.5">
                {[
                  { name: "Services", href: "/services" },
                  { name: "Project", href: "/experts" },
                  { name: "Case studies", href: "/pricing" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm sm:text-base font-medium text-blue-100/90 dark:text-slate-400 hover:text-white dark:hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold text-white dark:text-slate-200 mb-5 uppercase tracking-wider">
                Social
              </h4>
              <ul className="space-y-3.5">
                {[
                  { name: "Instagram", href: "https://instagram.com" },
                  { name: "Facebook", href: "https://facebook.com" },
                  { name: "Behance", href: "https://behance.net" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-medium text-blue-100/90 dark:text-slate-400 hover:text-white dark:hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-blue-100/80 dark:text-slate-500">
          <p>© 2026 Dotbey Digital Marketing Agency. All rights reserved.</p>
          <p>Designed and developed by - Dotbey Studio</p>
        </div>
      </div>
    </footer>
  );
}
