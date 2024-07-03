type Props = {
  caption: string;
  onCaptionClick: () => void;
};

export function ImageDescription({ caption, onCaptionClick }: Props) {
  return (
    <div>
      <p onClick={onCaptionClick}>{caption}</p>
    </div>
  );
}
