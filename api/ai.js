import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: "Explain photosynthesis in simple words",
    });

    res.status(200).json({
      result: response.output_text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI request failed" });
  }
}
