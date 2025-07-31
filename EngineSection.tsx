import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Cog, Zap, Thermometer, Gauge, ArrowRight, Wrench, Activity } from "lucide-react";

const engineTypes = [
  {
    title: "V8 Engine",
    description: "Eight cylinders arranged in a V configuration, delivering exceptional power and that iconic rumble.",
    specs: ["5.0L - 7.0L displacement", "400-700+ HP", "High torque output", "Premium fuel recommended"],
    image: "🏎️",
    details: {
      pros: ["Massive power output", "Smooth operation", "Great sound", "High torque"],
      cons: ["Poor fuel economy", "Heavy weight", "Expensive maintenance", "Emissions"],
      examples: ["Chevrolet LS3", "Ford Coyote 5.0L", "BMW S63", "Mercedes AMG 6.3L"]
    }
  },
  {
    title: "Turbocharged I4",
    description: "Four cylinders with forced induction, combining efficiency with surprising performance.",
    specs: ["1.5L - 2.5L displacement", "200-400 HP", "Excellent fuel economy", "Turbo lag consideration"],
    image: "🚗",
    details: {
      pros: ["Great fuel economy", "Compact size", "Lower emissions", "Modern technology"],
      cons: ["Turbo lag", "Complex maintenance", "Heat issues", "Reliability concerns"],
      examples: ["BMW B48", "Audi EA888", "Ford EcoBoost", "Mercedes M274"]
    }
  },
  {
    title: "Hybrid Powertrain",
    description: "Combination of gasoline engine and electric motor for optimal efficiency and performance.",
    specs: ["Combined 150-300+ HP", "50+ MPG possible", "Instant electric torque", "Regenerative braking"],
    image: "🌱",
    details: {
      pros: ["Excellent fuel economy", "Instant torque", "Reduced emissions", "Quiet operation"],
      cons: ["Complex systems", "Battery replacement cost", "Weight penalty", "Limited electric range"],
      examples: ["Toyota Prius", "Honda Accord Hybrid", "BMW i8", "McLaren P1"]
    }
  },
  {
    title: "Electric Motor",
    description: "Pure electric propulsion delivering instant torque and whisper-quiet operation.",
    specs: ["100-1000+ HP", "Instant torque", "Zero emissions", "300+ mile range"],
    image: "⚡",
    details: {
      pros: ["Instant torque", "Zero emissions", "Quiet", "Low maintenance"],
      cons: ["Charging infrastructure", "Battery degradation", "High initial cost", "Limited range"],
      examples: ["Tesla Model S Plaid", "Lucid Air", "BMW iX", "Mercedes EQS"]
    }
  }
];

const maintenanceSchedule = [
  { service: "Oil Change", interval: "5,000-7,500 miles", importance: 95 },
  { service: "Air Filter", interval: "15,000-30,000 miles", importance: 75 },
  { service: "Spark Plugs", interval: "30,000-100,000 miles", importance: 85 },
  { service: "Timing Belt", interval: "60,000-100,000 miles", importance: 100 },
  { service: "Coolant Flush", interval: "30,000-50,000 miles", importance: 90 }
];

const engineModifications = [
  {
    mod: "Cold Air Intake",
    power: "+5-15 HP",
    cost: "$150-400",
    difficulty: "Easy",
    description: "Allows engine to breathe better with cooler, denser air"
  },
  {
    mod: "Exhaust System",
    power: "+10-25 HP",
    cost: "$300-1500",
    difficulty: "Medium",
    description: "Reduces backpressure and improves exhaust flow"
  },
  {
    mod: "ECU Tune",
    power: "+20-50 HP",
    cost: "$400-1000",
    difficulty: "Easy",
    description: "Optimizes fuel and ignition maps for better performance"
  },
  {
    mod: "Turbo/Supercharger",
    power: "+50-200 HP",
    cost: "$2000-8000",
    difficulty: "Hard",
    description: "Forced induction dramatically increases power output"
  }
];

const EngineSection = () => {
  return (
    <section id="engine" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-automotive-primary">Engine</span> Fundamentals
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Master the heart of every vehicle - from basic principles to advanced powertrains
          </p>
        </div>

        <Tabs defaultValue="types" className="w-full">
          <TabsList className="grid w-full grid-cols-4 automotive-gradient mb-8">
            <TabsTrigger value="types">Engine Types</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="modifications">Modifications</TabsTrigger>
            <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
          </TabsList>

          <TabsContent value="types" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {engineTypes.map((engine, index) => (
                <Card key={index} className="automotive-gradient border-automotive-chrome/20 hover:scale-105 smooth-transition">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{engine.image}</div>
                      <div>
                        <CardTitle className="text-xl">{engine.title}</CardTitle>
                        <p className="text-foreground/70">{engine.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-automotive-primary mb-2">Specifications</h4>
                        <div className="space-y-1">
                          {engine.specs.map((spec, specIndex) => (
                            <div key={specIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-automotive-primary"></div>
                              <span className="text-foreground/80 text-sm">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-bold text-green-400 mb-2">Pros</h5>
                          {engine.details.pros.map((pro, proIndex) => (
                            <div key={proIndex} className="text-sm text-foreground/70">• {pro}</div>
                          ))}
                        </div>
                        <div>
                          <h5 className="font-bold text-red-400 mb-2">Cons</h5>
                          {engine.details.cons.map((con, conIndex) => (
                            <div key={conIndex} className="text-sm text-foreground/70">• {con}</div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-bold text-automotive-accent mb-2">Popular Examples</h5>
                        <div className="flex flex-wrap gap-2">
                          {engine.details.examples.map((example, exampleIndex) => (
                            <Badge key={exampleIndex} variant="secondary" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-8">
            <Card className="automotive-gradient border-automotive-chrome/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-automotive-primary" />
                  Engine Maintenance Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {maintenanceSchedule.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card/50">
                      <div className="flex-1">
                        <div className="font-medium">{service.service}</div>
                        <div className="text-sm text-foreground/70">{service.interval}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm text-foreground/70">Importance</div>
                          <Progress value={service.importance} className="w-20" />
                        </div>
                        <Badge variant={service.importance > 90 ? "destructive" : service.importance > 80 ? "default" : "secondary"}>
                          {service.importance}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="modifications" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {engineModifications.map((mod, index) => (
                <Card key={index} className="automotive-gradient border-automotive-chrome/20 hover:scale-105 smooth-transition">
                  <CardHeader>
                    <CardTitle className="text-lg">{mod.mod}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{mod.power}</Badge>
                      <Badge variant="secondary">{mod.cost}</Badge>
                      <Badge variant={mod.difficulty === "Easy" ? "secondary" : mod.difficulty === "Medium" ? "default" : "destructive"}>
                        {mod.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 mb-4">{mod.description}</p>
                    <Button variant="automotive" size="sm" className="w-full">
                      Learn Installation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="troubleshooting" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  problem: "Engine Won't Start",
                  symptoms: ["No cranking", "Cranks but won't fire", "Clicks only"],
                  causes: ["Dead battery", "Bad starter", "Fuel pump failure", "Ignition issues"],
                  solutions: ["Jump start battery", "Test starter motor", "Check fuel pressure", "Inspect spark plugs"]
                },
                {
                  problem: "Engine Overheating",
                  symptoms: ["High temperature gauge", "Steam from hood", "Coolant loss"],
                  causes: ["Low coolant", "Bad thermostat", "Radiator blockage", "Water pump failure"],
                  solutions: ["Add coolant", "Replace thermostat", "Flush radiator", "Replace water pump"]
                },
                {
                  problem: "Rough Idle",
                  symptoms: ["Engine shaking", "Inconsistent RPM", "Stalling"],
                  causes: ["Dirty air filter", "Bad spark plugs", "Vacuum leaks", "Fuel injector issues"],
                  solutions: ["Replace air filter", "Change spark plugs", "Check vacuum lines", "Clean injectors"]
                },
                {
                  problem: "Poor Fuel Economy",
                  symptoms: ["More frequent fill-ups", "Black exhaust smoke", "Sluggish acceleration"],
                  causes: ["Dirty air filter", "Bad oxygen sensor", "Tire pressure", "Driving habits"],
                  solutions: ["Replace filters", "Replace O2 sensor", "Check tire pressure", "Adjust driving style"]
                }
              ].map((issue, index) => (
                <Card key={index} className="automotive-gradient border-automotive-chrome/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-automotive-accent">{issue.problem}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-bold text-sm mb-1">Symptoms</h5>
                        {issue.symptoms.map((symptom, sIndex) => (
                          <div key={sIndex} className="text-sm text-red-400">• {symptom}</div>
                        ))}
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-1">Common Causes</h5>
                        {issue.causes.map((cause, cIndex) => (
                          <div key={cIndex} className="text-sm text-foreground/70">• {cause}</div>
                        ))}
                      </div>
                      <div>
                        <h5 className="font-bold text-sm mb-1">Solutions</h5>
                        {issue.solutions.map((solution, solIndex) => (
                          <div key={solIndex} className="text-sm text-green-400">• {solution}</div>
                        ))}
                      </div>
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

export default EngineSection;