import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquare, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  Smartphone,
  Search,
  FileText,
  Video,
  Bell,
  Lock,
  Settings
} from "lucide-react"
import { Link } from "react-router-dom"

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Real-time Messaging",
      description: "Instant messaging with rich text formatting, emojis, and file attachments.",
      badge: "Core"
    },
    {
      icon: Users,
      title: "Team Channels",
      description: "Organize conversations by topic, project, or team with dedicated channels.",
      badge: "Core"
    },
    {
      icon: Video,
      title: "Video Calls",
      description: "High-quality video conferencing built right into your workspace.",
      badge: "Premium"
    },
    {
      icon: Search,
      title: "Powerful Search",
      description: "Find any message, file, or conversation instantly with advanced search.",
      badge: "Core"
    },
    {
      icon: FileText,
      title: "File Sharing",
      description: "Share documents, images, and files seamlessly with drag-and-drop support.",
      badge: "Core"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay informed with customizable notifications that work across all devices.",
      badge: "Core"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption and enterprise-grade security for your sensitive data.",
      badge: "Enterprise"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access your workspace from anywhere in the world with 99.9% uptime.",
      badge: "Core"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native mobile apps for iOS and Android with full feature parity.",
      badge: "Core"
    },
    {
      icon: Zap,
      title: "Integrations",
      description: "Connect with your favorite tools and automate workflows.",
      badge: "Premium"
    },
    {
      icon: Lock,
      title: "Advanced Permissions",
      description: "Granular control over who can access what in your organization.",
      badge: "Enterprise"
    },
    {
      icon: Settings,
      title: "Custom Workflows",
      description: "Build custom workflows and automations tailored to your team's needs.",
      badge: "Enterprise"
    }
  ]

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Core": return "default"
      case "Premium": return "secondary" 
      case "Enterprise": return "outline"
      default: return "default"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything your team needs to communicate, collaborate, and succeed. 
            From basic messaging to enterprise-grade security.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant={getBadgeVariant(feature.badge)}>
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Pricing Tiers */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for small teams</CardDescription>
                <div className="text-3xl font-bold mt-4">Free</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Up to 10 team members</li>
                  <li>• Core messaging features</li>
                  <li>• 5GB file storage</li>
                  <li>• Basic search</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-primary">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle>Premium</CardTitle>
                <CardDescription>For growing teams</CardDescription>
                <div className="text-3xl font-bold mt-4">$8<span className="text-lg font-normal">/user/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Unlimited team members</li>
                  <li>• Video calls & screen sharing</li>
                  <li>• 100GB file storage</li>
                  <li>• Advanced search</li>
                  <li>• Integrations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="text-3xl font-bold mt-4">Custom</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Everything in Premium</li>
                  <li>• Advanced security</li>
                  <li>• Custom workflows</li>
                  <li>• Dedicated support</li>
                  <li>• SSO & compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">Join thousands of teams already using ThemeSpark</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chat">
              <Button size="lg" className="group">
                Start Free Trial
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Features