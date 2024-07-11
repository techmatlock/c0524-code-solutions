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
      <div>
        <img
          className="max-h-96 object-contain w-full"
          src={image.src}
          alt={image.alt}
        />
      </div>
    )
  );
}
