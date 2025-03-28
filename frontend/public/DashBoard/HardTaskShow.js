const HardLink = document.getElementById("HardLink");

HardLink.addEventListener("click",DisplayHard);


async function DisplayHard(){
    try{
        const response = await fetch("https://task-manager-backend-one-ruddy.vercel.app/api/HardTasks" ,{
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const tasks = await response.json();

        if(response.ok){
            displayTasks(tasks);
        }else{
            console.error("Error fetching tasks:", tasks.message);
        }
    }catch(err){
        console.error("Fetch error:", error);
    }
}
