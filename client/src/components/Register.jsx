import React from "react";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-primary)] px-4">
      <div className="bg-[var(--color-bg-secondary)] p-8 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-[var(--color-fg)]">
          Create your account
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="bg-[var(--color-bg-tertiary)] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-fg)]"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-[var(--color-bg-tertiary)] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-fg)]"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-[var(--color-bg-tertiary)] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-fg)]"
          />

          <button
            type="submit"
            className="mt-4 bg-[var(--color-fg)] text-black font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-[var(--color-secondary)] mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[var(--color-fg)] hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
