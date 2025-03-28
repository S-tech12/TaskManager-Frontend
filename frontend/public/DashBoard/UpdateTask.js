async function updateTask() {
    const taskId = document.getElementById("taskIdToUpdate").value;

    const date = new Date();
    const today = date.toISOString().split("T")[0];

    const Task_Title = document.getElementById("Task_Title_Update_Modal").value;
    const Task_Description = document.getElementById("Task_Description_Update_Modal").value;
    const TitleEndDate = document.getElementById("TitleEndDate_Update_Modal").value;
    const Task_Difficulty = document.getElementById("Task_Difficulty_Update_Modal").value;
    const Task_Priority = document.getElementById("Task_Priority_Update_Modal").value;

    const updatedTask = {
        TaskTitle: Task_Title,
        TaskDescription: Task_Description,
        TaskEndDate: TitleEndDate,
        TaskDifficulty: Task_Difficulty,
        TaskPriority: Task_Priority 
    };
    
    if(TitleEndDate < today){
        alert("Please enter the valid date , Past dates are not allowed!");
        return;
    }
    
    if (!Task_Title || !Task_Description || !TitleEndDate || Task_Difficulty === "Select Difficulty" || Task_Priority === "Select Priority") {
        alert("Please fill in all fields!");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/updateTask/${taskId}`, {
            method: "PUT",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTask)
        });

        const result = await response.json();
        console.log(result);
        if (response.ok) {
            alert(result.message);
            fetchTasks(); // Refresh task list
            location.reload();
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("Error updating task:", error);
    }
}