import React, { useState } from "react";

// ✅ ForgotPassword Component — fully responsive and ready for chat app
// Use Tailwind CSS for styling

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    setLoading(true);

    try {
      // Example API call (replace with your real endpoint)
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage(data.message || "Password reset link sent to your email.");
      setEmail("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your registered email to receive a reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm bg-red-50 p-2 rounded-md">{error}</p>
          )}
          {message && (
            <p className="text-green-600 text-sm bg-green-50 p-2 rounded-md">{message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <button
          onClick={() => window.history.back()}
          className="mt-4 w-full border border-gray-300 text-gray-600 py-2 rounded-xl hover:bg-gray-100"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
