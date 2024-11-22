// JavaScript to handle the To-Do List functionality
const addButton = document.getElementById('add-button');
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Function to add a new task
function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText) {
        // Create list item
        const li = document.createElement('li');

        // Task content
        const span = document.createElement('span');
        span.textContent = taskText;

        // Unchecked image
        const img = document.createElement('img');
        img.src = 'uncheck.png';
        img.alt = 'Unchecked';
        img.addEventListener('click', toggleTask);

        // Remove button
        const removeBtn = document.createElement('img');
        removeBtn.src = 'cancel.png';
        removeBtn.alt = 'Delete';
        removeBtn.addEventListener('click', () => li.remove());

        // Append elements
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(removeBtn);
        listContainer.appendChild(li);

        // Clear input
        inputBox.value = '';
    } else {
        alert('Please enter a task.');
    }
}

// Function to toggle task completion
function toggleTask(e) {
    const li = e.target.parentElement;
    if (li.classList.contains('checked')) {
        li.classList.remove('checked');
        e.target.src = 'uncheck.png';
    } else {
        li.classList.add('checked');
        e.target.src = 'checked.png';
    }
}

// Event listener for Add button
addButton.addEventListener('click', addTask);

// Event listener for Enter key
inputBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
