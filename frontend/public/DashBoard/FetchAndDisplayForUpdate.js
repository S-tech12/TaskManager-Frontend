async function fetchTaskForUpdate(taskId){
    try{
        const response = await fetch(`https://task-manager-backend-one-ruddy.vercel.app/api/getTask/${taskId}`, {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" }
        });

        const task = await response.json();

        if (response.ok) {
            document.getElementById("Task_Title_Update_Modal").value = task[0].TaskTitle;
            document.getElementById("Task_Description_Update_Modal").value = task[0].TaskDescription;
            document.getElementById("Task_Difficulty_Update_Modal").value = task[0].TaskDifficulty;
            document.getElementById("Task_Priority_Update_Modal").value = task[0].TaskPriority;
            document.getElementById("taskIdToUpdate").value = task[0]._id;
        }else {
            alert("Error fetching task data.");
        }
    }catch(err){
        console.error("Error fetching task:" , err);
    }
}
