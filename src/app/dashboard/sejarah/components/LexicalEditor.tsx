"use client";

import { useEffect } from "react";
import {
  LexicalComposer,
  InitialConfigType,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { $getRoot, $getSelection, EditorState } from "lexical";

import "./editor.css"; // kamu bisa buat styling ringan di sini (lihat bawah)
import ToolbarPlugin from "./ToolbarPlugin";

type Props = {
  value?: string;
  onChange?: (html: string) => void;
};

const theme = {
  // Styling bisa dikustom sesuai kebutuhan
  paragraph: "editor-paragraph",
};

const editorConfig: InitialConfigType = {
  namespace: "LexicalEditor",
  theme,
  onError(error) {
    console.error("Lexical error:", error);
  },
  editable: true,
  editorState: undefined,
};

export default function LexicalEditor({ value, onChange }: Props) {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container border rounded-md p-3 min-h-[150px] bg-white">
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={
            <div className="editor-placeholder">Tulis sejarah desa...</div>
          }
          ErrorBoundary={() => <div>Terjadi error</div>}
        />
        <HistoryPlugin />
        <OnChangePlugin
          onChange={(editorState: EditorState) => {
            editorState.read(() => {
              const htmlString = $getRoot().getTextContent(); // bisa diubah ke HTML jika perlu
              onChange?.(htmlString);
            });
          }}
        />
      </div>
    </LexicalComposer>
  );
}
