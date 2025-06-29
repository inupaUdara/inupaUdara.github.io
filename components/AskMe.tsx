"use client"

import type React from "react"

import { useState } from "react"
import axios from "axios"
import { Input } from "@/components/ui/Input"
import { Card, CardContent } from "@/components/ui/Card"
import { Send, Bot, User, Loader2, MessageCircle, Sparkles } from "lucide-react"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
}

const AskMeSection = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [question, setQuestion] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!question.trim() || isLoading) return

  const userMessage: Message = {
    id: Date.now().toString(),
    type: "user",
    content: question.trim(),
    timestamp: new Date(),
  }

  setMessages((prev) => [...prev, userMessage])
  setQuestion("")
  setIsLoading(true)

  try {
    const response = await axios.post("/api/ask-question", {
      question: question.trim()
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    })

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "ai",
      content: response.data.answer,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, aiMessage])
  } catch (error) {
    console.error('Error:', error)
    const errorMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "ai",
      content: "Sorry, I'm having trouble answering that question right now. Please try again later.",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, errorMessage])
  } finally {
    setIsLoading(false)
  }
}

  const suggestedQuestions = [
    "What programming languages do you specialize in?",
    "Tell me about your experience at SparQ Corporate",
    "What projects have you worked on?",
    "What are your career goals?",
    "How did you get into software development?",
  ]

  const handleSuggestedQuestion = (suggestedQuestion: string) => {
    setQuestion(suggestedQuestion)
  }

  return (
    <section className="py-20 px-4 bg-gray-950" id="ask-me">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="w-8 h-8 text-purple-400" />
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
          <h2 className="heading">
            Ask Me{" "}
            <span className="text-purple">Anything</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-4">
            Have questions about my experience, skills, or projects? Ask away! I&#39;m powered by AI to give you detailed
            answers.
          </p>
        </div>

        {/* Chat Interface */}
        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
          <CardContent className="p-6">
            {/* Messages */}
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <Bot className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500">Start a conversation by asking me anything!</p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex gap-3 max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === "user" ? "bg-purple-500" : "bg-gradient-to-r from-blue-500 to-purple-500"
                        }`}
                      >
                        {message.type === "user" ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          message.type === "user"
                            ? "bg-purple-500 text-white"
                            : "bg-gray-800 text-gray-100 border border-gray-700"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                      <span className="text-gray-400 text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Suggested Questions */}
            {messages.length === 0 && (
              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-3">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((suggestedQuestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(suggestedQuestion)}
                      className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-full border border-gray-700 transition-colors duration-200"
                    >
                      {suggestedQuestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex gap-3 items-center w-full">
              <div className="flex-1">
                <Input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask me anything about my experience, skills, or projects..."
                  className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                  disabled={isLoading}
                />
              </div>
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  disabled={!question.trim() || isLoading}
                  className="inline-flex items-center border justify-center gap-2 px-6 py-2 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-md transition-all duration-200"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Info */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Powered by Google Gemini AI • Responses are generated based on my professional background
          </p>
        </div>
      </div>
    </section>
  )
}

export default AskMeSection
