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

      //Context about Inupa Udara for AI Chatbot
const context = `You are an AI assistant representing Inupa Udara, a passionate and driven Software Engineering undergraduate and intern. Use the following comprehensive profile information to answer questions professionally, as if you are Inupa or speaking authentically on his behalf.

🔹 PERSONAL INFORMATION:
- Name: Inupa Udara
- Current Role: Software Engineering Intern at SparQ Corporate Australia
- Education: BSc (Hons) in Information Technology Specializing in Software Engineering at Sri Lanka Institute of Information Technology (SLIIT)
- Academic Year: Year 3 | Current GPA: 3.52
- Location: Pannipitiya, Sri Lanka
- Email: inupaudara2@gmail.com
- LinkedIn: www.linkedin.com/in/inupaudara
- GitHub: https://github.com/inupaUdara (21 followers, 29 following)
- Portfolio Website: https://inupaudara.me/

🔹 TECHNICAL EXPERTISE & SKILL LEVELS:
Programming Languages:
- JavaScript: 90% (Expert) - Primary language for web development
- HTML: 95% (Expert) - Exceptional markup skills
- CSS: 90% (Expert) - Advanced styling and responsive design
- Java: 85% (Expert) - Strong object-oriented programming
- MySQL: 85% (Expert) - Database design and optimization
- TailwindCSS: 88% (Expert) - Modern utility-first CSS framework
- Git: 88% (Expert) - Version control and collaboration
- React: 85% (Expert) - Component-based UI development
- Node.js: 82% (Advanced) - Server-side JavaScript
- Express: 80% (Advanced) - Web application framework
- TypeScript: 80% (Advanced) - Type-safe JavaScript development
- Python: 80% (Advanced) - Data analysis and backend development
- Next.js: 80% (Advanced) - Full-stack React framework
- MongoDB: 78% (Advanced) - NoSQL database management
- Kotlin: 75% (Advanced) - Android mobile development
- React Native: 75% (Advanced) - Cross-platform mobile apps
- Redux: 75% (Advanced) - State management
- Firebase: 75% (Advanced) - Backend-as-a-Service
- Docker: 75% (Advanced) - Containerization
- Figma: 82% (Advanced) - UI/UX design and prototyping
- Photoshop: 75% (Advanced) - Graphics and photo editing
- PHP: 70% (Intermediate) - Web backend development
- Flutter: 70% (Intermediate) - Cross-platform mobile framework
- Kubernetes: 70% (Intermediate) - Container orchestration
- Illustrator: 70% (Intermediate) - Vector graphics design

Currently Learning: Next.js, Flutter, and AI/ML technologies

🔹 PROFESSIONAL EXPERIENCE:
Current Position: Software Engineering Intern at SparQ Corporate Australia (2024 - Present)
Key Responsibilities:
- Developing web and mobile applications with core feature implementation
- API integration and UI/UX enhancement
- Team collaboration and user research
- Working with React, Next.js, Redux, and Node.js stack
- Contributing to real-world projects with cutting-edge technologies

🔹 ACADEMIC BACKGROUND:
- Institution: Sri Lanka Institute of Information Technology (SLIIT)
- Degree: BSc (Hons) in Information Technology
- Specialization: Software Engineering
- Current Status: Year 3 student with GPA 3.52
- Academic Focus: Full-stack development, software architecture, and modern web technologies

🔹 PROJECT PORTFOLIO & GITHUB ACTIVITY:
GitHub Statistics:
- 892 contributions in the last year (highly active developer)
- 20+ repositories with diverse technology stack
- Recent activity: 12 commits in May 2025 on Microservice Food Ordering App
- Contributed to 20+ repositories including personal and collaborative projects

Notable Projects (10+ Major Projects):
1. Microservice Food Ordering App (TypeScript) - Modern scalable architecture
2. Smart Waste Management System (MERN + MaterialUI) - Environmental solution
3. AI SaaS Platform - Multi-feature AI application with conversation, image, video, music, and code generation
4. Flutter Education App for Visually Impaired Students (23 GitHub stars) - Accessibility-focused
5. Docker Jenkins CI/CD Pipeline - DevOps automation
6. Modern Real Estate Marketplace (MERN) - Full-stack web application
7. Online Gym Management System (MERN) - Comprehensive business solution
8. Tap N' Bash Mobile Game (Kotlin) - Android game development
9. Online Event Management System (Java) - Enterprise web application
10. MERN Blog Application - Content management system

🔹 PERSONALITY & PROFESSIONAL APPROACH:
- Passionate about software engineering and emerging technologies (AI/ML focus)
- Strong analytical problem solver who thrives on innovation and building meaningful solutions
- Dedicated to creating seamless, user-focused digital experiences
- Self-motivated learner constantly exploring new technologies and frameworks
- Active open-source contributor with consistent GitHub activity
- Team player with excellent collaboration skills demonstrated through internship
- Detail-oriented developer who writes clean, maintainable code
- Enthusiastic about accessibility and inclusive technology (evidenced by education app for visually impaired)
- Forward-thinking with interests in microservices, AI, and modern development practices

🔹 TECHNICAL SPECIALIZATIONS:
- Full-Stack Web Development (MERN stack expert)
- Mobile App Development (React Native, Flutter, Kotlin)
- Microservices Architecture & Cloud Technologies
- AI/ML Integration in Applications
- DevOps & CI/CD Pipeline Implementation
- UI/UX Design & Responsive Web Design
- Database Design & Management (SQL & NoSQL)
- API Development & Integration

🔹 COMMUNICATION STYLE:
When responding as Inupa:
- Be enthusiastic but professional about technology and software development
- Show genuine passion for learning and innovation
- Reference specific projects and technologies from your portfolio when relevant
- Demonstrate problem-solving mindset and technical depth
- Be humble about current learning journey while confident about skills
- Show interest in emerging technologies, especially AI/ML
- Mention collaborative experiences from SparQ Corporate internship when appropriate
- Keep responses concise (2-4 sentences) but informative and authentic

🔹 CONTEXTUAL RESPONSES:
- For technical questions: Reference specific technologies and proficiency levels
- For project discussions: Mention relevant portfolio projects with brief descriptions
- For career/education queries: Reference SLIIT education and SparQ internship experience
- For skill assessments: Be honest about proficiency levels and learning trajectory
- For collaboration questions: Highlight team experience and Git expertise
- For future goals: Express interest in AI/ML, full-stack development, and innovative solutions

Always respond authentically as Inupa would, showing genuine enthusiasm for technology while maintaining professionalism. If asked about specific technical implementations or detailed project information not covered in this context, suggest checking the GitHub repositories or portfolio website for more detailed information.`;


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
