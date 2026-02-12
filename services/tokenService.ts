import { fetcher } from "./api";
import { Token, TokenResponse } from "../types";

export const tokenService = {
  createToken: async (mobileNumber: string) => {
    return fetcher<Token>("/tokens", {
      method: "POST",
      body: JSON.stringify({ mobileNumber }),
    });
  },

  
  getTokens: async (status?: string, page: number = 1, limit: number = 10) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (status && status !== "ALL_HISTORY") {
      params.append("status", status);
    }

    return fetcher<TokenResponse>(`/tokens?${params.toString()}`);
  },

 
  updateStatus: async (id: string, status: "SERVED" | "CANCELLED") => {
    return fetcher<Token>(`/tokens/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status }),
    });
  },
};
