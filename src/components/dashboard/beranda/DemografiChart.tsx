import demografiService from "@/services/demografi.service";
import { useQuery } from "@tanstack/react-query";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#3b82f6", "#ec4899"];

export function DemografiChart({ data }: { data: any }) {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["demografi"],
  //   queryFn: demografiService.get,
  // });

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  // const totalKK =
  //   data?.reduce((acc: any, cur: any) => acc + cur.jumlah_kk, 0) || 0;
  // const totalL =
  //   data?.reduce((acc: any, cur: any) => acc + cur.laki_laki, 0) || 0;
  // const totalP =
  //   data?.reduce((acc: any, cur: any) => acc + cur.perempuan, 0) || 0;

  const genderData = [
    { name: "Laki-laki", value: data.laki_laki },
    { name: "Perempuan", value: data.perempuan },
  ];

  return (
    <div className="bg-white dark:bg-muted p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">Demografi Penduduk</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={genderData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {genderData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
