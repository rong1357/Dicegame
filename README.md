<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="CSS signup.css">
  <title>Signup Form</title>
</head>
<body>

  <div class="signup-container">
    <h2>Sign Up</h2>
    <form id="signup-form">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>

      <button type="button" onclick="validateForm()">Sign Up</button>
    </form>
  </div>
<script src="https://smtpjs.com/v3/smtp.js">
</script>
  <script src="Js signup.js"></script>
</body>
</html>
