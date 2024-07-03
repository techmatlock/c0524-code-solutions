import './ImageContainer.css';

type Props = {
  caption: string;
};

export function ImageContainer({ caption }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={caption} alt="space-image" />
      </div>
    </div>
  );
}
