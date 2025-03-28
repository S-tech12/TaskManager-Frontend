const MediumLink = document.getElementById("MediumLink");

MediumLink.addEventListener("click",DisplayMedium);


async function DisplayMedium(){
    try{
        const response = await fetch("http://localhost:3000/MediumTasks" ,{
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