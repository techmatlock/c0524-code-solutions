type Props = {
  image: CharacterProps;
  isActive: boolean;
};

type CharacterProps = {
  src: string;
  alt: string;
};

export function ImageBanner({ image, isActive }: Props) {
  return <div>{isActive && <img src={image.src} alt={image.alt} />}</div>;
}
