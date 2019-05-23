import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DealCard from './DealCard';

const dealCard = {
  productName: "Football Season Ticket",
  amount: 100.0,
  saleProbability: 0.1234,
  factorsAgainstSale: [
    {
      name: "Distance",
      description: "> 20 miles from Stadium"
    },
    {
      name: "Expense",
      description: "Household income < $50,000"
    }
  ],
  factorsForSale: [
    {
      name: "Attendance",
      description: "Has previously attended 5 games"
    }
  ]
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Deal Card</h1>
        <DealCard {...dealCard} />
      </header>
    </div>
  );
}

// {...dealCard}

export default App;
