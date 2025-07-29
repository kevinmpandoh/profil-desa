// components/editor/RichTextViewer.tsx
"use client";

import React from "react";

export default function RichTextViewer({
  htmlContent,
}: {
  htmlContent: string;
}) {
  console.log(htmlContent, "HTML CONTENT IN VIEWER");
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
