type Props = {
  image: CharacterProps;
  isActive: boolean;
};

type CharacterProps = {
  src: string;
  alt: string;
};

export function ImageBanner({ image, isActive }: Props) {
  return (
    isActive && (
      <div className="flex justify-center w-5/12">
        {' '}
        <img className="w-full" src={image.src} alt={image.alt} />
      </div>
    )
  );
}
