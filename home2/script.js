const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Функция добавления задачи
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.className = 'mr-2';

    taskCheckbox.addEventListener('change', function () {
        if (taskCheckbox.checked) {
            taskLabel.classList.add('completed');
        } else {
            taskLabel.classList.remove('completed');
        }
    });

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    taskList.appendChild(taskItem);

    taskInput.value = '';
    addTaskButton.disabled = true;
}

// Событие для кнопки "Добавить"
addTaskButton.addEventListener('click', addTask);

// Событие для поля ввода
taskInput.addEventListener('input', function () {
    addTaskButton.disabled = taskInput.value.trim() === '';
});