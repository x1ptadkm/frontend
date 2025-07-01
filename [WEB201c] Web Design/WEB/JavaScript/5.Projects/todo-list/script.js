let tasks = [];
let currentFilter = 'all';

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    
    if (text) {
        tasks.push({
            id: Date.now(),
            text: text,
            completed: false
        });
        input.value = '';
        renderTasks();
    }
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}

function filterTasks(filter) {
    currentFilter = filter;
    document.querySelectorAll('.filters button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`button[onclick="filterTasks('${filter}')"]`).classList.add('active');
    renderTasks();
}

function clearCompleted() {
    tasks = tasks.filter(t => !t.completed);
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
    
    let filteredTasks = tasks;
    if (currentFilter === 'active') {
        filteredTasks = tasks.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(t => t.completed);
    }
    
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input type="checkbox" 
                   ${task.completed ? 'checked' : ''} 
                   onchange="toggleTask(${task.id})">
            <span>${task.text}</span>
            <button onclick="deleteTask(${task.id})">Xóa</button>
        `;
        list.appendChild(li);
    });
    
    updateTaskCount();
}

function updateTaskCount() {
    const count = tasks.filter(t => !t.completed).length;
    document.getElementById('taskCount').textContent = 
        `${count} công việc chưa hoàn thành`;
}

// Khởi tạo
renderTasks(); 