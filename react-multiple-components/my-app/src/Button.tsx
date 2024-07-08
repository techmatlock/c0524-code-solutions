type Props = {
  text: string;
  onClick: () => void;
  backgroundColor?: string;
};

export function Button({ text, onClick, backgroundColor }: Props) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        style={{ backgroundColor }}
        className="py-4 px-8 bg-white text-black shadow-sm border-4 border-black rounded-none">
        {text}
      </button>
    </div>
  );
}
