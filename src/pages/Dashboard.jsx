import React from "react";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">Please login first</h2>
      </div>
    );
  }

  const role = user?.roleId?.name;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#0B253F] text-white p-5 hidden md:block">
        <h2 className="text-xl font-bold mb-6">CargoMate</h2>

        <ul className="space-y-3">
          <li className="hover:bg-white/10 p-2 rounded cursor-pointer">
            Dashboard
          </li>
          <li className="hover:bg-white/10 p-2 rounded cursor-pointer">
            Orders
          </li>
          <li className="hover:bg-white/10 p-2 rounded cursor-pointer">
            Profile
          </li>
        </ul>

        {/* Logout */}
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
          className="mt-10 bg-red-500 px-4 py-2 rounded w-full"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            {role === "b2b" ? "B2B Dashboard 🏢" : "User Dashboard 👤"}
          </h1>

          <div className="bg-white px-4 py-2 rounded shadow">
            Welcome {user.name} 👋
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {role === "b2b" ? (
            <>
              <Card title="Total Clients" value="25" />
              <Card title="Bulk Orders" value="10" />
              <Card title="Revenue" value="₹1.2L" />
            </>
          ) : (
            <>
              <Card title="Total Orders" value="12" />
              <Card title="Active Requests" value="3" />
              <Card title="Saved Items" value="8" />
            </>
          )}
        </div>

        {/* Extra Section */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">
            Recent Activity
          </h2>
          <p className="text-gray-500 text-sm">
            No recent activity available. This section can be connected to real data later.
          </p>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-xl font-bold mt-2">{value}</p>
    </div>
  );
}