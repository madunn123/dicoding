/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="flex items-center border-0 justify-center w-full h-screen">
      <Link to="/todo" className="text-white uppercase text-2xl font-semibold border-[#BBE1FA] border-2 py-3 w-[300px] text-center rounded-lg hover:border-red-600 hover:text-red-600 duration-700">View Todo</Link>
    </div>
  );
}
