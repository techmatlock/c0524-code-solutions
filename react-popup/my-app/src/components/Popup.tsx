import { createPortal } from "react-dom";

type Props = {
  isVisible: boolean;
  positionTo?: HTMLButtonElement | null;
}

export function Popup({ isVisible, positionTo }: Props) {
  if (!isVisible) return null;

  return createPortal(
    <div className="absolute top-2/4 left-2/4">
      <div className="flex justify-center shadow-xl w-40 h-20">
        {isVisible && (
          <ul>
            <li>item1</li>
            <li>item2</li>
          </ul>
        )}
      </div>
    </div>,
    document.body
  );
}
