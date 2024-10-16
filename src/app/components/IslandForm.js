"use client";

import Image from "next/image";
import { useState } from "react";

function IslandForm({ island }) {
  const [formData, setFormData] = useState({ fullName: "", phoneNumber: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (window.confirm(`Are you sure you want to book ${island.name}?`)) {
      event.target.reset();
    }
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <Image src={island.img} alt={island.name} width="300" height="300" />
      <h3>Book a trip to {island.name} island</h3>
      <form onSubmit={handleSubmit}>
        <input placeholder="Type Full Name" />
        <input type="tel" placeholder="Type Phone Number" />
        <button type="submit" className="book">
          Book for today!
        </button>
      </form>
    </div>
  );
}

export default IslandForm;
