import './App.css';
import { Carousel } from './components/Carousel';

function App() {
  const images = [
    {
      src: '/images/fushiguro.webp',
      alt: 'Megumi Fushiguro',
    },
    {
      src: '/images/inumaki.webp',
      alt: 'Toge Inumaki',
    },
    {
      src: '/images/itadori.webp',
      alt: 'Yuji Itadori',
    },
    {
      src: '/images/kugisaki.webp',
      alt: 'Nobara Kugisaki',
    },
    {
      src: '/images/panda.webp',
      alt: 'Panda',
    },
    {
      src: '/images/zen-in.webp',
      alt: "Maki Zen'in",
    },
  ];

  return <Carousel images={images} />;
}

export default App;
