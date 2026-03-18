import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand / Footer Logo */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display text-4xl text-foreground">
                BIKERGRAM
              </h3>
              <p className="font-display text-xl text-primary tracking-widest">
                ANDHRA PRADESH
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed tracking-wider">
              Beyond the Road, Where Bikers Belong
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              Andhra Pradesh, India
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-4">
            <h4 className="font-display text-xl text-foreground">EXPLORE</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Biker Hub", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-display text-xl text-foreground">CONNECT</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/bikergram_andrapradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_12px_hsl(var(--primary)/0.5)] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/BikergramAndraPradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_12px_hsl(var(--primary)/0.5)] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:bikergramandrapradesh@gmail.com"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_12px_hsl(var(--primary)/0.5)] transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              bikergramandrapradesh@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Bikergram Andhra Pradesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
