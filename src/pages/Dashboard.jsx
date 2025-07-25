import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ChartSection from "../components/ChartSection";
import StatsCards from "../components/StatsCards";
import TaskList from "../components/TaskList";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar />
      <main className="flex-1 ml-64 p-4">
        <Topbar />
        <StatsCards />
        <ChartSection />
        <TaskList />
      </main>
    </div>
  );
}
