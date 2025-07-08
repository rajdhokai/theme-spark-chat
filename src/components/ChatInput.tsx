
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Paperclip, Smile } from "lucide-react"
import { useState } from "react"

interface ChatInputProps {
  onSendMessage: (message: string) => void
  placeholder?: string
}

export function ChatInput({ onSendMessage, placeholder = "Type a message..." }: ChatInputProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage("")
    }
  }

  return (
    <div className="border-t bg-background/50 backdrop-blur-sm p-4">
      <form onSubmit={handleSubmit} className="flex items-end space-x-3">
        {/* Attachment button */}
        <Button type="button" variant="ghost" size="icon" className="shrink-0 transition-colors hover:bg-muted">
          <Paperclip className="h-5 w-5" />
        </Button>

        {/* Message input container */}
        <div className="flex-1 relative">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={placeholder}
            className="pr-12 min-h-[44px] resize-none transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                handleSubmit(e)
              }
            }}
          />
          
          {/* Emoji button */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 hover:bg-muted"
          >
            <Smile className="h-4 w-4" />
          </Button>
        </div>

        {/* Send button */}
        <Button 
          type="submit" 
          size="icon" 
          disabled={!message.trim()}
          className="shrink-0 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  )
}
