"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutPage() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  return (
    <>
      <Head>
        <title>About — TechShorts</title>
        <meta
          name="description"
          content="Learn about the story and mission behind TechShortsApp.com."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        <header className="p-6 flex justify-between items-center shadow-md">
          <div>
            <h1 className="text-2xl font-bold">
              TechShorts<span className="text-blue-600">App</span>
            </h1>
          </div>
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
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-6">Why I Built TechShorts</h2>

            <p className="text-gray-700 text-lg mb-4">
              In a world full of memes, dances, and distractions, tech creators
              have no dedicated space to grow. That’s why I built{" "}
              <span className="font-semibold text-blue-600">TechShortsApp</span>
              {""}, a calm place for developers to share ideas in 90 seconds or
              less.
            </p>

            <p className="text-gray-600 text-md mb-4">
              No noise. No chasing trends. Just pure tech, shared in short,
              meaningful clips.
            </p>

            <p className="text-gray-600 text-md mb-4">
              This isn’t some big company launch. It’s a self-funded experiment,
              built from my savings. I did this to test an idea… and prove that
              clarity still matters.
            </p>

            <p className="text-gray-600 text-md mb-4">
              Every line of code, every design, every dollar came from me. No
              investors. No noise. Just intent.
            </p>

            <p className="text-gray-700 text-md italic mb-4">
              If it works, great, we’ll build it bigger. If not, at least we
              tried something different. But either way, this is just the
              beginning.
            </p>

            <p className="text-gray-800 text-md font-semibold">
              Built by a developer — for developers. Welcome to TechShortsApp.
            </p>
          </div>
        </main>

        <footer className="text-center p-4 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TechShortsApp. All rights reserved.
        </footer>
      </div>
    </>
  );
}
