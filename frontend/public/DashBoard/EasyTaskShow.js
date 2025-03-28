const EasyLink = document.getElementById("EasyLink");

EasyLink.addEventListener("click",DisplayEasy);


async function DisplayEasy(){
    try{
        const response = await fetch("http://localhost:3000/EasyTasks" ,{
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