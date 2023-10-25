
function PrepareForLogin(){

    let username = document.querySelector(".username-field").value;
    let password = document.querySelector(".password-field").value;

    login(username, password).then((success) => {
        // show indication of successful login
        // re-route to correct page
        console.log(success)

        if( success.id != null ){
            console.log(success.id)

            // TODO: Security
            // TODO: More validation checks
            // TODO: More Error messages
            // TODO: User roles direct to different pages

            // TODO: wait timer
            window.location.href = "./signup.php";
        }
        else if( success.error == "Login Details Did Not Match" ){
            console.log("You have entered the wrong details")
        }

    })
    .catch((error) => {
        // show indication of wrong login
        console.log(error);
    });

}

async function login(username, password){

    return new Promise((resolve,reject) => {

        let params = `username=${username}&&password=${password}`;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "include/login.process.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onload = function(){
            if( this.status == 200 ){
                let loginResult = JSON.parse(this.responseText);
                resolve(loginResult)
            }
            else{
                reject("Error Connecting To Server");
            }
        }

        xhr.send(params);

    });
}
