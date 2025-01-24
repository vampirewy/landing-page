import { NextResponse } from "next/server";
import { ApiResponse } from "../middleware/error-handler";

export function success<T>(data: T, message = "Success"): NextResponse<ApiResponse<T>> {
  return NextResponse.json({
    code: 0,
    message,
    data,
  });
}

export function fail(code: number, message: string, status = 400): NextResponse<ApiResponse> {
  return NextResponse.json(
    {
      code,
      message,
    },
    { status }
  );
}
