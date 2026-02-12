"use client";
import React from "react";
import TokenRequestForm from "../../components/forms/TokenRequestForm";

export default function TokenPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <TokenRequestForm />
      </div>
    </main>
  );
}
