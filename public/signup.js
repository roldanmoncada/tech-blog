const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#usernameInput"); 
    // ^^ 'input[name="post-id"]' might be the necessary parameter passed into the querySelector. Currently think it's only for a new post and for a comment. Worth a google. could just be a handlebars thing. 
    const emailEl = document.querySelector("#emailInput")
    const passwordEl = document.querySelector("#passwordInput");
    fetch("/api/user/login", {
      method: "post",
      body: JSON.stringify({
        username: usernameEl.value,
        email: emailEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
  };
  
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);