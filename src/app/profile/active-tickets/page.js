"use client";

import TicketsCard from "@components/active-tickets/TicketsCard";
import React, { useState } from "react";

const ActiveTicketsPage = () => {
  const [activeTickets, setActiveTickets] = useState([
    {
      title: "Win",
      prize_name: "Iphone 14 pro max",
      prize_details: "",
      draw_date: "29 June,2023",
    },
    {
      title: "Win",
      prize_name: "Tesla V4 Car",
      prize_details: "",
      draw_date: "29 June,2023",
    },
  ]);
  return (
    <div>
      <div>
        <p className="prim_text_2xl mb-8">Active Tickets</p>
        {activeTickets.length === 0 ? (
          <div className="max-w-[640px] min-h-[183px] p-6 bg-white rounded-xl flex flex-col justify-center items-center">
            <p className="prim_text_lg_reg mb-3">
              Start Shopping to win tickets
            </p>
            <button className="btn_primary w-full lg:min-w-[300px]">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className=" w-full grid grid-cols-1 gap-6">
            {activeTickets?.map((tickets, index) => {
              return <TicketsCard key={index} tickets={tickets} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveTicketsPage;
