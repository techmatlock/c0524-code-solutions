import './ImageContainer.css';

type Props = {
  caption: string;
  onCaptionClick: () => void;
};

export function ImageContainer({ caption, onCaptionClick }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={onCaptionClick}
          className="image-fill"
          src={caption}
          alt="space-image"
        />
      </div>
    </div>
  );
}
