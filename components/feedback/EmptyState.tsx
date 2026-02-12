import React from "react";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({
  message = "No data available",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-gray-500">
      <Inbox size={48} className="mb-4 opacity-50" />
      <p>{message}</p>
    </div>
  );
}
