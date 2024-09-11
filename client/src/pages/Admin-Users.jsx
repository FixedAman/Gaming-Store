import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { FaIdBadge, FaUser, FaEnvelope, FaUserEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

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

  const geDeleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationData,
          },
        }
      );
      const deleteData = await response.json();
      console.log(`data${deleteData}`);
      if (response.ok) {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <section className="p-2 bg-zinc-800 min-h-screen flex items-start justify-start">
      <div className="w-full">
        <div className="mb-2 text-center">
          <h1 className="text-3xl font-semibold text-red-400">Admin Data</h1>
        </div>
        <div className="overflow-x-auto bg-white rounded-lg shadow-2xl">
          <table className="w-full border  rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-300">
                <th className="py-4 px-6 border-b text-left text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-green-500" />
                    Name
                  </div>
                </th>
                <th className="py-4 px-6 border-b text-left text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaIdBadge className="text-blue-500" />
                    Phone
                  </div>
                </th>
                <th className="py-4 px-6 border-b text-left text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-red-500" />
                    Email
                  </div>
                </th>
                <th className="py-4 px-6 border-b text-left text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaUserEdit className="text-blue-500" />
                    Update
                  </div>
                </th>
                <th className="py-4 px-6 border-b text-left text-gray-700">
                  <div className="flex items-center gap-2">
                    <AiOutlineDelete className="text-red-500 text-xl" />
                    Delete
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id || index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors duration-200`}
                >
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
                    <Link
                      to={`/admin/users/${user._id}/edit`}
                      className="text-blue-500 underline hover:text-blue-700"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="py-3 px-5 border-b text-gray-600">
                    <button
                      onClick={() => geDeleteUser(user._id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
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
    </section>
  );
};

export default AdminUsers;
