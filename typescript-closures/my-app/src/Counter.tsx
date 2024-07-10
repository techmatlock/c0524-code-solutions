import { useCallback, useEffect, useState } from 'react';

type Data = {
  foo: string;
};

export function Counter() {
  const [data, setData] = useState<Data>();
  const [counter, setCounter] = useState(0);

  const getData = useCallback(() => {
    return { foo: 'bar' };
  }, []);

  useEffect(() => {
    const data = getData();
    setData(data); // state setter schedules re-render of component
    setCounter((prev) => prev + 1);
  }, [getData]);

  // don't want to create a new function on every re-render so use useCallback

  // if you have a function in a dependency array, you need to use useCallback.
  // React will keep track of the getData function.  Persists through re-render

  // when I use the function keyword, it moves it to the top (hoisting).
  // an arrow function does not get hoisted.

  // a new getData reference gets created every time.
  // last time counter component function as soon as we re-rendered component garbage collector removed variables.

  return (
    <div>
      Fetched {JSON.stringify(data)} {counter} times
    </div>
  );
}
