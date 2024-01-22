<form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar" />
  </div>

  <div class="container">
    <label for="usernaame">
      <b>Username</b>
    </label>
    <input type="text" placeholder="Enter Username" name="username" required />

    <label for="password">
      <b>Password</b>
    </label>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember" /> Remember me
    </label>
  </div>

  <div class="container" style="background-color: f1f1f1;">
    <button type="button" class="cancelbutton">
      Cancel
    </button>
    <span class="password">
      Forgot<a href="#">password?</a>
    </span>
  </div>
</form>;

export default LoginForm;
