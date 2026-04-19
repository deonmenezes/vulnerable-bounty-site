"use client";
import { useEffect, useState } from "react";

type Comment = { id: number; author: string; body: string };

export default function Comments() {
  const [list, setList] = useState<Comment[]>([]);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  async function load() {
    const res = await fetch("/api/comments");
    setList(await res.json());
  }
  useEffect(() => { load(); }, []);

  async function post(e: React.FormEvent) {
    e.preventDefault();
    if (!author || !body) return;
    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, body })
    });
    setBody("");
    load();
  }

  return (
    <>
      <h1>Client Community</h1>
      <p style={{ color: "#5a6778", fontStyle: "italic", maxWidth: 680 }}>
        A forum for our clients to share experiences, ask questions, and connect with one another.
        Posts are moderated by International Bank staff.
      </p>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Start a discussion</h3>
        <form onSubmit={post}>
          <label>Your name</label>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} style={{ width: "100%" }} />
          <label>Your message</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={4} style={{ width: "100%" }} />
          <div style={{ marginTop: "1rem" }}>
            <button type="submit">Post to Community</button>
          </div>
        </form>
      </div>

      <h2>Recent discussions</h2>
      <div className="card" style={{ padding: 0 }}>
        {list.map((c) => (
          <div key={c.id} className="comment">
            <div className="avatar">{(c.author[0] || "?").toUpperCase()}</div>
            <div style={{ flex: 1 }}>
              <div className="comment-meta">{c.author}</div>
              <div dangerouslySetInnerHTML={{ __html: c.body }} />
            </div>
          </div>
        ))}
        {list.length === 0 && <p style={{ padding: "1.5rem", color: "#5a6778", fontStyle: "italic", textAlign: "center" }}>No posts yet. Be the first to start a discussion.</p>}
      </div>
    </>
  );
}
