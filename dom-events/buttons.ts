const clickBtn = document.querySelector('.click-button'); // returns a button element object

if (!clickBtn) throw new Error('clickBtn not found.');

function handleClick(event: Event): void {
  console.log('button clicked');
  console.log('event', event);

  console.log('event.target', event.target);
}

clickBtn.addEventListener('click', handleClick);

// Mouseover Event
const hoverBtn = document.querySelector('.hover-button');

if (!hoverBtn) throw new Error('hoverBtn not found');

function handleMouseover(event: Event): void {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target property', event.target);
}

hoverBtn.addEventListener('mouseover', handleMouseover); // mouseover is an event listener on the button element object

const dblClickBtn = document.querySelector('.double-click-button');

if (!dblClickBtn) throw new Error('dblClickBtn not found.');

function handleDoubleClick(event: Event): void {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

dblClickBtn.addEventListener('dblclick', handleDoubleClick);
