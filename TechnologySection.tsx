import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Cpu, Shield, Smartphone, Camera, ArrowRight, Zap, Wifi, Car } from "lucide-react";

const autonomousLevels = [
  {
    level: "Level 0",
    name: "No Automation",
    description: "Human driver performs all tasks",
    features: ["Manual steering", "Manual acceleration", "Manual braking"],
    examples: ["Most older cars", "Basic vehicles"],
    availability: "Current"
  },
  {
    level: "Level 1", 
    name: "Driver Assistance",
    description: "Single automated system assists driver",
    features: ["Adaptive cruise control", "Lane keeping assist", "Automatic emergency braking"],
    examples: ["Toyota Safety Sense", "Honda Sensing"],
    availability: "Current"
  },
  {
    level: "Level 2",
    name: "Partial Automation", 
    description: "Combined automated functions, driver monitors",
    features: ["Hands-off steering", "Adaptive cruise", "Lane centering"],
    examples: ["Tesla Autopilot", "Cadillac Super Cruise"],
    availability: "Current"
  },
  {
    level: "Level 3",
    name: "Conditional Automation",
    description: "System drives, human ready to take over",
    features: ["Traffic jam pilot", "Highway automation", "Emergency takeover"],
    examples: ["Audi A8 Traffic Jam Pilot", "Mercedes Drive Pilot"],
    availability: "Limited"
  },
  {
    level: "Level 4",
    name: "High Automation",
    description: "System drives in specific conditions",
    features: ["No human intervention needed", "Geo-fenced areas", "Weather dependent"],
    examples: ["Waymo robotaxis", "Cruise Origin"],
    availability: "Testing"
  },
  {
    level: "Level 5",
    name: "Full Automation",
    description: "Complete automation in all conditions",
    features: ["No steering wheel needed", "All weather capability", "Universal operation"],
    examples: ["Future concepts"],
    availability: "Future"
  }
];

const safetyTechnologies = [
  {
    system: "Pre-Collision System",
    description: "Detects potential frontal collisions and warns driver or applies brakes",
    effectiveness: 85,
    cost: "$500-1500",
    standard: "Most new cars"
  },
  {
    system: "Blind Spot Monitoring",
    description: "Monitors blind spots and alerts driver to vehicles",
    effectiveness: 75,
    cost: "$300-800",
    standard: "Premium vehicles"
  },
  {
    system: "Lane Departure Warning",
    description: "Warns when vehicle drifts out of lane",
    effectiveness: 70,
    cost: "$200-600",
    standard: "Most new cars"
  },
  {
    system: "Adaptive Headlights",
    description: "Automatically adjusts beam pattern and intensity",
    effectiveness: 60,
    cost: "$800-2000",
    standard: "Luxury vehicles"
  }
];

const evTechnology = [
  {
    component: "Battery Technology",
    current: "Lithium-ion",
    future: "Solid-state",
    improvements: ["Faster charging", "Higher density", "Longer life", "Lower cost"],
    timeline: "2025-2030"
  },
  {
    component: "Charging Infrastructure",
    current: "350kW DC fast charging",
    future: "Megawatt charging",
    improvements: ["Ultra-fast charging", "Wireless charging", "Vehicle-to-grid", "Smart grid integration"],
    timeline: "2024-2028"
  },
  {
    component: "Motor Technology",
    current: "Permanent magnet",
    future: "Axial flux motors",
    improvements: ["Higher efficiency", "Lighter weight", "Integrated design", "Better cooling"],
    timeline: "2025-2030"
  }
];

const connectivityFeatures = [
  {
    feature: "5G Connectivity",
    description: "Ultra-fast mobile internet for vehicles",
    benefits: ["Real-time traffic", "Cloud computing", "Remote diagnostics", "Entertainment"],
    rollout: "2024-2026"
  },
  {
    feature: "Vehicle-to-Everything (V2X)",
    description: "Communication with infrastructure and other vehicles",
    benefits: ["Traffic optimization", "Safety warnings", "Coordinated driving", "Smart cities"],
    rollout: "2025-2030"
  },
  {
    feature: "Over-the-Air Updates",
    description: "Remote software updates for vehicle systems",
    benefits: ["New features", "Bug fixes", "Performance improvements", "Security patches"],
    rollout: "Current"
  }
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-automotive-primary">Technology</span> & Innovation
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Cutting-edge automotive technologies shaping the future of mobility
          </p>
        </div>

        <Tabs defaultValue="autonomous" className="w-full">
          <TabsList className="grid w-full grid-cols-4 automotive-gradient mb-8">
            <TabsTrigger value="autonomous">Autonomous Driving</TabsTrigger>
            <TabsTrigger value="safety">Safety Systems</TabsTrigger>
            <TabsTrigger value="electric">Electric Vehicle Tech</TabsTrigger>
            <TabsTrigger value="connectivity">Connectivity</TabsTrigger>
          </TabsList>

          <TabsContent value="autonomous" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {autonomousLevels.map((level, index) => (
                <Card key={index} className="automotive-gradient border-automotive-chrome/20 hover:scale-105 smooth-transition">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-lg text-automotive-primary">{level.level}</CardTitle>
                        <p className="text-sm font-bold">{level.name}</p>
                      </div>
                      <Badge variant={level.availability === "Current" ? "secondary" : level.availability === "Limited" ? "default" : "destructive"}>
                        {level.availability}
                      </Badge>
                    </div>
                    <p className="text-foreground/70 text-sm">{level.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-bold text-sm mb-2">Features</h5>
                        {level.features.map((feature, fIndex) => (
                          <div key={fIndex} className="text-sm text-foreground/80">• {feature}</div>
                        ))}
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-2">Examples</h5>
                        {level.examples.map((example, eIndex) => (
                          <Badge key={eIndex} variant="secondary" className="text-xs mr-1 mb-1">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="safety" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {safetyTechnologies.map((tech, index) => (
                <Card key={index} className="automotive-gradient border-automotive-chrome/20 hover:scale-105 smooth-transition">
                  <CardHeader>
                    <CardTitle className="text-lg">{tech.system}</CardTitle>
                    <p className="text-foreground/70 text-sm">{tech.description}</p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{tech.cost}</Badge>
                      <Badge variant="secondary">{tech.standard}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Effectiveness</span>
                          <span>{tech.effectiveness}%</span>
                        </div>
                        <Progress value={tech.effectiveness} className="h-2" />
                      </div>
                      <Button variant="automotive" size="sm" className="w-full">
                        Learn How It Works
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="electric" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {evTechnology.map((tech, index) => (
                <Card key={index} className="automotive-gradient border-automotive-chrome/20 hover:scale-105 smooth-transition">
                  <CardHeader>
                    <CardTitle className="text-lg text-automotive-primary">{tech.component}</CardTitle>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-foreground/70">Current: </span>
                        <span className="text-sm font-bold">{tech.current}</span>
                      </div>
                      <div>
                        <span className="text-sm text-foreground/70">Future: </span>
                        <span className="text-sm font-bold text-automotive-accent">{tech.future}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">{tech.timeline}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h5 className="font-bold text-sm mb-2">Improvements</h5>
                      {tech.improvements.map((improvement, iIndex) => (
                        <div key={iIndex} className="text-sm text-automotive-accent">• {improvement}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="connectivity" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {connectivityFeatures.map((feature, index) => (
                <Card key={index} className="automotive-gradient border-automotive-chrome/20 hover:scale-105 smooth-transition">
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.feature}</CardTitle>
                    <p className="text-foreground/70 text-sm">{feature.description}</p>
                    <Badge variant="secondary">{feature.rollout}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-bold text-sm mb-2">Benefits</h5>
                        {feature.benefits.map((benefit, bIndex) => (
                          <div key={bIndex} className="text-sm text-automotive-accent">• {benefit}</div>
                        ))}
                      </div>
                      <Button variant="automotive" size="sm" className="w-full">
                        Technical Details
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

export default TechnologySection;