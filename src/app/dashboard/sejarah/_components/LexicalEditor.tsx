"use client";

import {
  LexicalComposer,
  type InitialConfigType,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $generateHtmlFromNodes } from "@lexical/html";
import { EditorState } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";

type Props = {
  onChange: (html: string) => void;
};

function EditorOnChangePlugin({ onChange }: Props) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const html = $generateHtmlFromNodes(editor, null);
        onChange(html);
      });
    });
  }, [editor, onChange]);

  return null;
}

export default function LexicalEditor({ onChange }: Props) {
  const initialConfig: InitialConfigType = {
    namespace: "LexicalSejarah",
    theme: {
      paragraph: "mb-2",
    },
    onError(error) {
      console.error("Lexical error:", error);
    },
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="border p-2 rounded min-h-[200px]">
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="min-h-[150px] outline-none" />
          }
          placeholder={<p className="text-gray-400">Tulis sejarah desa...</p>}
          ErrorBoundary={() => <div>Terjadi error</div>}
        />
        <HistoryPlugin />
        <EditorOnChangePlugin onChange={onChange} />
      </div>
    </LexicalComposer>
  );
}
