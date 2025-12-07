import { GoogleGenAI, Type } from "@google/genai";
import { CringeAnalysisResult } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize the client. Note: If no API key is present, calls will fail safely in the UI.
const ai = new GoogleGenAI({ apiKey });

export const analyzeCringeLevel = async (scenario: string): Promise<CringeAnalysisResult> => {
  if (!apiKey) {
    // Mock response for preview/no-key environments
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          score: 85,
          verdict: "CERTIFIED CRINGE",
          comment: "I haven't seen something this painful since 2018 musically trends. Please stop."
        });
      }, 1500);
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are 'The Cringe React' cat. You are a famous TikTok meme known for judging cringe videos with a disappointed face. 
      Analyze the following user scenario and rate how cringe it is from 0 to 100.
      
      User Scenario: "${scenario}"
      
      Return JSON only.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER, description: "Cringe score from 0-100" },
            verdict: { type: Type.STRING, description: "Short 2-3 word verdict (e.g. MEGA CRINGE, BASED, ACCEPTABLE)" },
            comment: { type: Type.STRING, description: "A funny, sarcastic, biting comment from the perspective of a disappointed cat." }
          },
          required: ["score", "verdict", "comment"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text");
    
    return JSON.parse(text) as CringeAnalysisResult;

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback on error
    return {
      score: 99,
      verdict: "API ERROR (CRINGE)",
      comment: "My judgement circuits are fried by the sheer audacity of this request (or the API failed)."
    };
  }
};