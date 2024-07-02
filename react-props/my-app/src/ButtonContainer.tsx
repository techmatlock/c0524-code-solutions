type Button = {
  btnText: string;
};

export function ButtonContainer({ btnText }: Button) {
  return (
    <div>
      <button>{btnText}</button>
    </div>
  );
}
