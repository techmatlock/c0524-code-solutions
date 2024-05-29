interface Pokemon {
  number: string;
  name: string;
  description: string;
  imageUrl: string;
}

const pokedex: Pokemon[] = [
  {
    number: '001',
    name: 'Bulbasaur',
    description:
      'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png',
  },
  {
    number: '004',
    name: 'Charmander',
    description:
      'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png',
  },
  {
    number: '007',
    name: 'Squirtle',
    description:
      'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png',
  },
  {
    number: '002',
    name: 'Ivysaur',
    description:
      'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png',
  },
  {
    number: '005',
    name: 'Charmeleon',
    description:
      'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png',
  },
  {
    number: '008',
    name: 'Wartortle',
    description:
      'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png',
  },
  {
    number: '003',
    name: 'Venusaur',
    description:
      'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png',
  },
  {
    number: '006',
    name: 'Charizard',
    description:
      'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png',
  },
  {
    number: '009',
    name: 'Blastoise',
    description:
      'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png',
  },
];

function renderPokemon(pokemon: Pokemon): HTMLDivElement {
  const $outerDivEl = document.createElement('div');
  const $innerDivEl = document.createElement('div');
  const $lastInnerDivEl = document.createElement('div');
  const $pokemonImg = document.createElement('img');
  const $h2 = document.createElement('h2');
  const $h3 = document.createElement('h3');
  const $p = document.createElement('p');

  $outerDivEl.className = 'column-third';
  $innerDivEl.className = 'pokemon-card';
  $lastInnerDivEl.className = 'pokemon-card-text';
  $pokemonImg.setAttribute('src', pokemon.imageUrl);
  $h2.textContent = pokemon.name;
  $h3.textContent = pokemon.number;
  $p.textContent = pokemon.description;

  $outerDivEl.appendChild($innerDivEl);
  $innerDivEl.appendChild($pokemonImg);
  $innerDivEl.appendChild($lastInnerDivEl);
  $lastInnerDivEl.appendChild($h2);
  $lastInnerDivEl.appendChild($h3);
  $lastInnerDivEl.appendChild($p);

  return $outerDivEl;
}

const $rowElement = document.querySelector('.row');

if (!$rowElement) throw new Error('The $row query failed.');

for (let i = 0; i < pokedex.length; i++) {
  const pokemon = renderPokemon(pokedex[i]);
  $rowElement.appendChild(pokemon);
}
