
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Shield, Zap, Users, Globe, Sparkles } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Real-time Messaging",
    description: "Instant communication with lightning-fast message delivery and seamless synchronization across all devices."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and advanced security features to keep your conversations private and secure."
  },
  {
    icon: Zap,
    title: "AI-Powered Features",
    description: "Smart suggestions, automated responses, and intelligent content organization powered by advanced AI."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for teams with advanced collaboration tools, file sharing, and project management features."
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Available worldwide with multi-language support and optimized performance across all regions."
  },
  {
    icon: Sparkles,
    title: "Custom Integrations",
    description: "Connect with your favorite tools and services through our extensive API and integration marketplace."
  }
]

export function FeatureSection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Discover the features that make our chat platform the perfect choice for modern teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in border-0 glass-effect"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
