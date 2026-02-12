import React from 'react'

interface AlertProps {
  type: 'success' | 'error' | 'warning'
  message: string
}

export default function Alert({ type, message }: AlertProps) {
  const styles = {
    success: "bg-green-50 text-green-700 border-green-200",
    error: "bg-red-50 text-red-700 border-red-200",
    warning: "bg-yellow-50 text-yellow-700 border-yellow-200"
  }

  return (
    <div className={`p-4 rounded-md border ${styles[type]} mb-4`}>
      <p className="text-sm font-medium">{message}</p>
    </div>
  )
}