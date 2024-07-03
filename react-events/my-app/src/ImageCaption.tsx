type Props = {
  caption: string;
  onCaptionClick: () => void;
};

export function ImageCaption({ caption, onCaptionClick }: Props) {
  return (
    <div>
      <h3 onClick={onCaptionClick}>{caption}</h3>
    </div>
  );
}
