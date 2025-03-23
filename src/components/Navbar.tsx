
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Container } from "./ui/container";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative z-10 flex items-center space-x-2"
            aria-label="Reach Media Agency"
          >
            <img
              src="/lovable-uploads/2777228a-5a3e-46b6-9516-bc706d6f24c4.png"
              alt="Reach Media Agency"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#clients">Clients</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-10 p-2 -mr-2 text-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-40 md:hidden">
              <Container className="h-full flex flex-col">
                <div className="flex justify-between items-center py-4">
                  <Link to="/" className="flex items-center space-x-2">
                    <img
                      src="/lovable-uploads/2777228a-5a3e-46b6-9516-bc706d6f24c4.png"
                      alt="Reach Media Agency"
                      className="h-10 w-auto"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 -mr-2 text-gray-800"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                <nav className="flex flex-col items-center justify-center flex-1 space-y-8 py-12">
                  <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Accueil</MobileNavLink>
                  <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
                  <MobileNavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</MobileNavLink>
                  <MobileNavLink href="#clients" onClick={() => setIsMenuOpen(false)}>Clients</MobileNavLink>
                  <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
                </nav>
              </Container>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

// Desktop navigation link
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-sm font-medium text-gray-800 transition-colors hover:text-reach-purple relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-reach-purple after:transition-all hover:after:w-full"
    >
      {children}
    </a>
  );
};

// Mobile navigation link
interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink = ({ href, onClick, children }: MobileNavLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-xl font-medium text-gray-800 transition-colors hover:text-reach-purple"
    >
      {children}
    </a>
  );
};

export default Navbar;
