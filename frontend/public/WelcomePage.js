let container=document.querySelector(".container");

setTimeout(()=>{
    container.classList.add("remove");

    setTimeout(()=>{
        container.remove();
        window.location.href = "SignUp Folder/SignUp.html";
    },2000);
},5000);