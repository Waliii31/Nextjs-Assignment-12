"use client"
import React, { useState } from 'react';
import { signIn } from "next-auth/react";
import Link from 'next/link'
import { GithubIcon } from "lucide-react";

export default function SignupPage() {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Signup submitted', formData);
  };

  const githubLogin = async () => {
    const result = await signIn("github", { redirect: false });

    if (result?.error) {
      setError("GitHub login failed. Please try again.");
    } 
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-black border-slate-400 border-[2px] rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-transparent text-white text-center py-6">
          <h2 className="text-3xl font-normal tracking-wide">Create Account</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-[2px] border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none"
              placeholder="Choose a username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-[2px] border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-[2px] border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none"
              placeholder="Create a strong password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-[2px] border-gray-300 bg-transparent rounded-md shadow-sm focus:outline-none"
              placeholder="Repeat your password"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Sign Up
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300"></span>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-300">Or continue with</span>
            </div>
          </div>

          <button
            onClick={githubLogin}
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 border bg-black border-white rounded-md hover:text-black hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          >
            <GithubIcon className="w-5 h-5 text-white" />
            <span className="text-white">Sign up with GitHub</span>
          </button>

          <p className="text-center text-white">Already have an account? <Link className="text-blue-500" href="/user/login">Sign In</Link></p>

        </form>
      </div>
    </div>
  );
}