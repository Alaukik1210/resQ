import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";


const api = process.env.GEMENI_API_KEY

const genAI = new GoogleGenerativeAI(api);

export async function POST(request: Request) {
  try {
    const { image } = await request.json();
    const base64Data = image.includes(",") ? image.split(",")[1] : image;

    const mimeType = image.startsWith("data:image/png")
      ? "image/png"
      : "image/jpeg";

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Analyze this emergency situation image and respond in this exact format without any asterisks or bullet points:
TITLE: Write a clear, brief title
TYPE: Choose one (Theft, Fire Outbreak, Medical Emergency, Natural Disaster, Violence, or Other)
DESCRIPTION: Write a clear, concise description`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64Data,
          mimeType,
        },
      },
    ]);

    const text = result.response.text();

    const titleMatch = text.match(/TITLE:\s*(.+?)(?=\n|$)/);
    const typeMatch = text.match(/TYPE:\s*(.+?)(?=\n|$)/);
    const descMatch = text.match(/DESCRIPTION:\s*([\s\S]+)/);

    return NextResponse.json({
      title: titleMatch?.[1]?.trim() || "",
      reportType: typeMatch?.[1]?.trim() || "",
      description: descMatch?.[1]?.trim() || "",
    });
  } catch (error) {
    console.error("Image analysis error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to analyze image" },
      { status: 500 }
    );
  }
}
