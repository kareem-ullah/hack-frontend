import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", tasks: 10 },
  { name: "Tue", tasks: 15 },
  { name: "Wed", tasks: 5 },
  { name: "Thu", tasks: 20 },
  { name: "Fri", tasks: 12 },
  { name: "Sat", tasks: 18 },
  { name: "Sun", tasks: 9 },
];

export default function ChartSection() {
  return (
    <div className="bg-gray-800 p-4 rounded shadow text-white">
      <h2 className="text-lg font-semibold mb-4">Tasks Done This Week</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="tasks" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
