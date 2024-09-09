import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { FaIdBadge, FaUser, FaEnvelope } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
const AdminUsers = () => {
  const { authorizationData } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationData,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <section className="p-4">
      <div className="mb-4">
        <h1 className="text-3xl font-semibold text-gray-800">Admin Data</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-5 border-b text-left text-gray-700">
                <div className="flex items-center gap-2">
                  <FaUser className="text-green-500" />
                  Name
                </div>
              </th>
              <th className="py-3 px-5 border-b text-left text-gray-700">
                <div className="flex items-center gap-2">
                  <FaIdBadge className="text-blue-500" />
                  phone
                </div>
              </th>
              <th className="py-3 px-5 border-b text-left text-gray-700">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-red-500" />
                  Email
                </div>
              </th>
              <th className="py-3 px-5 border-b text-left text-gray-700">
                <div className="flex items-center gap-2">
                  <FaUserEdit className="text-blue-500" />
                 Update
                </div>
              </th>
              <th className="py-3 px-5 border-b text-left text-gray-700">
                <div className="flex items-center gap-2">
                  <AiOutlineDelete className="text-red-500 text-xl" />
                Delete
                </div>
              </th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id || index} className="hover:bg-gray-50">
                <td className="py-3 px-5 border-b text-gray-600">
                  {user.username}
                </td>
                <td className="py-3 px-5 border-b text-gray-600">
                  {user.phone}
                </td>
                <td className="py-3 px-5 border-b text-gray-600">
                  {user.email}
                </td>
                <td className="py-3 px-5 border-b text-gray-600">
                  update
                </td>
                <td className="py-3 px-5 border-b text-gray-600">
                  delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminUsers;
