import { v4 as uuidv4 } from 'uuid';

type Props = {
  items: string[];
};

export function Indicators({ items }: Props) {
  const buttons = [];
  for (let i = 0; i < items.length; i++) {
    buttons.push(
      <button key={uuidv4()} className="p-6 bg-white text-black shadow-sm border-4 border-black rounded-none">
        {i}
      </button>
    );
  }
  return <div className="flex justify-center m-1">{buttons}</div>;
}
