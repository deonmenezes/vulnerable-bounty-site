import { users } from "@/lib/db";

// Intentional IDOR: no auth check. Change the URL to read any user.
export default function Profile({ params }: { params: { id: string } }) {
  const user = users.find((u) => u.id === Number(params.id));
  if (!user) return <><h1>Not found</h1><p>No user with id {params.id}.</p></>;

  return (
    <>
      <h1>Profile: {user.username}</h1>
      <div className="card">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>SSN:</strong> {user.ssn}</p>
        <p><strong>API Key:</strong> {user.apiKey}</p>
        <p><strong>Password:</strong> {user.password}</p>
      </div>
      <p className="bug">Try <a href="/profile/1">/profile/1</a> … /profile/4. No authentication is checked.</p>
    </>
  );
}
