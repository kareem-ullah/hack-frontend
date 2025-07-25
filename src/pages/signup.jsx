import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // default value
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/signup", form);
      alert(res.data.message || "Signup successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Signup</h2>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-md outline-none transition-all duration-300 focus:scale-105 focus:ring-2 focus:ring-blue-500"
        />

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

        <div className="flex justify-center items-center space-x-6">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="user"
              checked={form.role === "user"}
              onChange={handleChange}
            />
            <span>User</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="admin"
              checked={form.role === "admin"}
              onChange={handleChange}
            />
            <span>Admin</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md font-semibold transition"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
