const LogoutButton = document.getElementById("LogoutButton");


LogoutButton.addEventListener("click", logout);


async function logout(){
    try{
        const response = await fetch("http://localhost:3000/Logout",{
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = response.json();

        if(response.ok){
            alert("Logged Out!!");
            window.location.href="../Login Folder/Login.html";
        }else{
            alert("Error to logging out!!");
        }
    }catch(err){
        console.log("error" ,err);
    }
}