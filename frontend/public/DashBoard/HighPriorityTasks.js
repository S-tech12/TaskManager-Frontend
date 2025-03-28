const HighPriority = document.getElementById("HighPriority");

HighPriority.addEventListener("click",DisplayHighPriority);


async function DisplayHighPriority(){
    try{
        const response = await fetch("https://task-manager-backend-one-ruddy.vercel.app/api/HighPriorityTasks" ,{
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
