import { Link } from "react-router-dom";
import { Calendar, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">Campus Events Hub</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Your centralized platform for discovering and participating in all college events.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Categories */}
          <div>
            <h3 className="font-semibold mb-4">Event Categories</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Technical Events</li>
              <li className="text-muted-foreground text-sm">Cultural Events</li>
              <li className="text-muted-foreground text-sm">Sports Events</li>
              <li className="text-muted-foreground text-sm">Workshops</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 University Road, Campus City, State 12345</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:events@college.edu" className="hover:text-primary transition-colors">
                  events@college.edu
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Campus Events Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
