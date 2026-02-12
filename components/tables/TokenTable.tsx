"use client";

import React, { useEffect, useState } from "react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Spinner from "../feedback/Spinner";
import EmptyState from "../feedback/EmptyState";
import toast from "react-hot-toast";

interface TokenTableProps {
  status?: string;
}

export default function TokenTable({ status }: TokenTableProps) {
  const [tokens, setTokens] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const fetchTokens = async () => {
    setLoading(true);
    try {
      let url = `${API_URL}/api/tokens?page=${page}&limit=10`;
      if (status && status !== "ALL_HISTORY") {
        url += `&status=${status}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (res.ok) {
        setTokens(data.tokens);
        setTotalPages(data.totalPages);
      }
    } catch (error) {
      console.error("Error fetching tokens", error);
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTokens();
  }, [page, status]);

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`${API_URL}/api/tokens/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        toast.success(`Token marked as ${newStatus}`);
        fetchTokens();
      } else {
        throw new Error("Update failed");
      }
    } catch (error) {
      toast.error("Action failed");
    }
  };

  if (loading) return <Spinner />;

  if (tokens.length === 0) return <EmptyState />;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Token ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              {status === "PENDING" && (
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tokens.map((token) => (
              <tr key={token._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #{String(token._id).slice(-4)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {token.mobileNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge status={token.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(token.createdAt).toLocaleString()}
                </td>
                {status === "PENDING" && (
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <Button
                      size="sm"
                      onClick={() => handleStatusUpdate(token._id, "SERVED")}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-xs"
                    >
                      Serve
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleStatusUpdate(token._id, "CANCELLED")}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs"
                    >
                      Cancel
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4 px-2">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
