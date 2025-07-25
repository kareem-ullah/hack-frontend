const tasks = [
  { id: 1, title: "Design Dashboard UI", status: "In Progress" },
  { id: 2, title: "Setup Backend Auth", status: "Completed" },
  { id: 3, title: "Mobile Responsive Fixes", status: "Pending" },
];

export default function TaskList() {
  return (
    <div className="bg-gray-800 p-4 shadow rounded text-white">
      <h4 className="text-lg font-semibold mb-4">Task List</h4>
      <ul className="divide-y divide-gray-700">
        {tasks.map((task) => (
          <li key={task.id} className="py-2 flex justify-between">
            <span>{task.title}</span>
            <span
              className={`text-sm font-medium ${
                task.status === "Completed"
                  ? "text-green-400"
                  : task.status === "Pending"
                  ? "text-red-400"
                  : "text-yellow-400"
              }`}
            >
              {task.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
