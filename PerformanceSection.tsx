import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gauge, Wind, Zap, Settings, ArrowRight, Trophy, Target, Timer } from "lucide-react";

const lapTimes = [
  { track: "Nürburgring Nordschleife", car: "Porsche 911 GT2 RS", time: "6:43.30", category: "Production Car" },
  { track: "Laguna Seca", car: "McLaren Senna", time: "1:27.62", category: "Track Special" },
  { track: "Silverstone GP", car: "Mercedes-AMG One", time: "1:23.50", category: "Hypercar" },
  { track: "Suzuka Circuit", car: "Honda NSX Type R", time: "2:02.30", category: "Japanese" }
];

const performanceCategories = [
  {
    title: "Supercars",
    description: "Ultimate performance machines with exotic materials and engineering",
    examples: [
      { car: "McLaren 720S", power: "710 HP", torque: "568 lb-ft", "0-60": "2.7s", price: "$300k+" },
      { car: "Ferrari F8 Tributo", power: "710 HP", torque: "568 lb-ft", "0-60": "2.8s", price: "$280k+" },
      { car: "Lamborghini Huracán", power: "630 HP", torque: "443 lb-ft", "0-60": "2.9s", price: "$250k+" }
    ]
  },
  {
    title: "Hypercars",
    description: "The absolute pinnacle of automotive performance and technology",
    examples: [
      { car: "Bugatti Chiron", power: "1479 HP", torque: "1180 lb-ft", "0-60": "2.3s", price: "$3M+" },
      { car: "Koenigsegg Jesko", power: "1600 HP", torque: "1106 lb-ft", "0-60": "2.5s", price: "$3M+" },
      { car: "McLaren Speedtail", power: "1035 HP", torque: "848 lb-ft", "0-60": "2.5s", price: "$2.2M+" }
    ]
  }
];

const drivingTechniques = [
  {
    technique: "Trail Braking",
    description: "Continuing to brake while turning into a corner",
    benefit: "Better weight transfer and corner entry speed",
    difficulty: "Advanced"
  },
  {
    technique: "Heel-Toe Downshifting",
    description: "Rev-matching while braking for smooth downshifts",
    benefit: "Prevents chassis upset and maintains stability",
    difficulty: "Intermediate"
  },
  {
    technique: "Racing Line",
    description: "Optimal path through corners for maximum speed",
    benefit: "Faster lap times and better cornering speeds",
    difficulty: "Beginner"
  },
  {
    technique: "Left-Foot Braking",
    description: "Using left foot for braking in performance driving",
    benefit: "Faster transitions and better throttle control",
    difficulty: "Advanced"
  }
];

const tuningGuides = [
  {
    component: "Suspension",
    adjustments: ["Spring rates", "Damper settings", "Anti-roll bars", "Ride height"],
    effects: ["Handling balance", "Comfort vs performance", "Tire contact patch", "Aerodynamics"],
    cost: "$500-5000"
  },
  {
    component: "Aerodynamics",
    adjustments: ["Front splitter", "Rear wing", "Side skirts", "Diffuser"],
    effects: ["Downforce", "Drag coefficient", "High-speed stability", "Cornering grip"],
    cost: "$1000-10000"
  },
  {
    component: "Brakes",
    adjustments: ["Pad compounds", "Rotor size", "Brake fluid", "Brake lines"],
    effects: ["Stopping power", "Heat resistance", "Pedal feel", "Consistency"],
    cost: "$800-8000"
  }
];

const PerformanceSection = () => {
  return (
    <section id="performance" className="py-20 px-4 automotive-gradient">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-automotive-primary">Performance</span> & Dynamics
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Understanding what makes cars fast, agile, and thrilling to drive
          </p>
        </div>

        <Tabs defaultValue="categories" className="w-full">
          <TabsList className="grid w-full grid-cols-4 automotive-gradient mb-8">
            <TabsTrigger value="categories">Car Categories</TabsTrigger>
            <TabsTrigger value="tracks">Track Performance</TabsTrigger>
            <TabsTrigger value="techniques">Driving Techniques</TabsTrigger>
            <TabsTrigger value="tuning">Performance Tuning</TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="space-y-8">
            {performanceCategories.map((category, index) => (
              <Card key={index} className="bg-card/50 border-automotive-chrome/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-automotive-primary">{category.title}</CardTitle>
                  <p className="text-foreground/70">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {category.examples.map((car, carIndex) => (
                      <Card key={carIndex} className="automotive-gradient hover:scale-105 smooth-transition">
                        <CardHeader>
                          <CardTitle className="text-lg">{car.car}</CardTitle>
                          <Badge variant="secondary">{car.price}</Badge>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Power:</span>
                              <span className="text-automotive-accent font-bold">{car.power}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Torque:</span>
                              <span className="text-automotive-accent font-bold">{car.torque}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>0-60 mph:</span>
                              <span className="text-automotive-primary font-bold">{car["0-60"]}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="tracks" className="space-y-8">
            <Card className="bg-card/50 border-automotive-chrome/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-automotive-primary" />
                  Record Lap Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lapTimes.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg automotive-gradient">
                      <div>
                        <div className="font-bold">{record.track}</div>
                        <div className="text-sm text-foreground/70">{record.car}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-automotive-primary">{record.time}</div>
                        <Badge variant="secondary" className="text-xs">{record.category}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Timer, title: "Acceleration Testing", description: "0-60, 0-100, quarter mile times and techniques" },
                { icon: Target, title: "Braking Performance", description: "60-0 stopping distances and brake testing methods" },
                { icon: Wind, title: "Top Speed Runs", description: "High-speed testing and aerodynamic considerations" }
              ].map((test, index) => (
                <Card key={index} className="bg-card/50 border-automotive-chrome/20 backdrop-blur-sm hover:scale-105 smooth-transition">
                  <CardHeader className="text-center">
                    <test.icon className="w-12 h-12 text-automotive-accent mx-auto mb-4" />
                    <CardTitle>{test.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 text-center mb-4">{test.description}</p>
                    <Button variant="automotive" className="w-full">
                      Learn Testing Methods
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="techniques" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {drivingTechniques.map((technique, index) => (
                <Card key={index} className="bg-card/50 border-automotive-chrome/20 backdrop-blur-sm hover:scale-105 smooth-transition">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{technique.technique}</CardTitle>
                      <Badge variant={technique.difficulty === "Beginner" ? "secondary" : technique.difficulty === "Intermediate" ? "default" : "destructive"}>
                        {technique.difficulty}
                      </Badge>
                    </div>
                    <p className="text-foreground/70">{technique.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h5 className="font-bold text-automotive-primary mb-2">Benefit</h5>
                      <p className="text-foreground/80 text-sm">{technique.benefit}</p>
                    </div>
                    <Button variant="automotive" size="sm" className="w-full">
                      Watch Tutorial
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tuning" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {tuningGuides.map((guide, index) => (
                <Card key={index} className="bg-card/50 border-automotive-chrome/20 backdrop-blur-sm hover:scale-105 smooth-transition">
                  <CardHeader>
                    <CardTitle className="text-lg text-automotive-primary">{guide.component}</CardTitle>
                    <Badge variant="secondary">{guide.cost}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-bold text-sm mb-2">Adjustments</h5>
                        {guide.adjustments.map((adj, adjIndex) => (
                          <div key={adjIndex} className="text-sm text-foreground/70">• {adj}</div>
                        ))}
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-2">Effects</h5>
                        {guide.effects.map((effect, effectIndex) => (
                          <div key={effectIndex} className="text-sm text-automotive-accent">• {effect}</div>
                        ))}
                      </div>
                      <Button variant="automotive" size="sm" className="w-full">
                        Tuning Guide
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PerformanceSection;