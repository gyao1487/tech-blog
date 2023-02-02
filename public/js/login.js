// const { default: axios } = require("axios");

// const email = document.getElementById("email-login").value.trim();
// const password = document.getElementById("password-login").value.trim();
// // const loginButton = document.getElementById("login-submit");
// const loginForm = document.getElementById("login-Form");

const loginHandler = async event => {
  event.preventDefault();

  const email = document.getElementById("email-login").value.trim();
  const password = document.getElementById("password-login").value.trim();
  // const loginButton = document.getElementById("login-submit");

  if (email && password) {
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to log in. Please try again.");
    }
  }
};

document
.getElementById("login-form")
.addEventListener("submit", loginHandler);

//   loginForm.addEventListener('submit', loginHandler)

// const submitLogin = (data) => {
//     axios
//         .post("/login", data)
//         .then ((results) => {console.log(results.data);
//         document.location.replace("/dashboard");
//     })
//     .catch((error) => {
//         alert("There was a problem with logging in. Please try again.");
//         console.log(error)
//     })
// }

// loginButton.addEventListener("click", async (event) =>{
//     event.preventDefault();
//     const data = { name: username.value,
//         password: password.value
//     }
//     submitLogin(data);
// })
