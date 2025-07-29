"use client";

import { UploadCloud, Camera, X } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils"; // jika punya helper cn

type Props = {
  value?: string | null;
  onChange: (file: File) => void;
  onRemove?: () => void;
  className?: string;
};

export default function ImageDropzone({
  value,
  onChange,
  onRemove,
  className,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file?: File) => {
    if (!file || !file.type.startsWith("image/")) {
      alert("Silakan pilih file gambar.");
      return;
    }
    onChange(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-xs aspect-square border border-dashed border-gray-400 rounded-lg overflow-hidden cursor-pointer group",
        className
      )}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {value ? (
        <>
          <Image src={value} alt="Preview" fill className="object-cover" />
          {onRemove && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
              className="absolute top-1 right-1 bg-white p-1 rounded-full shadow hover:bg-red-100"
            >
              <X className="w-4 h-4 text-red-600" />
            </button>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 group-hover:bg-gray-50 transition">
          <UploadCloud className="w-8 h-8 mb-2" />
          <p className="text-sm text-center">Klik atau tarik gambar ke sini</p>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={(e) => {
          const file = e.target.files?.[0];
          handleFile(file);
        }}
        className="hidden"
      />
    </div>
  );
}
