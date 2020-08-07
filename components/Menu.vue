<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">
      <div class="d-flex flex-row align-items-center">
        <img class="img-fluid mr-3 d-none d-lg-block" src="~/assets/images/logo.jpg" alt="Dr Phone Repair">
        <div>Dr Phone Repair</div>
      </div>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"/>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/services">
          Repair Services
        </b-nav-item>
        <b-nav-item to="/contact">
          Contact us
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss" scoped>
  .navbar {
    background-color: #3b5998 !important;

    .navbar-brand {
      font-family: 'Sarpanch', sans-serif;
      font-weight: 600;
      font-style: italic;

      img {
        height: 64px;
        width: 64px;
      }
    }

    .nav-link {
      transition: all 0.5s ease;
      color: white;
      text-transform: uppercase;
      font-weight: bold;
    }

    .navbar-toggler {
      border: none;
      outline: none;
    }
  }
</style>
