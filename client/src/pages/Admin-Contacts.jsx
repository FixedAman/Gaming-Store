import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const [data, setData] = useState([]);
  const { authorizationData } = useAuth();
  const getContactData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contact`, {
        method: "GET",
        headers: {
          Authorization: authorizationData,
        },
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contact/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationData,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        toast.success("deleted successfully");
        getContactData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  return (
    <>
      <section className="p-8 bg-gray-100">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Contact Data</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Message</th>
                <th className="py-3 px-6 text-left">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((currElem, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 transition duration-200 ease-in-out"
                  >
                    <td className="py-3 px-6">{currElem.username}</td>
                    <td className="py-3 px-6">{currElem.email}</td>
                    <td className="py-3 px-6">{currElem.message}</td>
                    <td className="py-3 px-6">
                      <button onClick={() => deleteUser(currElem._id)}>
                        delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="py-4 px-6 text-center text-gray-500"
                  >
                    No contact data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminContacts;
