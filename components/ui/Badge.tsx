import React from "react";

interface BadgeProps {
  status: string;
}

export default function Badge({ status }: BadgeProps) {
  const styles: Record<string, string> = {
    PENDING: "bg-yellow-100 text-yellow-800",
    SERVED: "bg-green-100 text-green-800",
    CANCELLED: "bg-red-100 text-red-800",
  };

  const normalizedStatus = status.toUpperCase();
  const style = styles[normalizedStatus] || "bg-gray-100 text-gray-800";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style}`}
    >
      {normalizedStatus}
    </span>
  );
}
