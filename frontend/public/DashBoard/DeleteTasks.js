// Store the task ID in the modal when delete icon is clicked
function setTaskToDelete(IdFromDisplayFile) {
    document.getElementById("taskIdToDelete").value = IdFromDisplayFile;
}


async function confirmDeleteTask(){
    // console.log("Deleting task with ID:", taskId); debugging

    const taskId = document.getElementById("taskIdToDelete").value;

    try{
        const response = await fetch(`https://task-manager-backend-one-ruddy.vercel.app/api/deleteTask/${taskId}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const tasks = await response.json();

        if (response.ok) {
            alert("THE TASK HAS BEEN DELETED!!");
            document.getElementById("DeletModal").querySelector(".btn-close").click();
            fetchTasks();
            location.reload();
        } else {
            console.error("Error fetching tasks:", tasks.message);
        }
    }catch(err){
        console.error("DELETE ERROR : "+err);
    }
}
