import { success } from "@/utils/response";

export async function GET() {
  return success({ message: "Hello, World!" });
}
