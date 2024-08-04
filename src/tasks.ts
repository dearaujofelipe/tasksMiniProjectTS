const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = [];

function createTask(event: SubmitEvent) {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    //add task to list
    //render tasks
    //update local storage
    formInput.value = '';
    return;
  }
  alert('please enter a task description');
}

function addTask(task: Task): void {
  tasks.push(task);
}

taskForm?.addEventListener('submit', createTask);
