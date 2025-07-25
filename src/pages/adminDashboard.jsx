import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Topbar />

        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-2xl">120</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-lg font-semibold">Total Tasks</h3>
              <p className="text-2xl">75</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-lg font-semibold">Active Users</h3>
              <p className="text-2xl">15</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-lg font-semibold">Pending Reports</h3>
              <p className="text-2xl">4</p>
            </div>
          </div>

          {/* User Table */}
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-bold mb-4">User List</h2>
            <table className="w-full table-auto text-left">
              <thead>
                <tr>
                  <th className="border-b p-2">Name</th>
                  <th className="border-b p-2">Email</th>
                  <th className="border-b p-2">Role</th>
                  <th className="border-b p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Kareem</td>
                  <td className="p-2">kareem@example.com</td>
                  <td className="p-2">admin</td>
                  <td className="p-2">
                    <button className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2">Ullah</td>
                  <td className="p-2">ullah@example.com</td>
                  <td className="p-2">user</td>
                  <td className="p-2">
                    <button className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}



