import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data?: T;
}

export class ApiError extends Error {
  constructor(public code: number, message: string, public status: number = 500) {
    super(message);
  }
}

export function errorHandler(error: unknown) {
  console.error("API Error:", error);

  if (error instanceof ApiError) {
    return NextResponse.json<ApiResponse>(
      {
        code: error.code,
        message: error.message,
      },
      { status: error.status }
    );
  }

  // 未知错误
  return NextResponse.json<ApiResponse>(
    {
      code: 500,
      message: error instanceof Error ? error.message : "Internal Server Error",
    },
    { status: 500 }
  );
}
