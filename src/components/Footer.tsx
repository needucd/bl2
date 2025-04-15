
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "All Test Packages", href: "/packages" },
      { name: "Basic Health Tests", href: "/package/basic-health-checkup" },
      { name: "Specialized Tests", href: "/package/thyroid-panel" },
      { name: "Health Packages", href: "/package/advanced-full-body-checkup" },
    ]
  },
  {
    title: "About",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Laboratories", href: "/laboratories" },
      { name: "Blog", href: "/blog" },
    ]
  },
  {
    title: "Help",
    links: [
      { name: "Booking Process", href: "/booking-process" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact Us", href: "#newsletter" },
      { name: "Track Results", href: "/track-results" },
    ]
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bloodlyf-darkblue pt-16 pb-8">
      <div className="bloodlyf-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <h3 className="text-white text-xl" style={{ fontFamily: 'Rosmatika, serif' }}>BloodLyf</h3>
            </Link>
            <p className="text-white/90 text-sm">
              Professional blood collection at your doorstep. Certified phlebotomists, accurate results, and seamless experience.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium text-lg mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/90">
            © {currentYear} BloodLyf Health Services. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="/privacy-policy" className="text-sm text-white/90 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm text-white/90 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/medical-disclaimer" className="text-sm text-white/90 hover:text-white transition-colors">
              Medical Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
