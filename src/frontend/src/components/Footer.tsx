import { Link } from '@tanstack/react-router';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'nila-bridal-academy';

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌸</span>
              <span className="font-serif text-lg font-bold text-rose-gold">Nila Bridal Academy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Luxury bridal makeup services and free professional beauty training across Tamil Nadu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-rose-gold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-rose-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-rose-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-rose-gold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms-conditions" className="text-muted-foreground hover:text-rose-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-rose-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-muted-foreground hover:text-rose-gold transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/accessibility-statement" className="text-muted-foreground hover:text-rose-gold transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-rose-gold">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Service Area: All Over Tamil Nadu
              </p>
              <a
                href="tel:9384459938"
                className="text-sm font-medium text-rose-gold hover:underline block"
              >
                📞 9384459938
              </a>
              <div className="flex space-x-3 pt-2">
                <a
                  href="https://wa.me/919384459938"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-rose-gold transition-colors"
                >
                  <SiWhatsapp className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-rose-gold transition-colors"
                >
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-rose-gold transition-colors"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} Nila Bridal Academy. All rights reserved. | Built with{' '}
            <Heart className="h-4 w-4 text-rose-gold fill-rose-gold" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
