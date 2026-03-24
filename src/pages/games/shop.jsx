import React, { useState } from "react";
import Navbar from "../../components/homeNavbar";
import Coin from "../../assets/coin.png";

const coins = Array(8).fill({
  amount: "10,000 coins",
  price: "₦1000",
});

export default function CoinShop() {
  const [activeTab, setActiveTab] = useState("coins");

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
        <div className="w-full max-w-8xl bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-purple-500 text-white px-10 py-3 rounded-lg font-semibold shadow-md">
                Coin Shop
              </div>
              <div className="absolute -left-6 top-2 w-6 h-6 bg-purple-400 rotate-45"></div>
              <div className="absolute -right-6 top-2 w-6 h-6 bg-purple-400 rotate-45"></div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-16 mb-8 text-sm font-medium">
            <button
              onClick={() => setActiveTab("coins")}
              className={`pb-2 border-b-2 ${
                activeTab === "coins"
                  ? "text-purple-600 border-purple-600"
                  : "text-gray-400 border-transparent"
              }`}
            >
              Coin List
            </button>

            <button
              onClick={() => setActiveTab("history")}
              className={`pb-2 border-b-2 ${
                activeTab === "history"
                  ? "text-purple-600 border-purple-600"
                  : "text-gray-400 border-transparent"
              }`}
            >
              Coin History
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {coins.map((coin, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 flex flex-col items-center shadow-sm"
              >
                <p className="text-xs text-gray-600 mb-2">{coin.amount}</p>

                <div className="w-28 h-28 rounded-full flex items-center justify-center mb-3 shadow-inner">
                  <img
                    src={Coin}
                    alt="Coin"
                  />
                </div>

                <button className="mt-auto bg-purple-500 text-white text-sm px-4 py-1 rounded-full shadow">
                  {coin.price}
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-10 text-sm text-gray-500">
            <p>Showing 1-8 of 72 users</p>

            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border rounded-md">Previous</button>
              <button className="px-3 py-1 bg-purple-500 text-white rounded-md">
                1
              </button>
              <button className="px-3 py-1 border rounded-md">2</button>
              <button className="px-3 py-1 border rounded-md">3</button>
              <button className="px-3 py-1 border rounded-md">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
