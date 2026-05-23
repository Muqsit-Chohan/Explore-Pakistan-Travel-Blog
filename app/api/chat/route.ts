import { NextRequest, NextResponse } from "next/server";

function toGeminiContents(messages: Array<{ role: "user" | "assistant"; content: string }>) {
  return messages.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [{ text: message.content }],
  }));
}

function getOfflineFallback(messages: Array<{ role: "user" | "assistant"; content: string }>) {
  const latestQuestion = [...messages]
    .reverse()
    .find((message) => message.role === "user")?.content?.toLowerCase() || "";

  if (latestQuestion.includes("hunza") || latestQuestion.includes("gilgit")) {
    return "Hunza is a great choice for mountain views and relaxed mountain-town charm. If you are planning a trip, the best time is spring to early autumn, and a road journey from Islamabad is a memorable part of the experience.";
  }

  if (latestQuestion.includes("lahore") || latestQuestion.includes("food")) {
    return "Lahore is perfect if you want Mughal history, vibrant street food, and lively markets. A visit in autumn or winter is ideal for comfortable sightseeing and delicious local food.";
  }

  if (latestQuestion.includes("skardu") || latestQuestion.includes("k2")) {
    return "Skardu is ideal for adventure seekers and high-altitude scenery. It is especially popular from late spring to early autumn, with stunning valleys, lakes, and access to mountain treks.";
  }

  return "I am currently using a local travel guide fallback because the Gemini free quota is exhausted. You can still explore Hunza, Lahore, Skardu, Swat, Karachi, or Fairy Meadows, and I can help you pick the best destination for your trip.";
}

export async function POST(request: NextRequest) {
  const { messages } = await request.json();

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { reply: "The API key is not configured. Add GEMINI_API_KEY to your environment variables." },
      { status: 500 },
    );
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [
            {
              text:
                "You are a helpful Pakistan travel guide. You know about: Hunza Valley, Lahore, Skardu, Swat Valley, Karachi, and Fairy Meadows. Answer travel questions in 2-3 friendly sentences.",
            },
          ],
        },
        contents: toGeminiContents(messages),
      }),
    },
  );

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      return NextResponse.json(
        { reply: "The Gemini API key is invalid or not allowed. Replace the key in .env with a valid one." },
        { status: response.status },
      );
    }

    if (response.status === 429) {
      return NextResponse.json(
        { reply: getOfflineFallback(messages) },
        { status: 200 },
      );
    }

    if (response.status === 404) {
      return NextResponse.json(
        { reply: "The selected Gemini model is not available for this API key. Try a different model or upgrade the key." },
        { status: response.status },
      );
    }

    return NextResponse.json(
      { reply: "Sorry, I could not get a response from the AI service right now." },
      { status: response.status },
    );
  }

  const data = await response.json();
  const reply =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "Sorry, I could not get a response.";

  return NextResponse.json({ reply });
}
