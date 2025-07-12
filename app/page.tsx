"use client";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LandingPage() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    if (!email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Thanks for subscribing!");
        setEmail("");
      } else {
        setMessage(data.error || "Subscription failed.");
      }
    } catch {
      setMessage("Network error, try again later.");
    }
  }

  return (
    <>
      <Head>
        <title>TechShortsApp — Calm Tech. Fast.</title>
        <meta
          name="description"
          content="TechShortsApp.com – A calm space for fast tech knowledge. Coming soon."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        <header className="p-6 flex justify-between items-center shadow-md">
          <Link href="/">
            <h1 className="text-2xl font-bold">
              TechShorts<span className="text-blue-600">App</span>
            </h1>
          </Link>
          <nav className="space-x-4 text-sm font-medium">
            <Link href="/">
              <span
                className={`cursor-pointer ${
                  !isAboutPage
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                Home
              </span>
            </Link>
            <Link href="/about">
              <span
                className={`cursor-pointer ${
                  isAboutPage
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                About
              </span>
            </Link>
          </nav>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
          {isAboutPage ? (
            <div className="max-w-2xl text-center">
              <h2 className="text-3xl font-bold mb-4">Why TechShorts?</h2>
              <p className="text-gray-700 text-lg mb-4">
                TechShortsAppwas built to serve tech minds who are overwhelmed
                by noise and clutter. We deliver clean, calm, and crisp updates
                — fast. No scrolling, no FOMO. Just the essentials.
              </p>
              <p className="text-gray-600 text-md">
                Born from a need to focus while staying informed,
                TechShortsApp.com aims to bridge the gap between developers,
                creators, and curious minds with time-sensitive, high-signal
                insights.
              </p>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center">
              <h2 className="text-2xl md:text-2xl font-semibold mb-4 text-center">
                🚀 Be the first to experience TechShortsApp
              </h2>
              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
                >
                  Notify Me
                </button>
              </form>
              {message && (
                <p
                  className={`mt-2 text-center text-sm ${
                    message.includes("Thanks")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          )}
        </main>

        <footer className="text-center p-4 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TechShortsApp. All rights reserved.
        </footer>
      </div>
    </>
  );
}
