"use client";

import { useCallback, useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function LoadingListener() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = () => setLoading(true);
    window.addEventListener("showLoading", handler);
    return () => window.removeEventListener("showLoading", handler);
  }, []);

  const navigateToForYou = useCallback(() => {
    window.location.href = "/for-you";
  }, []);

  if (!loading) return null;
  return <LoadingScreen onComplete={navigateToForYou} />;
}
