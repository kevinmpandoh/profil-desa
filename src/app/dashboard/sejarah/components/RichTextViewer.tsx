"use client";
import { useMemo } from "react";
import { $generateHtmlFromNodes } from "@lexical/html";
import { createEditor } from "lexical";

export function RichTextViewer({
  content,
  maxChars,
  showMore,
}: {
  content: string;
  maxChars?: number;
  showMore?: boolean;
}) {
  const displayedHtml = useMemo(() => {
    try {
      const editor = createEditor({});
      const parsed = JSON.parse(content);
      editor.setEditorState(editor.parseEditorState(parsed));
      const fullHtml = $generateHtmlFromNodes(editor, null);
      return maxChars && !showMore
        ? fullHtml.slice(0, maxChars) + "..."
        : fullHtml;
    } catch (err) {
      return "<p>Format isi tidak valid.</p>";
    }
  }, [content, maxChars, showMore]);

  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: displayedHtml }}
    />
  );
}
