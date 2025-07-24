// components/PotensiCard.tsx
interface PotensiCardProps {
  title: string;
  image: string;
  description: string;
}

export const PotensiCard = ({
  title,
  image,
  description,
}: PotensiCardProps) => (
  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);
