
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm glass-effect animate-fade-in">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Powered by AI • Built for teams</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up">
            Transform Your Team
            <span className="gradient-text block mt-2">Communication</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl animate-slide-up delay-200">
            Experience seamless collaboration with our intelligent chat platform. 
            Connect, communicate, and create together like never before.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up delay-300">
            <Button asChild size="lg" className="group relative overflow-hidden transition-all duration-300 hover:scale-105">
              <Link to="/chat">
                <MessageSquare className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Start Chatting
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="group transition-all duration-300 hover:scale-105">
              <span>Learn More</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in delay-500">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
