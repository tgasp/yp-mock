import { FormEvent, useState } from "react";
import { useAuthStore } from "../store/auth";
import { Button } from "@ui/components/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // TODO: Replace with actual API call
      if (email === "admin@example.com" && password === "password") {
        login("fake-token", {
          id: "1",
          email: "admin@example.com",
          name: "Admin User",
        });
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred");
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="rounded-lg bg-white px-8 pb-8 pt-6 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">Admin Login</h2>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <Button type="submit">Sign In 2</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
