import { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Shruti Ranjan", email: "shruti@gmail.com", role: "Admin" },
    { id: 2, name: "Priya Chaudhry", email: "priya@gmail.com", role: "Editor" },
    { id: 3, name: "Harsh Raj", email: "harsh@gmail.com", role: "Viewer" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.role) {
      alert("All fields are required!");
      return;
    }
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: "", email: "", role: "" });
  };

  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditingUser(userToEdit);
  };

  const handleUpdateUser = () => {
    setUsers(
      users.map((user) => (user.id === editingUser.id ? editingUser : user))
    );
    setEditingUser(null);
  };

  const handleDeleteUser = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirm) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center font-serif underline">
        User Management
      </h1>

      {/* Add New User */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 font-mono">Add New User</h2>
        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="border px-4 py-2 rounded w-full sm:w-1/3"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="border px-4 py-2 rounded w-full sm:w-1/3"
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="border px-4 py-2 rounded w-full sm:w-1/3"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
          <button
            onClick={handleAddUser}
            className="bg-green-500 text-white px-4 py-2 rounded w-full sm:w-auto text-sm"
          >
            Add User
          </button>
        </div>
      </div>

      {/* Edit User */}
      {editingUser && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 font-mono">Edit User</h2>
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              value={editingUser.name}
              onChange={(e) =>
                setEditingUser({ ...editingUser, name: e.target.value })
              }
              className="border px-4 py-2 rounded w-full sm:w-1/3"
            />
            <input
              type="email"
              value={editingUser.email}
              onChange={(e) =>
                setEditingUser({ ...editingUser, email: e.target.value })
              }
              className="border px-4 py-2 rounded w-full sm:w-1/3"
            />
            <select
              value={editingUser.role}
              onChange={(e) =>
                setEditingUser({ ...editingUser, role: e.target.value })
              }
              className="border px-4 py-2 rounded w-full sm:w-1/3"
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
            <button
              onClick={handleUpdateUser}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto text-sm"
            >
              Update User
            </button>
          </div>
        </div>
      )}

      {/* User Table */}
      <h2 className="text-2xl font-mono mb-4">Users List</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.role}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleEditUser(user.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
