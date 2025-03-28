const LessPriority = document.getElementById("LessPriority");

LessPriority.addEventListener("click",DisplayLowPriority);


async function DisplayLowPriority(){
    try{
        const response = await fetch("https://task-manager-backend-one-ruddy.vercel.app/api/LowPriorityTasks" ,{
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const tasks = await response.json();
        // console.log(tasks);
        if(response.ok){
            displayTasks(tasks);
        }else{
            console.error("Error fetching tasks:", tasks.message);
        }
    }catch(err){
        console.error("Fetch error:", error);
    }
}
