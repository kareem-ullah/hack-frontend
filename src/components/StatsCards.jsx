import { LineChart, Line, ResponsiveContainer } from "recharts";

const completedData = [
  { value: 3 }, { value: 6 }, { value: 8 }, { value: 4 }, { value: 5 }
];
const progressData = [
  { value: 1 }, { value: 3 }, { value: 5 }, { value: 4 }, { value: 2 }
];
const pendingData = [
  { value: 2 }, { value: 2 }, { value: 1 }, { value: 3 }, { value: 2 }
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {/* Completed */}
      <div className="bg-gray-800 p-4 shadow rounded text-center">
        <h4 className="text-gray-400">Completed</h4>
        <p className="text-2xl font-bold text-green-400">24</p>
        <div className="h-20 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={completedData}>
              <Line type="monotone" dataKey="value" stroke="#4ade80" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* In Progress */}
      <div className="bg-gray-800 p-4 shadow rounded text-center">
        <h4 className="text-gray-400">In Progress</h4>
        <p className="text-2xl font-bold text-yellow-400">12</p>
        <div className="h-20 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progressData}>
              <Line type="monotone" dataKey="value" stroke="#facc15" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pending */}
      <div className="bg-gray-800 p-4 shadow rounded text-center">
        <h4 className="text-gray-400">Pending</h4>
        <p className="text-2xl font-bold text-red-400">6</p>
        <div className="h-20 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={pendingData}>
              <Line type="monotone" dataKey="value" stroke="#f87171" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
