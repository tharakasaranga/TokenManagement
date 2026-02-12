export type TokenStatus = 'PENDING' | 'SERVED' | 'CANCELLED';

export interface Token {
  _id: string;
  mobileNumber: string;
  status: TokenStatus;
  createdAt: string;
  updatedAt: string;
  tokenNumber?: string;
}

export interface TokenResponse {
  tokens: Token[];
  totalPages: number;
  currentPage: number;
  totalTokens: number;
}

export interface ApiError {
  message: string;
  stack?: string;
}