"use client";

import { useCallback, useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function LoadingListener() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ query?: string }>).detail;
      setQuery(detail?.query ?? "");
      setLoading(true);
    };
    window.addEventListener("showLoading", handler);
    return () => window.removeEventListener("showLoading", handler);
  }, []);

  const navigateToForYou = useCallback(() => {
    window.location.href = query ? `/for-you?q=${encodeURIComponent(query)}` : "/for-you";
  }, [query]);

  if (!loading) return null;
  return <LoadingScreen onComplete={navigateToForYou} />;
}
