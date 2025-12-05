const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filter = document.getElementById("filter");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    taskList.innerHTML = "";
    let selected = filter.value;

    tasks.forEach((task, index) => {
        if (selected !== "all" && task.status !== selected) return;

        let li = document.createElement("li");
        li.className = task.status === "completed" ? "completed" : "";

        li.innerHTML = `
            ${task.text}
            <div>
                <button onclick="toggleStatus(${index})">✔</button>
                <button onclick="deleteTask(${index})">🗑</button>
            </div>
        `;

        taskList.appendChild(li);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.onclick = () => {
    if (taskInput.value.trim() === "") return;

    tasks.push({ text: taskInput.value, status: "pending" });
    taskInput.value = "";
    renderTasks();
};

function toggleStatus(i) {
    tasks[i].status = tasks[i].status === "pending" ? "completed" : "pending";
    renderTasks();
}

function deleteTask(i) {
    tasks.splice(i, 1);
    renderTasks();
}

filter.onchange = renderTasks;

renderTasks();
