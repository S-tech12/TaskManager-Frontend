const MediumLink = document.getElementById("MediumLink");

MediumLink.addEventListener("click",DisplayMedium);


async function DisplayMedium(){
    try{
        const response = await fetch("https://task-manager-backend-one-ruddy.vercel.app/api/MediumTasks" ,{
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
