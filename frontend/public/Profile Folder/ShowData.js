let ProfileUsername = document.getElementById("ProfileUsername");
let ProfileFullname = document.getElementById("ProfileFullname");
let ProfileEmailid = document.getElementById("ProfileEmailid");
let editFullName = document.getElementById("editFullName");
let editEmail = document.getElementById("editEmail");
let editUsername = document.getElementById("editUsername");
let editPassword = document.getElementById("editPassword");
let confirmEditPassword = document.getElementById("confirmEditPassword");

document.addEventListener("DOMContentLoaded",showData);

async function showData() {
    try {
        const response = await fetch("https://task-manager-backend-one-ruddy.vercel.app/api/getProfileData", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (response.ok) {
            ProfileUsername.innerHTML = `Welcome ${data.SignUpUsername}`;
            ProfileFullname.innerHTML = `Fullname : ${data.SignUpFullName}`;
            ProfileEmailid.innerHTML = `Email-Id : ${data.SignUpEmail}`;
        } else {
            ProfileUsername.innerHTML = "undefined";
            ProfileFullname.innerHTML = "undefined";
            ProfileEmailid.innerHTML = "undefined";
        }
    } catch (err) {
        console.error("Fetch error:", error);
    }
}


const editProfileButton = document.getElementById("editProfileButton");
editProfileButton.addEventListener("click", FetchTheData);

async function FetchTheData() {
    try {
        const response = await fetch("https://task-manager-backend-one-ruddy.vercel.app/api/getProfileData", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (response.ok) {
            editFullName.value = data.SignUpFullName;
            editEmail.value = data.SignUpEmail;
            editUsername.value = data.SignUpUsername;
        }
    } catch (err) {
        console.error("Fetch error:", error);
    }
}


const SaveChangesButton = document.getElementById("SaveChangesButton");
SaveChangesButton.addEventListener("click", updateData);

async function updateData() {

    if (editPassword.value != confirmEditPassword.value) {
        alert("BOTH THE PASSWORD IS NOT SAME!!");
        return;
    }

    if (!editFullName.value || !editUsername.value || !editEmail.value || !editPassword.value || !confirmEditPassword.value) {
        alert("PLEASE FILL ALL THE FIELD!!");
        return;
    }
    try {
        const response = await fetch("http://localhost:3000/updateProfileData", {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                editFullName: editFullName.value,
                editEmail: editEmail.value,
                editUsername: editUsername.value,
                editPassword: editPassword.value
            })
        })

        const result = await response.json();
        
        if (response.ok) {
            alert("Profile updated successfully!");
            document.getElementById("closeModalButton").click();
            showData(); // Refresh profile data
        } else {
            alert(result.message);
        }
    }catch(err){
        console.error("Error updating profile:", err);
    }
}
