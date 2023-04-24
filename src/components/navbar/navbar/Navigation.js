import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../../data/dataNav';

export default function Navigation({ bg, setBg }) {
    const changeBg = () => {
      setBg(bg === "bg-[#5f43fb]" ? "bg-red-700" : "bg-[#5f43fb]");
    };

  return (
    <nav
      className={`${bg} text-white md:flex justify-between px-20 py-4 text-sm items-center`}
    >
      <a href="/" className="uppercase font-bold text-3xl">
        Goat.
      </a>
      <div className="flex space-x-3 items-center">
        <ul className="flex space-x-6 items-center justify-center">
          {navItems.map((navItem, index) => (
            <li key={index}>
              <Link to={navItem.slug}>{navItem.title}</Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => changeBg()}
          className="bg-green-200 text-black p-1 rounded-lg"
        >
          Change BG
        </button>
      </div>
    </nav>
  );
}
