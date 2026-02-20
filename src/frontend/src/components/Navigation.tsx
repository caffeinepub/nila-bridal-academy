import { Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate({ to: '/' });
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Home', action: () => navigate({ to: '/' }) },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Services', action: () => scrollToSection('services') },
    { label: 'Training', action: () => scrollToSection('training') },
    { label: 'Management Team', action: () => navigate({ to: '/management-team' }) },
    { label: 'Testimonials', action: () => scrollToSection('testimonials') },
    { label: 'Contact', action: () => navigate({ to: '/contact' }) },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl">🌸</span>
          <span className="font-serif text-xl font-bold text-rose-gold">Nila Bridal Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              className="text-sm font-medium text-foreground/80 hover:text-rose-gold transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="default"
            size="sm"
            className="bg-rose-gold hover:bg-rose-gold/90"
            asChild
          >
            <a href="tel:9384459938" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-left text-lg font-medium text-foreground/80 hover:text-rose-gold transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="default"
                className="bg-rose-gold hover:bg-rose-gold/90 w-full"
                asChild
              >
                <a href="tel:9384459938" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
