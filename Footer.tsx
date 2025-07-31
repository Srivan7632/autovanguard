import { Car, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="automotive-gradient border-t border-automotive-chrome/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-8 h-8 text-automotive-primary" />
              <span className="text-xl font-bold">AutoVanguard</span>
            </div>
            <p className="text-foreground/70 mb-6">
              Your ultimate destination for automotive knowledge, from engine basics to cutting-edge technology.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Knowledge */}
          <div>
            <h3 className="font-bold mb-4 text-automotive-primary">Knowledge</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-automotive-primary smooth-transition">Engine Basics</a></li>
              <li><a href="#" className="hover:text-automotive-primary smooth-transition">Performance</a></li>
              <li><a href="#" className="hover:text-automotive-primary smooth-transition">Technology</a></li>
              <li><a href="#" className="hover:text-automotive-primary smooth-transition">Design</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-automotive-primary">Resources</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-automotive-primary smooth-transition">Car Reviews</a></li>
              <li><a href="#" className="hover:text-automotive-primary smooth-transition">Buying Guide</a></li>
              <li><a href="#" className="hover:text-automotive-primary smooth-transition">Maintenance</a></li>
              <li><a href="#" className="hover:text-automotive-primary smooth-transition">News</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-automotive-primary">Company</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-automotive-primary smooth-transition">About Us</a></li>
              <li><a href="#" className="hover:text-automotive-primary smooth-transition">Contact</a></li>
              <li><a href="#" className="hover:text-automotive-primary smooth-transition">Privacy</a></li>
              <li><a href="#" className="hover:text-automotive-primary smooth-transition">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-automotive-chrome/20 mt-12 pt-8 text-center text-foreground/60">
          <p>&copy; 2024 AutoVanguard. Engineered with passion for automotive excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;