import { ApiResponse } from "@/middleware/error-handler";
import { toast } from "sonner";

let showLoading: () => void;
let hideLoading: () => void;

export function initializeLoading(show: () => void, hide: () => void) {
  showLoading = show;
  hideLoading = hide;
}

export class BaseService {
  protected static async request<T>(url: string, options?: RequestInit): Promise<T> {
    showLoading?.();
    try {
      const response = await fetch(url, options);
      const data = (await response.json()) as ApiResponse<T>;

      if (data.code !== 0) {
        toast.error(data.message);
        return new Promise(() => {});
      }

      return data.data as T;
    } finally {
      hideLoading?.();
    }
  }

  protected static getHeaders(): HeadersInit {
    return {
      "Content-Type": "application/json",
    };
  }

  protected static async post<T>(url: string, body?: unknown): Promise<T> {
    return this.request<T>(url, {
      method: "POST",
      headers: this.getHeaders(),
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  protected static async get<T>(url: string, query?: Record<string, string>): Promise<T> {
    const queryString = query ? new URLSearchParams(query).toString() : "";
    const urlWithQuery = queryString ? `${url}?${queryString}` : url;

    return this.request<T>(urlWithQuery, {
      method: "GET",
      headers: this.getHeaders(),
    });
  }
}
