import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const genderData = [
  { name: "Laki-laki", value: 320 },
  { name: "Perempuan", value: 280 },
];

const COLORS = ["#3b82f6", "#ec4899"];

export function DemografiChart() {
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
