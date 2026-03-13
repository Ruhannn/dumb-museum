import { useLoaderData } from "react-router";
import { Eye, Heart, ThumbsDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { getWantedIdeasID, getUnwantedIdeasID } from "../utils/localstorage";

export default function Dashboard() {
  const products = useLoaderData();

  const wantedIds = getWantedIdeasID();
  const unwantedIds = getUnwantedIdeasID();

  const wantedCount = wantedIds.length;
  const unwantedCount = unwantedIds.length;

  const barData = [...products]
    .sort((a, b) => b.views - a.views)
    .slice(0, 6)
    .map((p) => ({
      name: p.name.length > 11 ? p.name.slice(0, 11) + "…" : p.name,
      views: p.views,
    }));

  const pieData = [
    { name: "Wanted", value: wantedCount, color: "var(--color-success)" },
    { name: "Unwanted", value: unwantedCount, color: "var(--color-error)" },
    {
      name: "Neutral",
      value: products.length - wantedCount - unwantedCount,
      color: "var(--color-primary)",
    },
  ].filter((d) => d.value > 0);

  return (
    <main className="px-6 my-10 space-y-8 ">
      <h1 className="text-3xl font-newsreader font-extrabold italic text-primary">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="stat bg-base-200 rounded-box">
          <div className="stat-figure text-success">
            <Heart size={28} />
          </div>
          <div className="stat-title">Wanted Items</div>
          <div className="stat-value text-success">{wantedCount}</div>
        </div>
        <div className="stat bg-base-200 rounded-box">
          <div className="stat-figure text-error">
            <ThumbsDown size={28} />
          </div>
          <div className="stat-title">Unwanted Items</div>
          <div className="stat-value text-error">{unwantedCount}</div>
        </div>
        <div className="stat bg-base-200 rounded-box">
          <div className="stat-figure text-primary">
            <Eye size={28} />
          </div>
          <div className="stat-title">Total Collection</div>
          <div className="stat-value">{products.length}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-base-200 rounded-box p-5">
          <h2 className="font-bold text-lg mb-4">Top Items by Views</h2>

          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.4} />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis
                tick={{ fontSize: 11 }}
                tickFormatter={(v) =>
                  new Intl.NumberFormat("en", { notation: "compact" }).format(v)
                }
              />
              <Tooltip
                formatter={(v) => [
                  new Intl.NumberFormat("en").format(Number(v)),
                  "Views",
                ]}
              />
              <Bar
                dataKey="views"
                fill="var(--color-secondary)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-base-200 rounded-box p-5">
          <h2 className="font-bold text-lg mb-4">Your Preferences</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
              >
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}
