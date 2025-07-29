// components/editor/RichTextViewer.tsx
"use client";

import React from "react";

export default function RichTextViewer({
  htmlContent,
}: {
  htmlContent: string;
}) {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
