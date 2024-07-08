type Props = {
  text: string;
}

export function GoToButton({ text }: Props) {

  return (
    <div className="flex justify-center">
      <button className="py-4 px-8 bg-white text-black shadow-sm border-4 border-black rounded-none">{ text === 'Prev' ? 'Prev' : 'Next'}</button>
    </div>
  )
}
