import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

interface CardWithActionsProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  description?: string;
  onEdit: () => void;
  onDelete: () => void;
}

export default function CardWithActions({
  imageUrl,
  title,
  subtitle,
  description,
  onEdit,
  onDelete,
}: CardWithActionsProps) {
  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow border bg-white flex flex-col">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-800 ">{title}</h2>
        {subtitle && (
          <p className="text-base text-gray-500 mt-0.5">{subtitle}</p>
        )}
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={onEdit} variant={"outline"}>
            <Edit size={16} className="mr-1" />
            Edit
          </Button>
          <Button onClick={onDelete} variant={"outline"}>
            <Trash2 size={16} className="mr-1" />
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
}
