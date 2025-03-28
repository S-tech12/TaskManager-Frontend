const LessPriority = document.getElementById("LessPriority");

LessPriority.addEventListener("click",DisplayLowPriority);


async function DisplayLowPriority(){
    try{
        const response = await fetch("http://localhost:3000/LowPriorityTasks" ,{
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