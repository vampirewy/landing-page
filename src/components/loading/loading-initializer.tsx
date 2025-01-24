"use client";

import { initializeLoading } from "@/services/base.service";
import { useEffect } from "react";
import { useLoading } from "./loading-context";

export function LoadingInitializer() {
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    initializeLoading(showLoading, hideLoading);
  }, [showLoading, hideLoading]);

  return null;
}
