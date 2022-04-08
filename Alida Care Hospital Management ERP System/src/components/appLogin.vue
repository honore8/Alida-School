<template>
  <div class="container">
    <center>
      <div class="layout">
      <p class="col col-main">
        <strong><img src="../assets/health.jpg" class="heroimg" /></strong
        ><br />
      </p>
        
      <div class="col col-complementary" role="complementary">
        <strong>Login</strong><br />
        <form action="#">
          <input type="text" name="username" id="name" placeholder="User Name"> <br>
          <input type="password" name="password" id="password" placeholder="Password"> <br>
          <input type="checkbox" name="checkbox" id="checkbox"> Remember Me <br>
          <button type="submit">LogIn</button>
      </form>
      </div>
    </div> <br><br>
          <span class="footnote">Developed With 💛 By Alida School</span>
    </center>
  </div>
</template>

<script>
export default {
  name: "appLogin",
};
</script>

<style>
/* Layout: */

.col-main {
  flex: 1;
}

.footnote{
  font-family: cursive;
}
.heroimg {
  align-self: center;
  height: 30vh;
  width: 50vh;
}
.col-complementary {
  flex: 1;
}

input[type=text], select {
    width: 30%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=password], select {
    width: 30%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button[type=submit] {
    width: 20%;
    background-color: black;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}


/* Responsive: */

@media only screen and (min-width: 640px) {
  .layout {
    display: flex;
  }
}

/* etc */

body {
  margin: 1.5em;
}

.container {
  max-width: 60em;
  margin-right: auto;
  margin-left: auto;
}

.col {
  padding: 1em;
  margin: 0 2px 2px 0;
  background: #ccc;
}
</style>