import { useState } from 'react';

type Props = {
  quotes: string[];
};

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchableList({ quotes }: Props) {
  const [input, setInput] = useState('');

  const list = quotes.filter((quote) =>
    quote.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <>
      <Search value={input} onChange={setInput} />
      <ListItems quotes={list} />
    </>
  );
}

function Search({ onChange, value }: SearchProps) {
  return (
    <div className="flex justify-center items-center">
      <img className="" src="../search-solid.svg" alt="" />
      <input
        className=" rounded-lg pl-8"
        type="text"
        onChange={(e) => onChange(e.currentTarget.value)}
        value={value}
        placeholder="search"></input>
    </div>
  );
}

function ListItems({ quotes }: Props) {
  if (quotes.length === 0) {
    return <h2>No items match the filter</h2>;
  }
  return (
    <ul>
      {quotes.map((quote, index) => (
        <li key={quote + index}>{quote}</li>
      ))}
    </ul>
  );
}
