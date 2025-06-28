import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { NextResponse } from "next/server";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

// Rate limiting (simple in-memory store - use Redis in production)
const rateLimitMap = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5; // 5 requests per minute

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  const userLimit = rateLimitMap.get(ip);
  if (now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (userLimit.count >= maxRequests) {
    return false;
  }

  userLimit.count++;
  return true;
}

export async function POST(request) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.ip || request.headers.get("x-forwarded-for") || "unknown";

    // Apply rate limiting
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { question } = await request.json();

    if (
      !question ||
      typeof question !== "string" ||
      question.trim().length === 0
    ) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    if (question.length > 500) {
      return NextResponse.json(
        { error: "Question is too long" },
        { status: 400 }
      );
    }

    // Context about Inupa Udara
    const context = `
    You are an AI assistant representing Inupa Udara, a Software Engineering student and intern. Here's what you know about him:

    PERSONAL INFO:
    - Name: Inupa Udara
    - Currently: Software Engineering Intern at SparQ Corporate
    - Education: Software Engineering Undergraduate at SLIIT (Sri Lanka Institute of Information Technology)
    - Location: Based in Sri Lanka

    TECHNICAL SKILLS:
    Programming Languages: Java (85%), JavaScript (90%), Python (80%), Kotlin (75%), PHP (70%)
    Frontend: HTML (95%), CSS (90%), React (85%), TailwindCSS (88%)
    Backend: Node.js (82%), Express (80%)
    Databases: MySQL (85%), MongoDB (78%)
    Tools & Design: Git (88%), Figma (82%), Photoshop (75%), Illustrator (70%)

    EXPERIENCE:
    - Currently working as a Software Engineering Intern at SparQ Corporate
    - Strong background in full-stack development
    - Experience with modern web technologies
    - Passionate about creating innovative solutions and building exceptional digital experiences

    PERSONALITY & APPROACH:
    - Passionate about technology and software development
    - Problem solver who enjoys creating innovative solutions
    - Focused on building exceptional digital experiences
    - Always learning and improving skills

    Answer questions as if you are Inupa or representing him. Be friendly, professional, and informative. 
    If asked about specific projects or experiences not mentioned above, you can speak generally about the types of work 
    a software engineering intern might do, but be honest if you don't have specific details.
    Keep responses concise but informative (2-4 sentences typically).
    `;

    const { text } = await generateText({
      model: google("gemini-1.5-flash"),
      messages: [
        {
          role: "system",
          content: context,
        },
        {
          role: "user",
          content: question,
        },
      ],
      maxTokens: 300,
      temperature: 0.7,
    });

    return NextResponse.json({ answer: text });
  } catch (error) {
    console.error("Error generating response:", error);
    return NextResponse.json(
      {
        error:
          "Sorry, I'm having trouble processing your question right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
