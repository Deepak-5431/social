'use client'

import { SessionProvider } from "next-auth/react";
import React from "react";

// This is a necessary wrapper component for NextAuth.
// It uses the SessionProvider context to make session data available throughout your app.
export default function AuthProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}