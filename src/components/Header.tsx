import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import bikergramLogo from "@/assets/bikergram-logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Biker Hub", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const allSections = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Biker Hub", path: "/gallery" },
  { name: "Contact", path: "/contact" },
  { name: "Join Community", path: "/contact" },
  { name: "Submit Your Ride", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const filteredSections = allSections.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-transparent backdrop-blur-sm" />

      <nav className="relative container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo - acts as menu toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="group cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          <img
            src={bikergramLogo}
            alt="Bikergram Andhra Pradesh"
            className="h-8 md:h-10 w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm uppercase tracking-widest transition-colors ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://instagram.com/bikergram_andrapradesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm">
              <Instagram className="w-4 h-4" />
              Follow
            </Button>
          </a>
        </div>

        {/* Mobile: search + menu toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-foreground/70 hover:text-foreground transition-colors p-2"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            className="relative z-50 text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search Dropdown */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-border p-4"
            >
              <div className="container mx-auto">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-background/50 border border-border rounded-lg px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                {searchQuery && (
                  <div className="mt-2 space-y-1">
                    {filteredSections.map((section) => (
                      <Link
                        key={section.name}
                        to={section.path}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-md transition-colors text-sm"
                      >
                        {section.name}
                      </Link>
                    ))}
                    {filteredSections.length === 0 && (
                      <p className="px-4 py-2 text-muted-foreground text-sm">
                        No results found
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide Menu (Left Side) */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              {/* Slide Panel */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 bottom-0 w-72 bg-card/98 backdrop-blur-lg z-50 border-r border-border"
              >
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <span className="font-display text-xl text-foreground">
                    BIKERGRAM
                  </span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground/70 hover:text-foreground"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col p-6 gap-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`font-display text-2xl uppercase transition-colors ${
                          location.pathname === link.path
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="border-t border-border my-2" />

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="font-display text-lg text-primary hover:text-primary/80 transition-colors"
                    >
                      Join Community
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="font-display text-lg text-foreground/70 hover:text-primary transition-colors"
                    >
                      Submit Your Ride
                    </Link>
                  </motion.div>

                  <motion.a
                    href="https://instagram.com/bikergram_andrapradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4"
                  >
                    <Button variant="default" className="w-full">
                      <Instagram className="w-5 h-5" />
                      Follow on Instagram
                    </Button>
                  </motion.a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
