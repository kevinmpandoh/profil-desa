// components/PotensiCard.tsx
interface PotensiCardProps {
  judul: string;
  image_url: string;
  deskripsi: string;
}

export const PotensiCard = ({
  judul,
  image_url,
  deskripsi,
}: PotensiCardProps) => (
  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
    <img src={image_url} alt={judul} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{judul}</h2>
      <p className="text-sm text-gray-600">{deskripsi}</p>
    </div>
  </div>
);
