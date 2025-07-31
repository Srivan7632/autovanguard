import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, Gauge, Cpu, Palette, ArrowRight } from "lucide-react";

const knowledgeAreas = [
  {
    id: "engine",
    icon: Cog,
    title: "Engine & Mechanics",
    description: "Understand the heart of every car - from combustion engines to electric motors",
    topics: ["V8 vs V6 Engines", "Turbocharging", "Hybrid Systems", "Engine Tuning", "Maintenance"],
    color: "text-automotive-accent"
  },
  {
    id: "performance",
    icon: Gauge,
    title: "Performance & Dynamics",
    description: "Explore what makes cars fast, agile, and thrilling to drive",
    topics: ["Aerodynamics", "Suspension", "Braking Systems", "AWD vs RWD", "Track Performance"],
    color: "text-automotive-primary"
  },
  {
    id: "technology",
    icon: Cpu,
    title: "Technology & Innovation",
    description: "Discover cutting-edge automotive technologies shaping the future",
    topics: ["Autonomous Driving", "Infotainment", "Safety Systems", "Electric Powertrains", "Connected Cars"],
    color: "text-automotive-accent"
  },
  {
    id: "design",
    icon: Palette,
    title: "Design & Aesthetics",
    description: "Appreciate the art and science behind automotive design",
    topics: ["Exterior Styling", "Interior Design", "Color Theory", "Materials", "Brand Identity"],
    color: "text-automotive-primary"
  }
];

const KnowledgeSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Master <span className="text-automotive-primary">Automotive</span> Knowledge
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Comprehensive insights into every aspect of automotive engineering and design
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {knowledgeAreas.map((area, index) => (
            <Card 
              key={area.id} 
              className="automotive-gradient border-automotive-chrome/20 card-shadow hover:scale-105 smooth-transition group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg automotive-gradient border border-automotive-chrome/30">
                    <area.icon className={`w-6 h-6 ${area.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{area.title}</CardTitle>
                    <CardDescription className="text-foreground/70">
                      {area.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {area.topics.map((topic, topicIndex) => (
                    <div 
                      key={topicIndex}
                      className="flex items-center gap-2 text-foreground/80 hover:text-automotive-primary smooth-transition cursor-pointer"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-automotive-primary"></div>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="automotive" 
                  className="w-full group"
                  onClick={() => document.getElementById(area.id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore {area.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;