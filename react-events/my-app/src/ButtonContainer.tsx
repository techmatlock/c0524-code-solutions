type Props = {
  buttonText: string;
  onCaptionClick: () => void;
};

export function ButtonContainer({ buttonText, onCaptionClick }: Props) {
  return (
    <div>
      <button onClick={onCaptionClick}>{buttonText}</button>
    </div>
  );
}
