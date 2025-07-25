export default function Topbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow mb-6">
      <h1 className="text-xl font-semibold text-black">Welcome, Kareem 👋</h1>
      <div className="flex items-center space-x-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <button
          onClick={handleLogout}
          className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
