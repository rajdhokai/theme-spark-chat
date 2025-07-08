
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { 
  Hash, 
  Plus, 
  Search, 
  Users, 
  MessageSquare, 
  Settings,
  Home,
  ChevronDown
} from "lucide-react"
import { Link } from "react-router-dom"
import { ThemeToggle } from "./ThemeToggle"

const channels = [
  { id: 1, name: "general", unread: 3, type: "public" },
  { id: 2, name: "random", unread: 0, type: "public" },
  { id: 3, name: "development", unread: 7, type: "public" },
  { id: 4, name: "design", unread: 1, type: "public" },
]

const directMessages = [
  { id: 1, name: "John Doe", status: "online", unread: 2 },
  { id: 2, name: "Jane Smith", status: "away", unread: 0 },
  { id: 3, name: "Mike Johnson", status: "offline", unread: 1 },
]

export function ChatSidebar() {
  return (
    <div className="w-64 bg-sidebar border-r flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-sidebar-foreground">ThemeSpark</span>
          </Link>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search messages..."
            className="pl-9 h-8 text-sm bg-sidebar-accent/50 border-sidebar-border"
          />
        </div>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-4">
        <div className="space-y-6 py-4">
          {/* Quick Actions */}
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start h-8 text-sidebar-foreground hover:bg-sidebar-accent">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start h-8 text-sidebar-foreground hover:bg-sidebar-accent">
              <MessageSquare className="mr-2 h-4 w-4" />
              All Messages
            </Button>
          </div>

          <Separator className="bg-sidebar-border" />

          {/* Channels */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">
                Channels
              </h3>
              <Button variant="ghost" size="icon" className="h-4 w-4 text-sidebar-foreground/50 hover:text-sidebar-foreground">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            <div className="space-y-1">
              {channels.map((channel) => (
                <Button
                  key={channel.id}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between h-7 px-2 text-sidebar-foreground hover:bg-sidebar-accent group"
                >
                  <div className="flex items-center">
                    <Hash className="mr-2 h-3 w-3 text-sidebar-foreground/50" />
                    <span className="text-sm">{channel.name}</span>
                  </div>
                  {channel.unread > 0 && (
                    <span className="bg-primary text-primary-foreground text-xs rounded-full px-1.5 py-0.5 min-w-[18px] h-4 flex items-center justify-center">
                      {channel.unread}
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>

          <Separator className="bg-sidebar-border" />

          {/* Direct Messages */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">
                Direct Messages
              </h3>
              <Button variant="ghost" size="icon" className="h-4 w-4 text-sidebar-foreground/50 hover:text-sidebar-foreground">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            <div className="space-y-1">
              {directMessages.map((dm) => (
                <Button
                  key={dm.id}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between h-7 px-2 text-sidebar-foreground hover:bg-sidebar-accent"
                >
                  <div className="flex items-center">
                    <div className={`mr-2 w-2 h-2 rounded-full ${
                      dm.status === 'online' ? 'bg-green-500' : 
                      dm.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                    }`} />
                    <span className="text-sm">{dm.name}</span>
                  </div>
                  {dm.unread > 0 && (
                    <span className="bg-primary text-primary-foreground text-xs rounded-full px-1.5 py-0.5 min-w-[18px] h-4 flex items-center justify-center">
                      {dm.unread}
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs font-medium text-primary-foreground">Y</span>
            </div>
            <span className="text-sm font-medium text-sidebar-foreground">You</span>
          </div>
          <div className="flex items-center space-x-1">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="h-6 w-6 text-sidebar-foreground/50 hover:text-sidebar-foreground">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
