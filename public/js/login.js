

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
