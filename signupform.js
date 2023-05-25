function passwordConfirmation() {
            var password = document.getElementById("pass").value;
            var confirmPassword = document.getElementById("confirmpass").value;
           
            if (password == "") {
                alert("Error: The password field is Empty.");
            } else if (password == confirmPassword) {
                alert("Logged In");
            } else {
                alert("Please make sure your passwords match.")
            }
}