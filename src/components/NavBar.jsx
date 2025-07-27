import { useState } from 'react';
import './NavBar.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MySite</div>
      <button className="hamburger" onClick={() => setOpen(!open)}>☰</button>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
