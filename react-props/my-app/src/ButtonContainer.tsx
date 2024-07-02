type Props = {
  btnText: string;
};

export function ButtonContainer({ btnText }: Props) {
  return (
    <div>
      <button>{btnText}</button>
    </div>
  );
}
