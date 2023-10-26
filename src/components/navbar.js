import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <h4>Navbar</h4>
        <ul>
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/about">Tentang</Link>
          </li>
          <li>
            <Link to="/contact">Kontak</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
