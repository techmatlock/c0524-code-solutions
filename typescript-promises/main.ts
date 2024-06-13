import { takeAChance } from './take-a-chance.js';

takeAChance('Mark')
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));
