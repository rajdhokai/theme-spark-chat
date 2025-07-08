
interface ChatMessageProps {
  message: string
  isUser: boolean
  timestamp: string
  avatar?: string
  username?: string
}

export function ChatMessage({ message, isUser, timestamp, avatar, username }: ChatMessageProps) {
  return (
    <div className={`flex gap-4 ${isUser ? 'flex-row-reverse' : 'flex-row'} animate-fade-in`}>
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          {avatar ? (
            <img src={avatar} alt={username} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-sm font-medium text-primary">
              {isUser ? 'Y' : (username?.[0] || 'U')}
            </span>
          )}
        </div>
      </div>

      {/* Message content */}
      <div className={`max-w-[70%] space-y-1 ${isUser ? 'items-end' : 'items-start'} flex flex-col`}>
        {!isUser && username && (
          <span className="text-xs font-medium text-muted-foreground">{username}</span>
        )}
        
        <div
          className={`px-4 py-2 rounded-2xl transition-all duration-200 hover:scale-105 ${
            isUser
              ? 'bg-primary text-primary-foreground rounded-br-sm'
              : 'glass-effect rounded-bl-sm'
          }`}
        >
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        
        <span className="text-xs text-muted-foreground">{timestamp}</span>
      </div>
    </div>
  )
}
