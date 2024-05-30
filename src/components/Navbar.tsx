'use client';

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/member">Member</Link></li>
      </ul>
      <style jsx>{`
        nav {
          background: #333;
          padding: 0.1rem;
        }
        ul {
          display: flex;
          list-style: none;
          justify-content: space-around;
        }
        li {
          margin: 0 1rem;
        }
        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
