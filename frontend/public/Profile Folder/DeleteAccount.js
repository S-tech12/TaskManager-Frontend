const deleteAccountButton = document.getElementById("deleteAccountButton");


deleteAccountButton.addEventListener("click", DeleteAccount);


async function DeleteAccount(){
    try{
        const response = await fetch("http://localhost:3000/DeleteAccount",{
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = response.json();

        if(response.ok){
            alert("Account Has been Deleted!!");
            window.location.href="../index.html";
        }else{
            alert("Error to deleting account!!");
        }
    }catch(err){
        console.log("error" ,err);
    }
}