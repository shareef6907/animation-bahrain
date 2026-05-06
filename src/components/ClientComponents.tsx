"use client";

import LenisProvider from "./LenisProvider";
import CustomCursor from "./CustomCursor";

export function ClientComponents({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LenisProvider />
      <CustomCursor />
      {children}
    </>
  );
}
