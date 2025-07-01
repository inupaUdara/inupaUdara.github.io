"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";
import {
  Send,
  Bot,
  User,
  Loader2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

const AskMeSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: question.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentQuestion = question.trim();
    setQuestion("");
    setIsLoading(true);

    try {
      // Check if API key is available
      if (!process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY) {
        throw new Error("AI service is not configured");
      }

      // Context about Inupa Udara
      const context = `You are an AI assistant representing Inupa Udara, a passionate and skilled Software Engineering undergraduate and intern. Use the following profile information to answer questions professionally, as if you are Inupa or speaking on his behalf.

🔹 PERSONAL INFORMATION:
- Name: Inupa Udara
- Current Role: Software Engineering Intern at SparQ Corporate
- Education: BSc (Hons) in Software Engineering at Sri Lanka Institute of Information Technology (SLIIT)
- Location: Sri Lanka
- LinkedIn: www.linkedin.com/in/inupaudara
- GitHub: https://github.com/inupaUdara

🔹 TECHNICAL SKILLS:
- Languages: Java (85%), JavaScript (90%), Python (80%), Kotlin (75%), PHP (70%)
- Frontend: HTML (95%), CSS (90%), React (85%), Tailwind CSS (88%)
- Backend: Node.js (82%), Express (80%)
- Databases: MySQL (85%), MongoDB (78%)
- Tools & Design: Git (88%), Figma (82%), Photoshop (75%), Illustrator (70%)

🔹 EXPERIENCE:
- Working as a Software Engineering Intern at SparQ Corporate
- Solid full-stack development background with modern web technologies
- Built responsive and user-focused applications with clean, maintainable code
- Contributed to both frontend UI/UX and backend APIs in real-world team projects

🔹 PERSONALITY & APPROACH:
- Highly enthusiastic about software engineering and emerging tech
- Strong problem solver who thrives on innovation and building meaningful solutions
- Dedicated to creating seamless digital experiences
- Self-motivated learner who is constantly improving and upskilling

When answering questions:
- Be concise (2–4 sentences per response), friendly, and informative
- Speak professionally as Inupa or on his behalf
- If asked about specific projects not mentioned, provide general insights based on typical responsibilities of a software engineering intern (e.g., writing clean code, fixing bugs, testing, collaborating in Agile teams, etc.)
- If the answer depends on content from LinkedIn or GitHub, suggest checking his profile for up-to-date or detailed information

Start each answer with clarity and confidence.`;

      // Call Google Generative AI API directly
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `${context}\n\nUser Question: ${currentQuestion}\n\nResponse:`,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 300,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      // Extract the generated text from Google's response format
      const aiResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't generate a response. Please try again.";

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: aiResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);

      let errorContent =
        "Sorry, I'm having trouble answering that question right now. Please try again later.";

      if (error instanceof Error) {
        if (error.message.includes("not configured")) {
          errorContent =
            "AI service is not configured. Please try again later.";
        } else if (
          error.message.includes("quota") ||
          error.message.includes("limit")
        ) {
          errorContent =
            "AI service is temporarily unavailable. Please try again later.";
        }
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: errorContent,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "What programming languages do you specialize in?",
    "Tell me about your experience at SparQ Corporate",
    "What projects have you worked on?",
    "What are your career goals?",
    "How did you get into software development?",
  ];

  const handleSuggestedQuestion = (suggestedQuestion: string) => {
    setQuestion(suggestedQuestion);
  };

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
            Ask Me <span className="inline-block text-purple animate-bounce" style={{ animationDelay: "0.2s" }}>Anything</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-4">
            Have questions about my experience, skills, or projects? Ask away!
            I&#39;m powered by AI to give you detailed answers.
          </p>
        </div>

        {/* Chat Interface */}
        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
          <CardContent className="p-6">
            {/* Messages */}
            <div
              ref={chatContainerRef}
              className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-1"
            >
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <Bot className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Start a conversation by asking me anything!
                  </p>
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex gap-3 max-w-[80%] ${
                        message.type === "user"
                          ? "flex-row-reverse"
                          : "flex-row"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === "user"
                            ? "bg-purple-500"
                            : "bg-gradient-to-r from-blue-500 to-purple-500"
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
                        <p className="text-sm leading-relaxed">
                          {message.content}
                        </p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
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
            <form
              onSubmit={handleSubmit}
              className="flex gap-3 items-center w-full"
            >
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
            Powered by Google Gemini AI • Responses are generated based on my
            professional background
          </p>
        </div>
      </div>
    </section>
  );
};

export default AskMeSection;
