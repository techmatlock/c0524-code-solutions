import { v4 as uuidv4 } from 'uuid';

type Props = {
  count: number;
};

export function Indicators({ count }: Props) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button key={uuidv4()} className="p-6 bg-white text-black shadow-sm border-4 border-black rounded-none">
        {i}
      </button>
    );
  }
  return <div className="flex justify-center m-1">{buttons}</div>;
}
