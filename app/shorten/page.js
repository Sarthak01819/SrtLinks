"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Link2, CheckCircle } from "lucide-react";

export default function Page() {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url,
      shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl("");
        setShorturl("");
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 px-6 py-16">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-purple-200 p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <Link2 className="text-purple-700 w-10 h-10" />
          <h1 className="font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700">
            Generate Your Short URL
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Paste your long URL below and get your custom short link instantly.
          </p>
        </div>

        {/* Input Fields */}
        <div className="w-full flex flex-col gap-4 mt-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your long URL..."
            className="px-4 py-3 rounded-xl bg-purple-50 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-gray-800 placeholder-gray-400"
          />

          <input
            type="text"
            value={shorturl}
            onChange={(e) => setShorturl(e.target.value)}
            placeholder="Enter your preferred short text..."
            className="px-4 py-3 rounded-xl bg-purple-50 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-gray-800 placeholder-gray-400"
          />

          {/* Generate Button */}
          <button
            onClick={generate}
            className="mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Generate
          </button>
        </div>

        {/* Generated Link Section */}
        {generated && (
          <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-4 w-full text-left">
            <div className="flex items-center gap-2 text-purple-700 font-semibold mb-2">
              <CheckCircle size={20} />
              <span>Your Short Link:</span>
            </div>
            <Link
              href={generated}
              target="_blank"
              className="text-indigo-600 font-medium hover:underline break-all"
            >
              {generated}
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
