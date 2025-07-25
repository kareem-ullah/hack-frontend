import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      alert(res.data.message || "Login successful!");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role); // ✅ Save role

      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 p-4">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Login</h2>

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-md outline-none transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 border rounded-md outline-none transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full p-3 text-white font-bold bg-gray-900 rounded-md hover:opacity-90 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}