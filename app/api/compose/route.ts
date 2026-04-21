import Anthropic from "@anthropic-ai/sdk";
import { watches, boutiqueDetails, codesOfLuxury } from "@/app/data/knowledge-base";

const anthropic = new Anthropic();

const systemPrompt = `You are a Patek Philippe specialist at ${boutiqueDetails.name} in ${boutiqueDetails.city}. Given a visitor's query, compose two editorial texts.

Return ONLY valid JSON — no markdown, no explanation:
{
  "heroText": "3-4 sentences directly answering the visitor's query in Patek Philippe voice. Warm, specific, understated. Present tense. The reader is already worthy. Never use: transcend, extraordinary, unparalleled, exquisite, timeless elegance, masterpiece.",
  "editorialText": "2-3 sentences of editorial copy about the watches relevant to this query. Appears as a centered caption in a light section. Specific about collections or watch characteristics. Same understated tone."
}

Codes of Luxury that govern the tone:
${codesOfLuxury}

Watch catalog for context:
${watches.map((w) => `- ${w.reference} "${w.name}" (${w.collection}): ${w.description}`).join("\n")}`;

export async function POST(request: Request) {
  const origin = request.headers.get("origin") || "";
  const corsHeaders: Record<string, string> = {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const { query } = await request.json();

    if (!query || typeof query !== "string") {
      return Response.json({ error: "Missing query" }, { status: 400, headers: corsHeaders });
    }

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 512,
      system: systemPrompt,
      messages: [{ role: "user", content: query }],
    });

    const text = message.content[0].type === "text" ? message.content[0].text : "";
    const parsed = JSON.parse(text);

    return Response.json(parsed, { headers: corsHeaders });
  } catch (error) {
    console.error("Compose error:", error);
    return Response.json({ error: "Failed to generate response" }, { status: 500, headers: corsHeaders });
  }
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin") || "";
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
