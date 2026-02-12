"use client";
import React from "react";
import TokenTable from "../../../components/tables/TokenTable";

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Token History</h1>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <TokenTable status="ALL_HISTORY" />
      </div>
    </div>
  );
}
