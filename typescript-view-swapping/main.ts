const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

if (!$tabContainer) throw new Error('$tabContainer does not exist');
if (!$tabElements) throw new Error('$tabElements does not exist');
if (!$viewElements) throw new Error('$viewElements does not exist');

function handleClick(event: Event): void {
  const $eventTarget = event.target as HTMLDivElement;

  if (!$eventTarget.matches('.tab')) return;

  if ($eventTarget.matches('.tab')) {
    $tabElements.forEach((tab) => {
      tab.classList.remove('active');
      if (tab === $eventTarget) tab.classList.add('active');
    });
  }

  const targetView = $eventTarget.getAttribute('data-view');

  if (!targetView) throw new Error('targetView does not exist');
  console.log('targetView:', targetView);

  $viewElements.forEach((view) => {
    view.classList.add('hidden');
    if (view.getAttribute('data-view') === targetView) {
      view.classList.remove('hidden');
    }
  });
}

$tabContainer.addEventListener('click', handleClick);
