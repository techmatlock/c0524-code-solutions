import { useState } from "react";
import { Banner } from "./Banner";
import { GoToButton } from "./GoToButton";
import { Indicators } from "./Indicators";

type Props = {
  items: string[];
}

export function RotatingBanner ({ items }: Props) {

  const [count, setCount] = useState(0);

  return (
    <>
      <Banner item={items[count]}/>
      <GoToButton text={'Prev'}/>
      <Indicators items={items}/>
      <GoToButton text={'Next'}/>
    </>
  );
}
