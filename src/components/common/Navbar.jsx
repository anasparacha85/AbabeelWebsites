import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = ({transparent}) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", Link: "/" },
    { name: "Services", Link: "/services" },
    { name: "Blogs", Link: "/blogs" },
    { name: "Testimonials", Link: "/testimonials" },
    { name: "Career", Link: "/career" },
    { name: "Contact", Link: "/contact" },
  ];

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<header
  className={`fixed top-0 left-0 w-screen z-20 transition-all duration-300 ${
    scrolled ? "bg-orange-500 shadow-md" : (!transparent ? "bg-transparent" : "bg-orange-500")
  }`}
>

      <div className="flex items-center justify-between px-6 lg:px-20 py-4">
        {/* Logo */}
        <div className="text-white font-bold text-xl flex items-center">
          <span className="text-orange-200">A</span>babeel
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          {links.map((link, i) => (
           <NavLink
  key={i}
  to={link.Link}
  className={({ isActive }) => {
    let baseClasses = `relative font-medium 
      after:content-[''] after:absolute after:left-0 after:-bottom-1 
      after:w-0 after:h-[2px] after:transition-all after:duration-300 
      hover:after:w-full`;

    if (isActive) {
      if (scrolled) {
        // Scroll ho gaya → pehle jesi logic
        return `${baseClasses} text-white after:bg-white after:w-full`;
      } else if (transparent) {
        // Transparent true & scroll nahi hai → white text + white underline
        return `${baseClasses} text-white after:bg-white after:w-full`;
      } else {
        // Normal case → orange text + orange underline
        return `${baseClasses} text-orange-500 after:bg-orange-500 after:w-full`;
      }
    } else {
      // Not active → default colors
      return `${baseClasses} ${scrolled ? "text-white after:bg-white" : "text-white after:bg-orange-500"}`;
    }
  }}
>
  {link.name}
</NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-orange-500 text-white absolute top-16 left-0 w-full flex flex-col items-center gap-6 py-6">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.Link}
              className="hover:text-yellow-200 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
