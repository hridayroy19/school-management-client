// components/DashboardCards.tsx
import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react"; // Assuming lucide-react for icons

// Type definition for card data
type CardData = {
  title: string;
  value: string;
  comparison: string;
  isPositive: boolean;
};

// Data for the cards
const cards: CardData[] = [
  {
    title: "Customers",
    value: "45,320",
    comparison: "5.25%",
    isPositive: true,
  },
  {
    title: "Orders",
    value: "45,320",
    comparison: "1.23%",
    isPositive: false,
  },
  {
    title: "Earnings",
    value: "$7,524",
    comparison: "7.85%",
    isPositive: false,
  },
  {
    title: "Growth",
    value: "+ 35.52%",
    comparison: "3.72%",
    isPositive: true,
  },
];

const DashboardCards: React.FC = () => {
  return (
    <div className="p-6 rounded-md  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-gray-900 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            {card.title}
          </h3>
          <p className="text-2xl font-bold text-white">{card.value}</p>
          <div className="flex items-center text-sm mt-1">
            {card.isPositive ? (
              <ChevronUpIcon className="w-4 h-4 text-green-400 mr-1" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 text-red-400 mr-1" />
            )}
            <p className={card.isPositive ? "text-green-400" : "text-red-400"}>
              {card.comparison}
            </p>
            <span className="text-gray-500 ml-2">Since last month</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
