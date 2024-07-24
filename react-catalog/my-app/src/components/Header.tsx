import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header className="bg-gray-400 p-4">
        <nav>
          <ul className="text-white">
            <Link to="/about" className="inline px-2">
              About
            </Link>
            <Link to="/" className="inline px-2">
              Catalog
            </Link>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
