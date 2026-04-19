// Intentionally bad "database" for demo purposes. Plaintext passwords, exposed PII.
export type User = {
  id: number;
  username: string;
  email: string;
  password: string; // plaintext on purpose
  role: "user" | "admin";
  ssn: string;
  apiKey: string;
};

export const users: User[] = [
  { id: 1, username: "admin",  email: "admin@example.com",  password: "admin123",    role: "admin", ssn: "111-22-3333", apiKey: "sk_live_admin_4242" },
  { id: 2, username: "alice",  email: "alice@example.com",  password: "password",    role: "user",  ssn: "222-33-4444", apiKey: "sk_live_alice_7777" },
  { id: 3, username: "bob",    email: "bob@example.com",    password: "qwerty",      role: "user",  ssn: "333-44-5555", apiKey: "sk_live_bob_1337"   },
  { id: 4, username: "carol",  email: "carol@example.com",  password: "letmein",     role: "user",  ssn: "444-55-6666", apiKey: "sk_live_carol_0001" }
];

export const comments: { id: number; author: string; body: string }[] = [
  { id: 1, author: "admin", body: "Welcome to the deliberately-insecure demo." },
  { id: 2, author: "alice", body: "Find the bugs and email the report." }
];

export const SECRETS = {
  DATABASE_URL: "postgres://root:toor@db.internal:5432/prod",
  JWT_SECRET: "super-secret-do-not-share-123",
  STRIPE_KEY: "sk_live_FAKE_EXAMPLE_KEY_FOR_DEMO",
  AWS_ACCESS_KEY_ID: "AKIAIOSFODNN7EXAMPLE",
  AWS_SECRET_ACCESS_KEY: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
};
