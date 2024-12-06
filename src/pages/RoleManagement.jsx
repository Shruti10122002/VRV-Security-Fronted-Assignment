import { useState } from "react";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Execute"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ]);

  const [newRole, setNewRole] = useState({ name: "", permissions: [] });
  const [editingRole, setEditingRole] = useState(null);

  const handleAddRole = () => {
    if (!newRole.name || newRole.permissions.length === 0) {
      alert("All fields are required!");
      return;
    }
    setRoles([...roles, { id: roles.length + 1, ...newRole }]);
    setNewRole({ name: "", permissions: [] });
  };

  const handleEditRole = (id) => {
    const roleToEdit = roles.find((role) => role.id === id);
    setEditingRole(roleToEdit);
  };

  const handleUpdateRole = () => {
    setRoles(
      roles.map((role) => (role.id === editingRole.id ? editingRole : role))
    );
    setEditingRole(null);
  };

  const handleDeleteRole = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this Role?"
    );
    if (confirm) {
      setRoles(roles.filter((role) => role.id !== id));
    }
  };

  const handlePermissionChange = (permission) => {
    setNewRole((prevRole) => {
      const updatedPermissions = prevRole.permissions.includes(permission)
        ? prevRole.permissions.filter((perm) => perm !== permission)
        : [...prevRole.permissions, permission];
      return { ...prevRole, permissions: updatedPermissions };
    });
  };

  const handleEditPermissionChange = (permission) => {
    setEditingRole((prevRole) => {
      const updatedPermissions = prevRole.permissions.includes(permission)
        ? prevRole.permissions.filter((perm) => perm !== permission)
        : [...prevRole.permissions, permission];
      return { ...prevRole, permissions: updatedPermissions };
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center font-serif underline">
        Role Management
      </h1>

      {/* Add New Role */}
      <div className="mb-6">
        <h2 className="text-2xl mb-4 font-mono font-semibold">Add new Role</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Role Name"
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            className="border px-2 size-12 mt-1 rounded w-full sm:w-1/3"
          />

          <div className="flex flex-wrap gap-4 sm:w-2/2">
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Read"
                checked={newRole.permissions.includes("Read")}
                onChange={() => handlePermissionChange("Read")}
                className="mr-2"
              />
              Read
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Write"
                checked={newRole.permissions.includes("Write")}
                onChange={() => handlePermissionChange("Write")}
                className="mr-2"
              />
              Write
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Execute"
                checked={newRole.permissions.includes("Execute")}
                onChange={() => handlePermissionChange("Execute")}
                className="mr-2"
              />
              Execute
            </label>
          </div>

          <button
            onClick={handleAddRole}
            className="bg-green-500 text-white px-2 rounded sm:mt-0 text-sm"
          >
            Add Role
          </button>
        </div>
      </div>

      {/* Edit Role */}
      {editingRole && (
        <div className="mb-6">
          <h2 className="text-2xl mb-4 font-mono font-semibold">Edit Role</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={editingRole.name}
              onChange={(e) =>
                setEditingRole({ ...editingRole, name: e.target.value })
              }
              className="border px-2 size-12 mt-1 rounded w-full sm:w-1/3"
            />

            <div className="flex flex-wrap gap-4 sm:w-2/2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Read"
                  checked={editingRole.permissions.includes("Read")}
                  onChange={() => handleEditPermissionChange("Read")}
                  className="mr-2"
                />
                Read
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Write"
                  checked={editingRole.permissions.includes("Write")}
                  onChange={() => handleEditPermissionChange("Write")}
                  className="mr-2"
                />
                Write
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Execute"
                  checked={editingRole.permissions.includes("Execute")}
                  onChange={() => handleEditPermissionChange("Execute")}
                  className="mr-2"
                />
                Execute
              </label>
            </div>

            <button
              onClick={handleUpdateRole}
              className="bg-blue-500 text-white px-2 py-1 rounded mt-4 sm:mt-0 w-15 text-sm"
            >
              Update Role
            </button>
          </div>
        </div>
      )}

      {/* Role Table */}
      <div className="overflow-x-auto">
        <h3 className="text-2xl font-mono mb-4">Roles List</h3>
        <table className="table-auto w-full border-collapse border border-gray-300 mt-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Role Name</th>
              <th className="border border-gray-300 px-4 py-2">Permissions</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{role.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {role.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {role.permissions.join(", ")}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleEditRole(role.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteRole(role.id)}
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

export default RoleManagement;
