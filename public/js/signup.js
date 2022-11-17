async function signupFormHandler(event) {
  event.preventDefault();

  var newUsername = document.getElementById("username-signup");
  var newPassword = document.getElementById("password-signup");

  if (username && password) {
      const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            newUsername,
            newUsername
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      }
  }
}
