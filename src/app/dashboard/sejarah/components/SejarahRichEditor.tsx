// "use client";

// import {
//   LexicalComposer,
//   RichTextPlugin,
//   ContentEditable,
//   HistoryPlugin,
//   OnChangePlugin,
// } from "@lexical/react/LexicalComposer";
// import { EditorState } from "lexical";
// import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

// export default function SejarahRichEditor({
//   value,
//   onChange,
// }: {
//   value?: string;
//   onChange: (value: string) => void;
// }) {
//   return (
//     <LexicalComposer
//       initialConfig={{
//         namespace: "SejarahEditor",
//         editorState: value || "<p></p>",
//         onError: (error) => console.error("Lexical Error", error),
//       }}
//     >
//       <div className="border p-2 min-h-[150px] rounded">
//         <RichTextPlugin
//           contentEditable={
//             <ContentEditable className="min-h-[100px] outline-none" />
//           }
//           placeholder={
//             <p className="text-muted-foreground">Tulis sejarah...</p>
//           }
//           ErrorBoundary={LexicalErrorBoundary}
//         />
//         <HistoryPlugin />
//         <OnChangePlugin
//           onChange={(editorState: EditorState) => {
//             editorState.read(() => {
//               const html = JSON.stringify(editorState); // untuk produksi, konversi ke HTML
//               onChange(html); // simplifikasi, nanti ganti jadi toHtml(editorState)
//             });
//           }}
//         />
//       </div>
//     </LexicalComposer>
//   );
// }
