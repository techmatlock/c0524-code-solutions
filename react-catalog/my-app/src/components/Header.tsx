import { Outlet } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="bg-gray-500 p-4">
        <nav>
          <ul>
            <li className="inline px-2">About</li>
            <li className="inline px-2">Catalog</li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
