import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  isOpen: boolean;
  position?: HTMLButtonElement | null;
  onClose: () => void;
  children: ReactNode;
  opacity?: number;
};

export function Popup({ isOpen, position, onClose, children, opacity }: Props) {
  const r = position?.getBoundingClientRect();
  const top = r ? r.top + r.height : '50%';
  const left = r ? r.left + r.width / 2 : '50%';

  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        className={`fixed top-0 w-screen h-screen bg-black opacity-${opacity}`}
        onClick={onClose}></div>
      <div
        style={{ top, left }}
        className="absolute top-2/4 left-2/4 w-20 shadow-md bg-gray-700 text-white">
        {children}
      </div>
    </>,
    document.body
  );
}
