import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCreditCard, FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import Spinner from "react-bootstrap/Spinner";

const PaymentPage = () => {
  const { id } = useParams();
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games/${id}?key=0317e51d08004520b27468dfd9a308cc`
        );
        const data = await res.json();
        setGame(data);
      } catch (error) {
        console.log("Error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id]);

  const handlePayment = () => {
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setPaymentSuccessful(true);
    }, 2000); // Simulate 2 seconds processing time
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-zinc-900">
        <Spinner animation="grow" variant="secondary" />
        <h1 className="text-2xl font-bold text-gray-300 ml-4">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="bg-zinc-800 min-h-screen p-8 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-red-500">
        Let's Check Out the: {game.name}
      </h1>

      {paymentSuccessful ? (
        <div className="bg-green-700 p-6 rounded-lg shadow-md text-center">
          <FaCheckCircle className="text-5xl mb-4 text-green-400" />
          <h2 className="text-2xl font-semibold">Payment Successful!</h2>
          <p className="mt-2">Thank you for your purchase. Enjoy the game!</p>
        </div>
      ) : (
        <div className="bg-zinc-700 p-6 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaShoppingCart className="mr-2 text-blue-400 text-3xl" /> Purchase
            {game.name}
          </h2>
          <p className="mb-4">
            You are about to purchase {game.name}. Please confirm your payment
            details.
          </p>

          {/* Payment Form */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-300">
              Credit Card Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full p-2 rounded-md bg-zinc-600 text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-300">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full p-2 rounded-md bg-zinc-600 text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-300">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full p-2 rounded-md bg-zinc-600 text-white"
            />
          </div>

          <button
            onClick={handlePayment}
            className={`w-full p-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold ${
              processing ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={processing}
          >
            {processing ? "Processing..." : "Pay Now"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
