import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, TrendingUp } from "lucide-react";

const featuredContent = [
  {
    type: "trending",
    icon: TrendingUp,
    title: "Electric Vehicle Revolution",
    description: "How EVs are transforming the automotive landscape with instant torque and zero emissions",
    readTime: "8 min read",
    rating: 4.9,
    category: "Technology"
  },
  {
    type: "latest",
    icon: Clock,
    title: "Turbocharged vs Naturally Aspirated",
    description: "The ultimate comparison between forced induction and natural breathing engines",
    readTime: "12 min read",
    rating: 4.8,
    category: "Engine"
  },
  {
    type: "popular",
    icon: Star,
    title: "Aerodynamics in Modern Cars",
    description: "How wind tunnel testing and CFD analysis shape today's most efficient vehicles",
    readTime: "10 min read",
    rating: 4.9,
    category: "Performance"
  }
];

const FeaturedSection = () => {
  return (
    <section className="py-20 px-4 automotive-gradient">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-automotive-primary">Featured</span> Content
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Curated automotive insights and deep-dives into the latest industry trends
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <Card 
              key={index}
              className="bg-card/50 border-automotive-chrome/20 backdrop-blur-sm hover:scale-105 smooth-transition group overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-automotive-primary/20 to-automotive-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="automotive-gradient text-foreground">
                    {content.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <content.icon className="w-8 h-8 text-automotive-primary" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-automotive-primary smooth-transition">
                  {content.title}
                </h3>
                
                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-foreground/60 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{content.readTime}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-automotive-accent text-automotive-accent" />
                    <span>{content.rating}</span>
                  </div>
                </div>
                
                <Button variant="automotive" className="w-full">
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;