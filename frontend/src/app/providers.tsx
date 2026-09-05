"use client";

import React, { useEffect } from "react";
import "@/i18n";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster theme="dark" position="top-center" richColors />
    </>
  );
}
