import { useState, useEffect, useCallback } from "react";
import { tokenService } from "../services/tokenService";
import { Token } from "../types";
import { useToast } from "./useToast";

export function useTokens(status?: string, page: number = 1) {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const toast = useToast();

  const fetchTokens = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await tokenService.getTokens(status, page);
      setTokens(data.tokens);
      setTotalPages(data.totalPages);
    } catch (err: any) {
      const msg = err.message || "Failed to fetch tokens";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }, [status, page]);


  useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  const updateTokenStatus = async (
    id: string,
    newStatus: "SERVED" | "CANCELLED",
  ) => {
    try {
      await tokenService.updateStatus(id, newStatus);
      toast.success(`Token marked as ${newStatus}`);
      fetchTokens();
    } catch (err: any) {
      toast.error(err.message || "Update failed");
    }
  };

  return {
    tokens,
    loading,
    error,
    totalPages,
    refresh: fetchTokens,
    updateTokenStatus,
  };
}
