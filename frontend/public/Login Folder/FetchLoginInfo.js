// Attach an event listener to the login button
const LoginButton = document.getElementById("LoginButton");
LoginButton.addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get the username and password values from the input fields
    const Username = document.getElementById("FullName").value.trim();
    const Password = document.getElementById("Password1").value.trim();

    // Check if fields are empty
    if (!Username || !Password) {
        alert("Please fill in both fields!");
        return;
    }

    try {
        // Send a POST request to the LoginCheck route
        const response = await fetch("https://task-manager-backend-one-ruddy.vercel.app/api/LoginCheck", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Username, Password }),
            credentials : "include"
        });

        // Parse the JSON response
        const result = await response.json();

        if (response.ok) {
            // Login successful
            alert(result.message);

            document.cookie = `User_cookie=${result.User_cookie}; path=/;`;
            
            // Redirect to the main page
            window.location.href = "../DashBoard/MainPage.html";
        } else {
            // Login failed
            alert(result.message);
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again later.");
    }
});
