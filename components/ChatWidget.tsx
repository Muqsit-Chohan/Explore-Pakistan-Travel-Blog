"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

type ThemeMode = "light" | "dark";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm your Pakistan travel guide. Ask me anything about Hunza, Lahore, Skardu, or any destination!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTheme = () => {
      const nextTheme = document.body.getAttribute("data-theme") === "light" ? "light" : "dark";
      setTheme(nextTheme);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const isLight = theme === "light";

  const sendMessage = async () => {
    if (!input.trim() || loading) {
      return;
    }

    const userMessage: Message = { role: "user", content: input };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await response.json();
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.reply || "Sorry, I could not get a response." },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: "Oops! Something went wrong. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        layout
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen((current) => !current)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_20px_60px_rgba(16,185,129,0.35)]"
        aria-label="Open chat"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className={`fixed bottom-24 right-6 z-50 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-[1.5rem] border shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur ${
              isLight
                ? "border-slate-200 bg-white/95"
                : "border-white/10 bg-slate-950/95"
            }`}
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              <span className="text-sm font-semibold text-slate-950">Pakistan Travel Guide</span>
            </div>

            <div
              className={`max-h-72 space-y-3 overflow-y-auto p-4 ${
                isLight ? "bg-white" : "bg-slate-950"
              }`}
            >
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-6 ${
                      message.role === "user"
                        ? "bg-emerald-500 text-white"
                        : isLight
                          ? "bg-slate-100 text-slate-800"
                          : "bg-slate-800 text-slate-100"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div
                    className={`flex gap-1 rounded-2xl rounded-bl-sm px-4 py-3 ${
                      isLight ? "bg-slate-100" : "bg-slate-800"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 animate-bounce rounded-full ${
                        isLight ? "bg-slate-400" : "bg-slate-300"
                      }`}
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className={`h-2 w-2 animate-bounce rounded-full ${
                        isLight ? "bg-slate-400" : "bg-slate-300"
                      }`}
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className={`h-2 w-2 animate-bounce rounded-full ${
                        isLight ? "bg-slate-400" : "bg-slate-300"
                      }`}
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div
              className={`border-t p-3 ${
                isLight ? "border-slate-200 bg-white" : "border-white/10 bg-slate-950"
              }`}
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => event.key === "Enter" && sendMessage()}
                  placeholder="Ask about Pakistan..."
                  className={`w-full rounded-xl border px-3 py-2 text-sm focus:border-emerald-400 focus:outline-none ${
                    isLight
                      ? "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400"
                      : "border-white/10 bg-slate-900 text-white placeholder:text-slate-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={loading}
                  className="rounded-xl bg-emerald-500 px-3 py-2 text-white transition hover:bg-emerald-400 disabled:opacity-60"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
