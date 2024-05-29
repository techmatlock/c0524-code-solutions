const taskList = document.querySelector('.task-list');

if (!taskList) throw new Error('The taskList query failed.');

function handleClick(event: Event): void {
  const eventTarget = event.target as HTMLElement;
  console.log('eventTarget:', eventTarget);
  console.log('eventTarget.tagName:', eventTarget.tagName);

  if (eventTarget.tagName === 'BUTTON') {
    console.log('eventTarget.closest:', eventTarget.closest('.task-list-item'));
    const taskListItem = eventTarget.closest('.task-list-item');
    taskListItem?.remove();
  }
}

taskList.addEventListener('click', handleClick);
