import { useState } from "react";

const PermissionsManagement = () => {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "Admin",
      permissions: { read: true, write: true, execute: true },
    },
    {
      id: 2,
      name: "Editor",
      permissions: { read: true, write: true, execute: false },
    },
    {
      id: 3,
      name: "Viewer",
      permissions: { read: true, write: false, execute: false },
    },
  ]);

  // Permission Toggle
  const handleTogglePermission = (roleId, permissionType) => {
    setRoles(
      roles.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: {
                ...role.permissions,
                [permissionType]: !role.permissions[permissionType],
              },
            }
          : role
      )
    );
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center font-serif underline">
        Permissions Management
      </h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-2 md:px-4 py-2">Role</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">Read</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">
                Write
              </th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">
                Execute
              </th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="text-center">
                <td className="border border-gray-300 px-2 md:px-4 py-2">
                  {role.name}
                </td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">
                  <input
                    type="checkbox"
                    checked={role.permissions.read}
                    onChange={() => handleTogglePermission(role.id, "read")}
                    className="cursor-pointer"
                  />
                </td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">
                  <input
                    type="checkbox"
                    checked={role.permissions.write}
                    onChange={() => handleTogglePermission(role.id, "write")}
                    className="cursor-pointer"
                  />
                </td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">
                  <input
                    type="checkbox"
                    checked={role.permissions.execute}
                    onChange={() => handleTogglePermission(role.id, "execute")}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PermissionsManagement;
