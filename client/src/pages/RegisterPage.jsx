import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-primary)] px-4">
      <div className="bg-[var(--color-bg-secondary)] p-8 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-500">
          Register
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="bg-[var(--color-bg-tertiary)] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-[var(--color-bg-tertiary)] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-[var(--color-bg-tertiary)] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <button
            type="submit"
            className="mt-4 bg-pink-500 font-semibold py-2 rounded-lg hover:bg-pink-600 cursor-pointer"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-[var(--color-secondary)] mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
