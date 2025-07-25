import { Home, ListTodo, Briefcase, Settings } from "lucide-react";

const menu = [
  { label: "Dashboard", icon: <Home size={20} />, active: true },
  { label: "Tasks", icon: <ListTodo size={20} /> },
  { label: "Projects", icon: <Briefcase size={20} /> },
  { label: "Settings", icon: <Settings size={20} /> },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-md hidden md:block">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-2xl font-bold">TaskPro</h2>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          {menu.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer transition ${
                item.active ? "bg-gray-800" : ""
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}