import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, { isLoading, error }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await register({
        email,
        password,
        confirmPassword,
        username,
      }).unwrap();

      dispatch(
        setCredentials({
          ...res,
        })
      );

      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);

      navigate("/");
    }
  }, [navigate, userInfo]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] text-[var(--color-primary)] px-4">
      <div className="bg-[var(--color-bg-secondary)] p-8 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-500">
          Register
        </h1>

        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Username"
            className="bg-[var(--color-bg-tertiary)] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-[var(--color-bg-tertiary)] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-[var(--color-bg-tertiary)] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="bg-[var(--color-bg-tertiary)] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {isLoading && <h2>Loading...</h2>}

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
