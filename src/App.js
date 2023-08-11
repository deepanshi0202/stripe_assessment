import React from 'react';
import Register from "./components/Register";
import Login from './components/Login';
import PricingCards from './components/Pricing';
export default function App() {
  return (
    <div>
      <Register />
      <Login />
      <PricingCards />
    </div>
  );
}