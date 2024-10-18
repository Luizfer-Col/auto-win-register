"use client";

import ConfirmSection from "@/ui/confirmSection";
import { Suspense } from "react";

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmSection />
    </Suspense>
  );
}

