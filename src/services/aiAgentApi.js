export async function askAIAgent(messages) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OpenAI API key is missing. Add VITE_OPENAI_API_KEY in .env");
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI productivity assistant for a student dashboard. Help with tasks, notes, calendar planning, study schedules, and productivity advice.",
        },
        ...messages,
      ],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "AI request failed");
  }

  return data.choices[0].message.content;
}
