"use client";

import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const { login, user } = useAuth();
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      login(username);
      router.push("/protected");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          MyApp
        </Link>
       {/*  <div>
          {!user && (
            <Link
              href="/login"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-200"
            >
              Log In
            </Link>
          )}
        </div> */}
      </nav>

      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <form
          onSubmit={handleLogin}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
        >
          <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Login
          </h1>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}