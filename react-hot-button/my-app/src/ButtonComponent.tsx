type Props = {
  color: string;
  clicks: number;
  onButtonClick: () => void;
};
export function Button({ color, onButtonClick, clicks }: Props) {
  return (
    <>
      <button onClick={onButtonClick} style={{ backgroundColor: color }}>
        Hot Button
      </button>
      <h1>Number of clicks: {clicks}</h1>
    </>
  );
}
