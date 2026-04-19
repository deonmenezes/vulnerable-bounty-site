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
      <h1>Comments</h1>
      <div className="card">
        <form onSubmit={post}>
          <label>Name</label>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
          <label>Comment</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={3} style={{ width: "100%" }} />
          <div style={{ marginTop: "0.5rem" }}>
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
      <div>
        {list.map((c) => (
          <div key={c.id} className="card">
            <strong>{c.author}</strong>
            {/* Stored XSS: rendering raw HTML from user input. */}
            <div dangerouslySetInnerHTML={{ __html: c.body }} />
          </div>
        ))}
      </div>
      <p className="bug">Comments render raw HTML — stored XSS by design. No CSRF tokens either.</p>
    </>
  );
}
