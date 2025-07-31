import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Eye, Users, Award, ArrowRight, Paintbrush, Layers } from "lucide-react";

const designEras = [
  {
    era: "1950s-1960s",
    name: "Golden Age",
    characteristics: ["Chrome details", "Tail fins", "Bold colors", "Luxury focus"],
    icons: ["Cadillac Eldorado", "Chevrolet Bel Air", "Ford Thunderbird"],
    influence: "American muscle car aesthetic"
  },
  {
    era: "1970s-1980s",
    name: "Wedge Era",
    characteristics: ["Angular lines", "Sharp edges", "Low-slung profiles", "Futuristic appeal"],
    icons: ["Lamborghini Countach", "Lotus Esprit", "BMW M1"],
    influence: "Supercar design language"
  },
  {
    era: "1990s-2000s",
    name: "Rounded Evolution",
    characteristics: ["Curved surfaces", "Organic shapes", "Aerodynamic focus", "Safety integration"],
    icons: ["Mazda RX-7", "Porsche 996", "Audi TT"],
    influence: "Computer-aided design adoption"
  },
  {
    era: "2010s-Present",
    name: "Digital Age",
    characteristics: ["LED lighting", "Sharp creases", "Active aerodynamics", "Minimalist interiors"],
    icons: ["Tesla Model S", "BMW i8", "McLaren 720S"],
    influence: "Electric vehicle design paradigm"
  }
];

const colorPsychology = [
  {
    color: "Red",
    meaning: "Passion, Speed, Power",
    brands: ["Ferrari", "Alfa Romeo", "Mazda"],
    popularity: "15%",
    resale: "High"
  },
  {
    color: "Black",
    meaning: "Luxury, Sophistication, Power",
    brands: ["BMW", "Mercedes", "Audi"],
    popularity: "20%",
    resale: "Excellent"
  },
  {
    color: "White",
    meaning: "Purity, Modern, Clean",
    brands: ["Tesla", "Volvo", "Lexus"],
    popularity: "30%",
    resale: "Excellent"
  },
  {
    color: "Blue",
    meaning: "Trust, Technology, Calm",
    brands: ["Ford", "Subaru", "Hyundai"],
    popularity: "12%",
    resale: "Good"
  },
  {
    color: "Silver/Gray",
    meaning: "Technology, Elegance, Timeless",
    brands: ["Audi", "BMW", "Mercedes"],
    popularity: "23%",
    resale: "Very Good"
  }
];

const interiorMaterials = [
  {
    material: "Leather",
    types: ["Nappa", "Alcantara", "Semi-aniline", "Full-grain"],
    cost: "$1000-5000",
    durability: 90,
    luxury: 95
  },
  {
    material: "Carbon Fiber",
    types: ["Woven", "Forged", "Painted", "Raw"],
    cost: "$2000-8000",
    durability: 85,
    luxury: 90
  },
  {
    material: "Wood",
    types: ["Walnut", "Carbon", "Piano black", "Open-pore"],
    cost: "$500-3000",
    durability: 75,
    luxury: 85
  },
  {
    material: "Aluminum",
    types: ["Brushed", "Polished", "Anodized", "Diamond-cut"],
    cost: "$300-1500",
    durability: 95,
    luxury: 80
  }
];

const designTools = [
  {
    tool: "Clay Modeling",
    description: "Physical 3D representation for shape refinement",
    stage: "Concept Development",
    cost: "$50,000-200,000",
    timeframe: "8-16 weeks"
  },
  {
    tool: "CAD Software",
    description: "Digital design and engineering integration",
    stage: "Design Development",
    cost: "$10,000-50,000",
    timeframe: "12-24 weeks"
  },
  {
    tool: "Wind Tunnel Testing",
    description: "Aerodynamic validation and optimization",
    stage: "Validation",
    cost: "$100,000-500,000",
    timeframe: "4-8 weeks"
  },
  {
    tool: "Virtual Reality",
    description: "Immersive design review and validation",
    stage: "Review & Approval",
    cost: "$20,000-100,000",
    timeframe: "2-4 weeks"
  }
];

const DesignSection = () => {
  return (
    <section id="design" className="py-20 px-4 automotive-gradient">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-automotive-primary">Design</span> & Aesthetics
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            The art and science behind automotive design - where emotion meets engineering
          </p>
        </div>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-4 automotive-gradient mb-8">
            <TabsTrigger value="history">Design History</TabsTrigger>
            <TabsTrigger value="colors">Colors & Psychology</TabsTrigger>
            <TabsTrigger value="materials">Interior Materials</TabsTrigger>
            <TabsTrigger value="process">Design Process</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {designEras.map((era, index) => (
                <Card key={index} className="bg-card/50 border-automotive-chrome/20 backdrop-blur-sm hover:scale-105 smooth-transition">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-lg text-automotive-primary">{era.era}</CardTitle>
                        <p className="text-sm font-bold">{era.name}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">{era.era.split('-')[0]}s</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-bold text-sm mb-2">Characteristics</h5>
                        <div className="grid grid-cols-2 gap-2">
                          {era.characteristics.map((char, cIndex) => (
                            <div key={cIndex} className="text-sm text-automotive-accent">• {char}</div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-2">Iconic Cars</h5>
                        <div className="flex flex-wrap gap-1">
                          {era.icons.map((icon, iIndex) => (
                            <Badge key={iIndex} variant="secondary" className="text-xs">
                              {icon}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-1">Legacy</h5>
                        <p className="text-foreground/70 text-sm">{era.influence}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="colors" className="space-y-8">
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {colorPsychology.map((color, index) => (
                <Card key={index} className="bg-card/50 border-automotive-chrome/20 backdrop-blur-sm hover:scale-105 smooth-transition">
                  <CardHeader>
                    <CardTitle className="text-lg">{color.color}</CardTitle>
                    <p className="text-foreground/70 text-sm">{color.meaning}</p>
                    <div className="flex justify-between text-xs">
                      <Badge variant="secondary">{color.popularity}</Badge>
                      <Badge variant="secondary">{color.resale}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h5 className="font-bold text-sm mb-2">Associated Brands</h5>
                      {color.brands.map((brand, bIndex) => (
                        <div key={bIndex} className="text-sm text-automotive-primary">• {brand}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="materials" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {interiorMaterials.map((material, index) => (
                <Card key={index} className="bg-card/50 border-automotive-chrome/20 backdrop-blur-sm hover:scale-105 smooth-transition">
                  <CardHeader>
                    <CardTitle className="text-lg text-automotive-primary">{material.material}</CardTitle>
                    <Badge variant="secondary">{material.cost}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-bold text-sm mb-2">Types</h5>
                        <div className="flex flex-wrap gap-1">
                          {material.types.map((type, tIndex) => (
                            <Badge key={tIndex} variant="secondary" className="text-xs">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-foreground/70 mb-1">Durability</div>
                          <div className="text-lg font-bold text-automotive-accent">{material.durability}%</div>
                        </div>
                        <div>
                          <div className="text-sm text-foreground/70 mb-1">Luxury Factor</div>
                          <div className="text-lg font-bold text-automotive-primary">{material.luxury}%</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="process" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {designTools.map((tool, index) => (
                <Card key={index} className="bg-card/50 border-automotive-chrome/20 backdrop-blur-sm hover:scale-105 smooth-transition">
                  <CardHeader>
                    <CardTitle className="text-lg">{tool.tool}</CardTitle>
                    <p className="text-foreground/70 text-sm">{tool.description}</p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">{tool.stage}</Badge>
                      <Badge variant="secondary" className="text-xs">{tool.timeframe}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Investment:</span>
                        <span className="font-bold text-automotive-accent">{tool.cost}</span>
                      </div>
                      <Button variant="automotive" size="sm" className="w-full">
                        Learn Process
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Design Process Flow */}
            <Card className="bg-card/50 border-automotive-chrome/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-xl">Complete Design Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "Concept", description: "Initial sketches and ideation", time: "4-8 weeks" },
                    { step: "2", title: "Development", description: "3D modeling and refinement", time: "12-16 weeks" },
                    { step: "3", title: "Validation", description: "Testing and optimization", time: "8-12 weeks" },
                    { step: "4", title: "Production", description: "Engineering for manufacturing", time: "24-52 weeks" }
                  ].map((phase, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-automotive-primary text-background font-bold flex items-center justify-center mx-auto mb-4">
                        {phase.step}
                      </div>
                      <h4 className="font-bold mb-2">{phase.title}</h4>
                      <p className="text-foreground/70 text-sm mb-2">{phase.description}</p>
                      <Badge variant="secondary" className="text-xs">{phase.time}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DesignSection;