"use client";
import React from "react";
import TokenTable from "../../components/tables/TokenTable";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>

      <div className="bg-white rounded-lg shadow p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">Pending Tokens</h2>

        {/*table scroll horizontal in mobile */}
        <div className="overflow-x-auto"><TokenTable status="PENDING" /></div>
      </div>
    </div>
  );
}
