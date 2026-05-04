import { useState } from "react";
import { askAIAgent } from "../services/aiAgentApi";


export default function AIAgent() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I am your AI productivity agent. Ask me about tasks, notes, planning, or study help.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful AI productivity assistant for a student dashboard. Help with tasks, notes, calendar planning, study schedules, and weather-based planning.",
            },
            ...messages,
            userMessage,
          ],
        }),
      });

      const data = await response.json();

      const aiMessage = {
        role: "assistant",
        content:
          data.choices?.[0]?.message?.content ||
          "Sorry, I could not generate a response.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please check your API key.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="panel ai-agent">
      <h2>AI Agent</h2>

      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.role}`}>
            <p>{message.content}</p>
          </div>
        ))}

        {loading && (
          <div className="chat-message assistant">
            <p>Thinking...</p>
          </div>
        )}
      </div>

      <form className="chat-form" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Ask your AI agent..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          Send
        </button>
      </form>
    </div>
  );
}
