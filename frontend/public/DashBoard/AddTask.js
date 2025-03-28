const AddTaskButton = document.getElementById("AddTaskButton");

AddTaskButton.addEventListener("click", async (e)=>{
    const date = new Date();
    const today = date.toISOString().split("T")[0];

    const Task_Title = document.getElementById("Task_Title").value.trim();
    const Task_Description = document.getElementById("Task_Description").value.trim();
    const TitleEndDate = document.getElementById("TitleEndDate").value;
    const Task_Difficulty = document.getElementById("Task_Difficulty").value;
    const Task_Priority = document.getElementById("Task_Priority").value;
    
    if (!Task_Title || !Task_Description || !TitleEndDate || Task_Difficulty === "Select Difficulty" || Task_Priority === "Select Priority") {
        alert("Please fill in all fields!");
        return;
    }

    if(TitleEndDate < today){
        alert("Please enter the valid date , Past dates are not allowed!");
        return;
    }

    const response = await fetch("http://localhost:3000/addTask", {
        method: "POST",
        credentials: "include",  // Important for cookies
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ Task_Title, Task_Description, TitleEndDate, Task_Difficulty, Task_Priority })
    });

    const result = await response.json();

    if(response.ok){
        alert("Task added successfully!");
        document.getElementById("exampleModal").querySelector(".btn-close").click();
        fetchTasks();
        location.reload();
    }else {
        alert("Error adding task: " + result.message);
    }

})