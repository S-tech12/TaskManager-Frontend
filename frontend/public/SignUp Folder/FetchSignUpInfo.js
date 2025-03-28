let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click",async(e)=>{
    e.preventDefault();

    let FullName = document.getElementById("FullName").value.trim();
    let UserEmail = document.getElementById("UserEmail").value.trim();
    let UserName = document.getElementById("UserName").value.trim();
    let Password1 = document.getElementById("Password1").value.trim();
    let Password2 = document.getElementById("Password2").value.trim();

    if(!FullName || !UserEmail || !UserName || !Password1 || !Password2){
        alert("PLEASE FILL ALL THE FIELD!");
        return;
    }
    
    if(Password1 != Password2){
        alert("BOTH PASSWORDS ARE NOT MATCHING!!");
        return;
    }
    try{
        const response = await fetch("https://task-manager-backend-one-ruddy.vercel.app/api/SignUpCheck", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ FullName , UserEmail , UserName, Password1 })
        })

        const result = await response.json();
        
        if(response.ok){
            alert(result.message);
            window.location.href = "../Login Folder/Login.html";
        }else{
            alert(result.message);
        }
    }catch(err){
        alert(response.message);
    }
})
