"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Smartphone,
  CheckCircle,
  RefreshCw,
  Home,
} from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import toast from "react-hot-toast";

export default function TokenRequestForm() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [tokenData, setTokenData] = useState<any>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^07[0-9]{8}$/.test(mobileNumber)) {
      toast.error(
        "Please enter a valid 10 digit mobile number starting with 07",
      );
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/tokens`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setTokenData(data);
      setMobileNumber("");
      toast.success("Token generated successfully!");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (tokenData) {
    return (
      <div className="w-full max-w-md mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-800 flex items-center transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100 animate-in fade-in zoom-in duration-300">
          <div className="bg-green-600 p-6 text-center">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-2 opacity-90" />
            <h2 className="text-2xl font-bold text-white">Success!</h2>
            <p className="text-green-100">You are in the queue.</p>
          </div>

          <div className="p-8 text-center space-y-6">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-1">
                Token Number
              </p>
              <div className="text-6xl font-black text-gray-900 tracking-tighter">
                #{tokenData.tokenNumber || String(tokenData._id).slice(-4)}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Smartphone className="w-5 h-5" />
                <span className="font-medium">{tokenData.mobileNumber}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button
                variant="outline"
                onClick={() => setTokenData(null)}
                className="w-full flex justify-center items-center gap-2 border-gray-300 hover:bg-gray-50"
              >
                <RefreshCw className="w-4 h-4" /> New Token
              </Button>

              <Link href="/" className="w-full">
                <Button className="w-full flex justify-center items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white">
                  <Home className="w-4 h-4" /> Go Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ------ Request Form -----
  return (
    <div className="w-full">
      {/* Navigation */}
      <div className="mb-8 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium text-gray-500 hover:text-blue-600 flex items-center transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
           Back to Home
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Request a Token</h2>
          <p className="text-gray-500 text-sm">
            Enter your mobile number to join the queue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div className="space-y-2">
            <Input
              label="Mobile Number"
              type="tel"
              placeholder="07XXXXXXXX"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              maxLength={10}
              className="text-lg py-3 tracking-wide"
            />
            <p className="text-xs text-gray-400 pl-1">
              * We will use this number to notify you.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full py-4 text-lg font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all active:scale-[0.98]"
            isLoading={loading}
          >
            Get Token Now
          </Button>
        </form>
      </div>
    </div>
  );
}
