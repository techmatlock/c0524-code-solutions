import { Link, Outlet } from 'react-router-dom';
import { type MenuItem } from './Header';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

type Props = {
  menuItems: MenuItem[];
};

export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div>
      <div className="flex">
        <div
          className={`${
            isOpen ? 'w-60 z-10 bg-gray-500' : 'w-20 z-10 bg-gray-500'
          }`}>
          <div className="flex basis-full pt-8 pl-2">
            <FaBars onClick={handleClick} className="text-2xl" />
          </div>
          <div className={`${isOpen ? 'flex pt-8 pl-2' : 'hidden'}`}>
            <h2 className="text-2xl">Hylian Shopping</h2>
          </div>
          <nav>
            <ul>
              {menuItems.map((item, index) => (
                <li key={item.name + index}>
                  <Link to={item.path}>
                    <div className="inline-block max-w-6">
                      <img className="w-full" src={item.iconUrl} alt="" />
                    </div>
                  </Link>
                  {isOpen ? item.name : ''}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
