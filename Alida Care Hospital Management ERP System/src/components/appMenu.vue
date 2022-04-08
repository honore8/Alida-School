<template>
  <header class="header">
    <!-- Logo -->
    <a href="#" class="logo">AC</a>

    <!-- Hamburger icon -->
    <input class="side-menu" type="checkbox" id="side-menu" />
    <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>

    <!-- Menu -->
    <nav class="nav">
      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Dev</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main content -->
  <main>
    <article>
      <h1 class="subhead">Alida Care ERP System</h1>
      <br/>
    </article>
  </main>
</template>

<script>
export default {
  name: "appMenu",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

:root {
  --white: #f9f9f9;
  --blue: rgb(0, 153, 255);
  --grey: #85888c;
}

/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.subhead {
  text-align: center;
}

body {
  background-color: var(--white);
  font-family: "Poppins", sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

/* Header */
.header {
  background-color: var(--blue);
  box-shadow: 1px 1px 5px 0px var(--grey);
  position: sticky;
  top: 0;
  width: 100%;
}

/* Logo */
.logo {
  display: inline-block;
  color: var(--white);
  font-size: 60px;
  margin-left: 10px;
}

/* Nav menu */
.nav {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: var(--blue);
  overflow: hidden;
}

.menu a {
  display: block;
  padding: 30px;
  color: var(--white);
}

.menu a:hover {
  background-color: var(--grey);
}

.nav {
  max-height: 0;
  transition: max-height 0.5s ease-out;
}

/* Menu Icon */

.hamb {
  cursor: pointer;
  float: right;
  padding: 40px 20px;
}

.hamb-line {
  background: var(--white);
  display: block;
  height: 2px;
  position: relative;
  width: 24px;
}

.hamb-line::before,
.hamb-line::after {
  background: var(--white);
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.hamb-line::before {
  top: 5px;
}

.hamb-line::after {
  top: -5px;
}

.side-menu {
  display: none;
}

/* Toggle menu icon */

.side-menu:checked ~ nav {
  max-height: 100%;
}

.side-menu:checked ~ .hamb .hamb-line {
  background: transparent;
}

.side-menu:checked ~ .hamb .hamb-line::before {
  transform: rotate(-45deg);
  top: 0;
}

.side-menu:checked ~ .hamb .hamb-line::after {
  transform: rotate(45deg);
  top: 0;
}

/* Responsiveness */

@media (min-width: 768px) {
  .nav {
    max-height: none;
    top: 0;
    position: relative;
    float: right;
    width: fit-content;
  }

  .menu li {
    float: left;
  }

  .menu a:hover {
    background-color: transparent;
    color: var(--grey);
  }

  .hamb {
    display: none;
  }
}
</style>