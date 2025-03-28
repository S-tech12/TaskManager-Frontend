const MediumPriority = document.getElementById("MediumPriority");

MediumPriority.addEventListener("click",DisplayMediumPriority);


async function DisplayMediumPriority(){
    try{
        const response = await fetch("http://localhost:3000/MediumPriorityTasks" ,{
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