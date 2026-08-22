import { useEffect, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { chatFaqs } from "@/data/content";

type Message = { from: "bot" | "user"; text: string; typed?: boolean };

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi, I'm Prathap's assistant. Choose a question to get a quick answer.",
      typed: true,
    },
  ]);
  const [typing, setTyping] = useState(false);

  const ask = (question: string, answer: string) => {
    setMessages((prev) => [...prev, { from: "user", text: question }]);
    setTyping(true);
    if (question === "Projects") {
      window.location.hash = "#projects";
    }
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: answer, typed: true }]);
      setTyping(false);
    }, 650);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="glass mb-3 flex h-[460px] w-[min(92vw,360px)] flex-col overflow-hidden rounded-3xl">
          <div className="flex items-center justify-between border-b border-white/20 px-4 py-3">
            <div>
              <p className="text-sm font-semibold">Portfolio Assistant</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Ask about Prathap</p>
            </div>
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={`${m.text}-${i}`}
                className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.from === "user"
                    ? "ml-auto bg-sky-600 text-white"
                    : "bg-white/70 text-slate-700 dark:bg-white/10 dark:text-slate-100"
                }`}
              >
                {m.typed && i === messages.length - 1 ? (
                  <TypedText text={m.text} />
                ) : m.from === "bot" && m.text.includes("prathap_reddy_resume") ? (
                  <span>
                    You can download the resume here:{" "}
                    <a className="underline" href="/prathap_reddy_resume.pdf" download>
                      Download Resume
                    </a>
                  </span>
                ) : (
                  m.text
                )}
              </div>
            ))}
            {typing ? (
              <div className="w-fit rounded-2xl bg-white/70 px-3 py-2 text-xs tracking-widest dark:bg-white/10">
                •••
              </div>
            ) : null}
          </div>
          <div className="grid gap-2 border-t border-white/20 p-3">
            {chatFaqs.map((faq) => (
              <button
                key={faq.question}
                type="button"
                className="flex items-center justify-between rounded-full bg-white/50 px-3 py-2 text-left text-xs font-medium dark:bg-white/5"
                onClick={() => ask(faq.question, faq.answer)}
              >
                {faq.question}
                <Send className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open assistant"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/30"
      >
        <MessageCircle />
      </button>
    </div>
  );
}

function TypedText({ text }: { text: string }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    setShown("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 12);
    return () => window.clearInterval(id);
  }, [text]);

  return <span>{shown}</span>;
}
