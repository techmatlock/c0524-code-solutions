type Props = {
  caption: string;
};

export function ImageDescription({ caption }: Props) {
  return (
    <div>
      <p>{caption}</p>
    </div>
  );
}
