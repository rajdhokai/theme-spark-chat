
import { ChatSidebar } from "@/components/ChatSidebar"
import { ChatMessage } from "@/components/ChatMessage"
import { ChatInput } from "@/components/ChatInput"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Hash, Users, Phone, Video, MoreHorizontal } from "lucide-react"
import { useState } from "react"

interface Message {
  id: number
  message: string
  isUser: boolean
  timestamp: string
  username?: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    message: "Hey everyone! Welcome to the general channel 👋",
    isUser: false,
    timestamp: "10:30 AM",
    username: "John Doe"
  },
  {
    id: 2,
    message: "Thanks for the warm welcome! Excited to be here.",
    isUser: true,
    timestamp: "10:32 AM"
  },
  {
    id: 3,
    message: "Has anyone tried the new feature we released yesterday?",
    isUser: false,
    timestamp: "10:35 AM",
    username: "Jane Smith"
  },
  {
    id: 4,
    message: "Yes! It's amazing. The new interface is so much cleaner.",
    isUser: true,
    timestamp: "10:37 AM"
  },
]

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages)

  const handleSendMessage = (messageText: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      message: messageText,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages([...messages, newMessage])

    // Simulate a response after a short delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        message: "That's a great point! Thanks for sharing your thoughts.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        username: "AI Assistant"
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <ChatSidebar />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="border-b bg-background/50 backdrop-blur-sm p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Hash className="h-5 w-5 text-muted-foreground" />
              <div>
                <h2 className="font-semibold text-lg">general</h2>
                <p className="text-sm text-muted-foreground">42 members</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="transition-colors hover:bg-muted">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="transition-colors hover:bg-muted">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="transition-colors hover:bg-muted">
                <Users className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="transition-colors hover:bg-muted">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-6 max-w-4xl mx-auto">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.message}
                isUser={message.isUser}
                timestamp={message.timestamp}
                username={message.username}
              />
            ))}
          </div>
        </ScrollArea>

        {/* Chat Input */}
        <ChatInput 
          onSendMessage={handleSendMessage}
          placeholder="Message #general"
        />
      </div>
    </div>
  );
};

export default Chat;
