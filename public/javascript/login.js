
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.username.value;
    const password = loginForm.password.value;
    const userType= loginForm.User.value;
    console.log(userType)
    if(userType=="faculty")
    {
      firebase.auth().signInWithEmailAndPassword(email, password).then((success)=>
      {
        alert("You have successfully logged in.");
        location.replace("www.google.com")
      }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode+" "+errorMessage)
          // ...
        });
    }
    else{
      if(email=="admin"&& password=="123456")
      {
        alert("You have successfully logged in.");
        location.replace("www.wikipedia.com")
      }
    }
    

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        } else {
          // No user is signed in.
        }
      });

    /*if (email === "user" && password === "user") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
          firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
             // Handle Errors here.
             var errorCode = error.code;
             var errorMessage = error.message;
             // ...
           });
        loginErrorMsg.style.opacity = 1;
    }*/
})


// const login=document.querySelector('[login]')

// login.addEventListener('click',() =>{
//   const email=document.querySelector('[username]')
//   const password=document.querySelector('[password]')
//   console.log("Email :",email)
//   console.log("Password :",password)
  
//   /*firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });*/
// })




// /*firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
// });*/