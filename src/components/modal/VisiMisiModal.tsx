import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { EditorState, LexicalEditor } from "lexical";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (type: "visi" | "misi", content: EditorState) => void;
  type: "visi" | "misi" | null;
  initialContent?: EditorState | null;
}

export const VisiMisiModal: React.FC<Props> & {
  ReadOnlyEditor: React.FC;
} = ({ open, onClose, onSave, type, initialContent }) => {
  const editorRef = useRef<LexicalEditor | null>(null);

  const config = {
    namespace: "VisiMisiEditor",
    onError(error: any) {
      console.error("Lexical error:", error);
    },
    theme: {
      paragraph: "mb-2",
    },
    editorState: () => {
      if (initialContent) return initialContent;
    },
  };

  const handleSubmit = () => {
    if (!editorRef.current || !type) return;
    const editorState = editorRef.current.getEditorState();
    onSave(type, editorState);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {type === "visi" ? "Edit Visi Desa" : "Edit Misi Desa"}
          </DialogTitle>
        </DialogHeader>

        <LexicalComposer initialConfig={config}>
          <div className="border p-3 rounded min-h-[200px] max-h-[400px] overflow-auto">
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="min-h-[150px] outline-none p-2" />
              }
              placeholder={
                <div className="text-sm text-muted-foreground">
                  Tulis {type} desa di sini...
                </div>
              }
              ErrorBoundary={() => <p>Error loading editor</p>}
            />
            <HistoryPlugin />
            <EditorRefPlugin editorRef={editorRef} />
          </div>
        </LexicalComposer>

        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onClose}>
            Batal
          </Button>
          <Button onClick={handleSubmit}>Simpan</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// ReadOnly Viewer
VisiMisiModal.ReadOnlyEditor = function Viewer() {
  return (
    <RichTextPlugin
      contentEditable={
        <ContentEditable className="pointer-events-none prose" />
      }
      placeholder={null}
      ErrorBoundary={() => <p>Error</p>}
    />
  );
};
