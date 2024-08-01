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
            isOpen
              ? 'h-screen transition-all duration-500 w-60 z-10 bg-white shadow-md'
              : 'h-screen transition-all duration-500 w-20 z-10 bg-white shadow-sm'
          }`}>
          <div className="flex basis-full pt-8 pl-4">
            <FaBars onClick={handleClick} className="text-2xl mb-2" />
          </div>
          <div className={`${isOpen ? 'flex pt-8 pl-2' : 'hidden'}`}>
            <h2 className="text-2xl">Hylian Shopping</h2>
          </div>
          <nav>
            <ul className="flex flex-wrap">
              {menuItems.map((item, index) => (
                <div className="basis-full pl-2">
                  <li
                    className="flex p-2 hover:bg-slate-100"
                    key={item.name + index}>
                    <Link to={item.path}>
                      <div className="inline-block max-w-6 mr-2">
                        <img className="w-full" src={item.iconUrl} alt="" />
                      </div>
                    </Link>
                    {isOpen ? item.name : ''}
                  </li>
                </div>
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
