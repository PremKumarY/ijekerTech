import React, { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X, CheckCircle, AlertCircle } from "lucide-react";

const API_URL =
  (import.meta.env?.VITE_BACKEND_URL || "https://chatbot-api-7hjs.onrender.com") +
  "/api/chat";
const LEAD_URL =
  (import.meta.env?.VITE_BACKEND_URL || "https://chatbot-api-7hjs.onrender.com") +
  "/api/leads";



function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [unread, setUnread] = useState(0);
  const [typing, setTyping] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [suggestions, setSuggestions] = useState([
    "about ijekerTech",
    "ijekerTech services",
    "courses ",
    "what can this chatbot answer?"
  ]);

  const [awaitingLead, setAwaitingLead] = useState(false);
  const [leadValue, setLeadValue] = useState("");
  const [leadValid, setLeadValid] = useState(null);

  const endRef = useRef(null);
  const inputRef = useRef(null);

  const [position, setPosition] = useState({ bottom: 24, right: 24 });
  const dragRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  const abortControllerRef = useRef(null);

  useEffect(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), [messages, typing]);

  // Draggable
  const handleMouseDown = (e) => {
    isDragging.current = true;
    offset.current = { x: e.clientX, y: e.clientY };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = offset.current.x - e.clientX;
    const dy = offset.current.y - e.clientY;
    offset.current = { x: e.clientX, y: e.clientY };
    setPosition((prev) => ({
      bottom: Math.max(prev.bottom + dy, 0),
      right: Math.max(prev.right + dx, 0),
    }));
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const openChat = () => {
    setIsOpen(true);
    setUnread(0);
    setError("");
    setMessages([
      {
        id: crypto.randomUUID(),
        from: "bot",
        text: "Hello Sir! Welcome to ijekerTech! 🎉 Please provide your email or phone so we can assist you better.",
        createdAt: new Date().toISOString(),
      },
    ]);
    setAwaitingLead(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const closeChat = () => {
    setIsOpen(false);
    setTyping(false);
    setBusy(false);
    setInput("");
    setSuggestions([
      "about ijekerTech",
    "ijekerTech services",
    "courses",
    "what can this chatbot answer?"
    ]);
    setAwaitingLead(false);
    setLeadValue("");
    setLeadValid(null);
    abortControllerRef.current?.abort();
  };

  // Lead validation
  const validateLead = (val) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{7,15}$/;
    return emailRegex.test(val) || phoneRegex.test(val);
  };

  const onLeadChange = (val) => {
    setLeadValue(val);
    setLeadValid(val === "" ? null : validateLead(val));
  };

  const submitLead = async () => {
    if (!validateLead(leadValue)) {
      setError("❌ Enter a valid email or phone.");
      return;
    }
    setError("");
    const userMsg = { id: crypto.randomUUID(), from: "user", text: leadValue, createdAt: new Date().toISOString() };
    setMessages(prev => [...prev, userMsg]);
    setAwaitingLead(false);

    try {
      await fetch(LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact: leadValue })
      });

      setMessages(prev => [...prev, { id: crypto.randomUUID(), from: "bot", text: "✅ Thanks! Your details are saved. How can I help you today?", createdAt: new Date().toISOString() }]);
    } catch (err) { console.error("Lead save failed:", err); }
  };

  // Handle sending messages with **realistic typing effect**
  const handleSend = async (presetText) => {
    const text = (presetText ?? input).trim();
    if (!text || busy) return;

    // Cancel previous request if any
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setBusy(true);
    setError("");

    const userMsg = { id: crypto.randomUUID(), from: "user", text, createdAt: new Date().toISOString() };
    setMessages(prev => [...prev, userMsg]);
    if (!presetText) setInput("");

    setTyping(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: leadValue,  // ✅ include user’s email/phone
          from: "user",
          text
        }),

        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`Server ${res.status}`);
      const data = await res.json();

      if (data?.botMsg) {
        // Create empty bot message
        const botMsg = { id: crypto.randomUUID(), from: "bot", text: "", createdAt: new Date().toISOString() };
        setMessages(prev => [...prev, botMsg]);

        // Typing effect: add characters one by one
        const fullText = data.botMsg.text;
        let i = 0;
        const speed = Math.min(50, 2000 / fullText.length); // dynamic typing speed
        const interval = setInterval(() => {
          i++;
          setMessages(prev => prev.map(m => m.id === botMsg.id ? { ...m, text: fullText.slice(0, i) } : m));
          if (i >= fullText.length) clearInterval(interval);
        }, speed);
      }

      setSuggestions(data?.suggestions?.length ? data.suggestions : ["What services do you offer?", "Pricing plans", "Talk to support"]);

    } catch (err) {
      if (err.name !== "AbortError") setError("⚠️ Connection issue. Try again.");
      console.error(err);
    } finally {
      setTyping(false);
      setBusy(false);
    }
  };

  const canSend = useMemo(() => input.trim().length > 0 && !busy, [input, busy]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      awaitingLead ? submitLead() : handleSend();
    }
  };

  const panelClass = "bg-white shadow-2xl rounded-3xl border flex flex-col max-h-[80vh] sm:max-h-[70vh] w-[min(92vw,28rem)] sm:w-96";

  return (
    <div
      ref={dragRef}
      onMouseDown={handleMouseDown}
      className="z-50 font-sans cursor-grab"
      style={{ position: "fixed", bottom: position.bottom, right: position.right }}
    >
      {isOpen ? (
        <div className={panelClass}>
          <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-3xl shadow-md">
            <h2 className="text-sm font-semibold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-300 animate-pulse" /> ijekerTech Assistant
            </h2>
            <button onClick={closeChat} className="p-1 hover:bg-white/20 transition"><X size={20} /></button>
          </div>

          {error && <div className="flex items-center gap-2 px-3 py-2 text-xs text-red-700 bg-red-50 border-b border-red-100 animate-pulse"><AlertCircle size={14} /> {error}</div>}

          <div className="flex-1 px-4 py-3 overflow-y-auto space-y-4 text-sm bg-gradient-to-b from-white to-slate-50 scroll-smooth">
            {messages.map((m) => <Bubble key={m.id} msg={m} />)}
            {typing && <TypingIndicator />}
            <div ref={endRef} />
          </div>

          {awaitingLead ? (
            <div className="p-3 border-t bg-gray-50 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={leadValue}
                  onChange={(e) => onLeadChange(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Enter email or phone"
                  className={`flex-1 px-3 py-2 rounded-lg border transition outline-none focus:ring-2 ${leadValid === null ? "border-gray-300 focus:ring-blue-300" : leadValid ? "border-green-400 focus:ring-green-300" : "border-red-400 focus:ring-red-300"}`}
                />
                {leadValid !== null && (leadValid ? <CheckCircle size={18} className="text-green-500" /> : <AlertCircle size={18} className="text-red-500" />)}
              </div>
              <button onClick={submitLead} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">Save & Continue</button>
            </div>
          ) : (
            <>
              {suggestions.length > 0 && (
                <div className="px-3 pb-2 flex gap-2 flex-wrap">
                  {suggestions.map((s, i) => <button key={i} onClick={() => handleSend(s)} className="px-3 py-1.5 text-xs rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-blue-700 border border-blue-100 shadow-sm transition transform hover:scale-105">{s}</button>)}
                </div>
              )}
              <div className="border-t bg-white rounded-b-3xl p-2 flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type a message…"
                  className="flex-1 resize-none max-h-28 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-300 transition"
                />
                <button onClick={() => handleSend()} disabled={!canSend} className={`px-4 py-2 rounded-xl text-white text-sm ${canSend ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-300 cursor-not-allowed"} transition`}>Send</button>
              </div>
            </>
          )}
        </div>
      ) : (
        <button onClick={openChat} className="relative bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 animate-bounce transition-all">
          <MessageCircle size={26} />
          {unread > 0 && <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-red-500 text-[10px] font-bold grid place-items-center animate-ping">{unread}</span>}
        </button>
      )}
    </div>
  );
}

// Bubble
function Bubble({ msg }) {
  const isUser = msg.from === "user";
  const time = new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} gap-1 animate-slideUp`}>
      <div className={`px-4 py-2 rounded-2xl max-w-[80%] ${isUser ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md animate-pulseSend" : "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 shadow-sm hover:scale-[1.02] transition-transform duration-200"}`}>
        {msg.text}
      </div>
      <span className={`text-[10px] ${isUser ? "text-right text-blue-200" : "text-left text-gray-400"} select-none`}>{time}</span>
    </div>
  );
}

function Avatar({ who }) {
  return <div className={`grid place-items-center h-8 w-8 rounded-full text-[10px] font-semibold ${who === "user" ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-700 shadow-sm"}`}>{who === "user" ? "U" : "B"}</div>;
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 animate-fadeIn">
      <Avatar who="bot" />
      <div className="flex gap-1 px-3 py-2 rounded-2xl bg-gray-100 shadow-inner">
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce.delay-75"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce.delay-150"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce.delay-300"></span>
      </div>
    </div>
  );
}

export default ChatPopup;
