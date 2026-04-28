"use client";
import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
    window.location.reload();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-100"
      >
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded text-zinc-800"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded text-zinc-800"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded text-zinc-800"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded text-zinc-800"
          required
        />

        <div className="mb-4 flex gap-15 text-zinc-800">
          <p className="mb-2">Gender:</p>

          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              required
              className="mr-1"
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              className="mr-1"
            />
            Female
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}