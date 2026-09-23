
import { useState } from "react";

function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className={`p-8 rounded-2xl ${theme.backgroundColor} ${theme.textColor} flex flex-col gap-6`}
      style={{ minWidth: 340, flex: "1 1 340px" }}
    >
      {/* Avatar + Info */}
      <div className="flex items-center gap-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${theme.avatarBg}`}
        >
          {user.avatar}
        </div>
        <div>
          <div className="font-bold text-xl leading-tight">{user.name}</div>
          <div className="text-sm text-gray-500 mt-0.5">{user.email}</div>
          <div className="flex gap-2 mt-2">
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${theme.badgeBg}`}>
              {user.role}
            </span>
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${theme.badgeBg}`}>
              {user.status}
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      {user.stats && (
        <div className="flex justify-between border-t border-white/40 pt-5">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="font-bold text-2xl">{value}</div>
              <div className="text-xs text-gray-500 capitalize mt-1">{key}</div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={actions.primary.onClick}
          className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${actions.primary.className}`}
        >
          {actions.primary.label}
        </button>
        <button
          onClick={actions.secondary.onClick}
          className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${actions.secondary.className}`}
        >
          {actions.secondary.label}
        </button>
      </div>
    </div>
  );
}

function ComplexProps() {
  const [message, setMessage] = useState("");

  const users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩‍💼",
        role: "Admin",
        status: "Active",
        stats: { Posts: 145, Followers: 2834, Following: 421 },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Alice's profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Alice"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👨‍💻",
        role: "Developer",
        status: "Online",
        stats: { Projects: 28, Commits: 1523, Reviews: 89 },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-100 to-teal-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Bob's profile"),
          className: "bg-green-500 text-white hover:bg-green-600",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => setMessage("Starting collaboration with Bob"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
  ];

  return (
    <div className="p-10 bg-white rounded-2xl shadow space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Complex/Nested Props</h2>
        <p className="text-sm text-gray-500 mt-1">
          Complex props allow you to pass nested objects and functions, enabling
          sophisticated component configurations and interactions.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-700 mb-4 text-base">
          User Profile Cards (Nested User, Theme, and Actions):
        </h3>
        <div className="flex flex-wrap gap-6">
          {users.map((userData, index) => (
            <UserProfileCard key={index} {...userData} />
          ))}
        </div>
      </div>

      {message && (
        <div className="px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-700">
          ✅ {message}
        </div>
      )}
    </div>
  );
}

export default ComplexProps;