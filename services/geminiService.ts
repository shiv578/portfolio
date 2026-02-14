
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant of Shivam Swaraj, a world-class Full-Stack Developer and AI Enthusiast.
Your goal is to answer questions about Shivam's career, education, skills, and projects based on the following profile:

SHIVAM SWARAJ PROFILE:
- Current: BTech CSE at Lovely Professional University (LPU), 3rd Sem, 8.1 CGPA.
- Past: Diploma in Mechatronics from MSME-GOI Tool Room (70.93%), Matriculation from CCDS Patna (76.6%).
- Identity: From hardware (Mechatronics) to software (CSE Architect).
- Skills: C++ (5★ HackerRank), Python (AI/ML Certified), Node.js (Elite), PHP (Advanced), Cloud (NPTEL Elite).
- Key Projects:
  1. Fit Nation: AI Health Dashboard (React, Node, Google Fit API).
  2. Property Management System: Secure PHP/MySQL platform with 15+ tables.
- Achievements: 200+ DSA problems solved, 111-day streak, 1,542 LeetCode contest rating.
- Tone: Professional, futuristic, confident, and tech-savvy.

Answer concisely and showcase his transformation from mechatronics to software architect. If asked for something not in the profile, politely state you don't have that information.
`;

export async function chatWithShivamAI(message: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm having trouble processing that right now. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The neural link is temporarily down. Please try again later.";
  }
}
