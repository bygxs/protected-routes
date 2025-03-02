import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className=" text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Welcome to Our App!
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Join us today and start your journey with us.
      </p>

      <Link
        href="/login"
        className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-200"
      >
        Log In
      </Link>

      <p>try to reach dashboard without logging in</p>
      <Link
        href="/protected"
        className="px-6 py-3 text-white bg-blue-600 rounded hover:bg-blue-700 dark:bg-amber-500 dark:hover:bg-blue-600 transition duration-200"
      >
        Protected
      </Link>

      <div className="ml-8 mr-8 text-center">
        <p>
          This technique uses client-side protection with React hooks (useAuth,
          useEffect) to check authentication and redirect users, making it
          simple and straightforward. Middleware, on the other hand, runs
          server-side in Next.js, intercepting requests before pages load,
          offering stricter, centralized control but requiring more setup.
          Client-side is easier to implement; middleware is more secure and
          scalable.
        </p>
        <h2 className="  text-2xl font-semibold text-gray-800 dark:text-white mb-2">
          What are Protected Routes?
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          What is a Protected Page (Top-Level Explanation)? A protected page in
          web development refers to a webpage or route in an application that is
          restricted to only authorized users. This means that users must meet
          certain conditions—typically being logged in or authenticated—before
          they can access the page. If an unauthorized user tries to visit a
          protected page, they’re usually redirected to a login page or shown an
          error message. From a top-level perspective: Purpose: Protected pages
          safeguard sensitive information or functionality (e.g., a user
          dashboard, account settings, or admin panel) from being accessed by
          the public or unauthenticated users. How It Works: The application
          checks the user’s authentication status (e.g., via a token, session,
          or cookie) before rendering the page. If the check fails, access is
          denied. Common Use Case: Think of a social media app—only logged-in
          users can post updates or view their private messages. Those are
          protected pages. In the context of Next.js, protected pages (or
          routes) are implemented by controlling access at the routing level,
          often using middleware or logic within page components. Your Project:
          Protected Routes in Next.js 15 with TypeScript, Tailwind, and App
          Router Let’s outline how you can set up a simple Next.js 15 project
          focused solely on protected routes. I’ll assume you’re familiar with
          setting up a basic Next.js app, but I’ll walk you through the key
          parts for protected routes. Protected routes are parts of your
          application that require user authentication to access. They ensure
          that only authorized users can view certain content, enhancing the
          security of your app. If a user tries to access a protected route
          without being logged in, they will be redirected to the login page.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
