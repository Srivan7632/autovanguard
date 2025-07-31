import { Button } from "@/components/ui/button";
import { Car, Menu, Search } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 automotive-gradient border-b border-automotive-chrome/20 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Car className="w-8 h-8 text-automotive-primary" />
          <span className="text-xl font-bold">AutoVanguard</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#engine" 
            className="text-foreground/80 hover:text-automotive-primary smooth-transition cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('engine')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Engine
          </a>
          <a 
            href="#performance" 
            className="text-foreground/80 hover:text-automotive-primary smooth-transition cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('performance')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Performance
          </a>
          <a 
            href="#technology" 
            className="text-foreground/80 hover:text-automotive-primary smooth-transition cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Technology
          </a>
          <a 
            href="#design" 
            className="text-foreground/80 hover:text-automotive-primary smooth-transition cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('design')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Design
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="hero" size="lg" className="hidden md:flex">
            Explore Cars
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;