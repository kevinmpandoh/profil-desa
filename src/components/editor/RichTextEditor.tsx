"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";

import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Eraser,
} from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function RichTextEditor({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose max-w-full min-h-[150px] outline-none prose-p:my-1 prose-ul:my-1 prose-ol:my-1",
      },
    },
  });

  if (!editor) return null;
  // if (!value && !editor) return null;

  const buttonClass = (active: boolean) =>
    `p-1 rounded ${active ? "bg-blue-100 text-blue-600" : "text-gray-700"}`;

  return (
    <div className="border rounded p-2 space-y-2">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 border-b pb-2 mb-2">
        {/* Bold */}
        <Button
          type="button"
          variant={editor.isActive("bold") ? "default" : "outline"}
          size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={16} />
        </Button>

        {/* Italic */}
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          variant={editor.isActive("italic") ? "default" : "outline"}
          size="sm"
        >
          <Italic size={16} />
        </Button>

        {/* Heading 1, 2, 3 */}
        <Button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          variant={
            editor.isActive("heading", { level: 1 }) ? "default" : "outline"
          }
          size="sm"
        >
          <Heading1 size={16} />
        </Button>

        <Button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          variant={
            editor.isActive("heading", { level: 2 }) ? "default" : "outline"
          }
          size="sm"
        >
          <Heading2 size={16} />
        </Button>

        <Button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          variant={
            editor.isActive("heading", { level: 3 }) ? "default" : "outline"
          }
          size="sm"
        >
          <Heading3 size={16} />
        </Button>

        {/* List (Bullet / Ordered) */}
        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          variant={editor.isActive("bulletList") ? "default" : "outline"}
          size="sm"
        >
          <List size={16} />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          variant={editor.isActive("orderedList") ? "default" : "outline"}
          size="sm"
        >
          <ListOrdered size={16} />
        </Button>

        {/* Alignment */}
        <Button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          variant={
            editor.isActive({ textAlign: "left" }) ? "default" : "outline"
          }
          size="sm"
        >
          <AlignLeft size={16} />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          variant={
            editor.isActive({ textAlign: "center" }) ? "default" : "outline"
          }
          size="sm"
        >
          <AlignCenter size={16} />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          variant={
            editor.isActive({ textAlign: "right" }) ? "default" : "outline"
          }
          size="sm"
        >
          <AlignRight size={16} />
        </Button>

        <Button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          variant={
            editor.isActive({ textAlign: "justify" }) ? "default" : "outline"
          }
          size="sm"
        >
          <AlignJustify size={16} />
        </Button>

        {/* Clear formatting */}
        <Button
          type="button"
          onClick={() =>
            editor.chain().focus().unsetAllMarks().clearNodes().run()
          }
          size={"sm"}
          variant={"outline"}
        >
          <Eraser size={16} />
        </Button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  );
}
