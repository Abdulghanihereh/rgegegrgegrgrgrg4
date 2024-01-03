document.querySelector(".button")
.addEventListener("click" , function(){
    email  = document.getElementById("email").value;
    password = document.getElementById("user_password").value;
    if(email == "admin@admin.com")
    {
        document.getElementById('text').innerHTML =   "Welcome";
        document.getElementById('text').style.color = 'green';
        Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    }
    else{
        document.getElementById('text').innerHTML = "error , your info is fault"
        document.getElementById('text').style.color = "red";
        Swal.fire({
            title: 'Error!',
            text: 'your info is wrong',
            icon: 'error',
            confirmButtonText: 'cancel'
          })
    }
})
