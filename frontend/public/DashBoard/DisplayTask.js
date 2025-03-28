document.addEventListener("DOMContentLoaded",fetchTasks);

async function fetchTasks(){
    try {
        const response = await fetch("http://localhost:3000/getTasks", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const tasks = await response.json();

        if (response.ok) {
            displayTasks(tasks);
        } else {
            console.error("Error fetching tasks:", tasks.message);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

async function displayTasks(tasks) {
    const tasksContainer = document.querySelector(".TasksContainer");
    tasksContainer.innerHTML = "";  // Clear existing content

    // Sort tasks in ascending order of end date
    tasks.sort((a, b) => new Date(a.TaskEndDate) - new Date(b.TaskEndDate));
    
    const today = new Date();

    tasks.forEach(task => {
        const taskCard = document.createElement("div");
        taskCard.classList.add("card");

        const taskEndDate = new Date(task.TaskEndDate);
        const timeDiff = taskEndDate - today;
        const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        // Set opacity if the task is overdue
        if (daysRemaining <= 0) {
            taskCard.style.opacity = "0.5";
        }

        // Check if the task is within 3 days of the deadline
        let warningMessage = "";
        if (daysRemaining > 0 && daysRemaining <= 3) {
            warningMessage = `<p style="font-weight: bold; color: red;">⚠️ You have to complete this task very soon!</p>`;
        }

        let PriorityColor = "";
        if (task.TaskPriority === "Low") {
            PriorityColor = "#16C47F";
        } else if (task.TaskPriority === "Medium") {
            PriorityColor = "#FFD65A";
        } else {
            PriorityColor = "#F93827";
        }

        let DifficultyColor = "";
        if (task.TaskDifficulty === "Easy") {
            DifficultyColor = "#16C47F";
        } else if (task.TaskDifficulty === "Medium") {
            DifficultyColor = "#FFD65A";
        } else {
            DifficultyColor = "#FF204E";
        }

        taskCard.innerHTML = `
            <div class="card-header">
                <h4>${task.TaskTitle}</h4>
            </div>
            <br>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>${task.TaskDescription}</p>
                    ${warningMessage}
                    <footer class="blockquote-footer">End Date: ${task.TaskEndDate}</footer>
                </blockquote>
            </div><br>
            <div class="card-footer">
                <div class="TaskDifficulty">
                    <p style="color: ${DifficultyColor}; font-weight: bold;">${task.TaskDifficulty}</p>
                </div>
                <div class="TaskPriority">
                    <p style="color: ${PriorityColor}; font-weight: bold;">${task.TaskPriority}</p>
                </div>
                <div class="UpdateDeleteIcons">
                    <h5 data-bs-toggle="modal" data-bs-target="#UpdateModal" onclick="fetchTaskForUpdate('${task._id}')">
                        <i class="bi bi-pencil-fill"></i>
                    </h5>
                    <h5 data-bs-toggle="modal"
                        data-bs-target="#DeletModal" onclick="setTaskToDelete('${task._id}')">
                        <i class="bi bi-trash"></i>
                    </h5>
                </div>
            </div>
        `;
        tasksContainer.appendChild(taskCard);
    });
}
