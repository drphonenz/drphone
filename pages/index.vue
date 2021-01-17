<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 banner d-flex flex-column align-items-center justify-content-center text-center p-5">
          <h1 class="display-3 text-uppercase font-weight-bold text-white">
            Mobile Phone Repair est. 2015
          </h1>
          <a class="text-white" href="http://g.page/drphonenz" target="_blank" rel="noopener">
            <p class="text-white">
              1 Huron Street, Takapuna, Auckland 0622
            </p>
          </a>
          <a class="text-white" href="tel:0800429429" target="_self" rel="noopener">
            0800 429 429
          </a>
          <h1 class="display-2 text-uppercase font-weight-bold text-white">
            We have moved to Takapuna
          </h1>
        </div>
      </div>
    </div>
    <div class="container-fluid about">
      <div class="container">
        <div class="row py-5">
          <div class="col-lg-4 d-none d-lg-flex align-items-center justify-content-center">
            <img class="img-fluid" src="~/assets/images/logo.jpg" alt="Dr Phone Repair">
          </div>
          <div class="col-lg-8 p-5">
            <h1 class="text-white pb-3">
              About us
            </h1>
            <p class="text-white text-justify">
              Started in 2015, we have been in mobile phone repair business on the same location. We are the leading independent mobile phone, laptop and tablets repair centre. We also cater home content insurance claim or travel insurance claim for your expensive smartphones. Other than that, we provide services such as network unlock, data recovery, operation system update and more.
            </p>
            <p class="text-white text-justify">
              We are a GST registered company since 2015. We stock mobile phone casings, tempered glasses, wall chargers, USB charging cables, portable battery banks, USB memory drives and more for our clients to meet their busy techie lifestyle.
            </p>
            <p class="text-white text-justify">
              You can see the feedback of our clients on Google Review <a href="https://www.google.co.nz/search?q=dr+phone+repair#lrd=0x6d0d47fb1a45a5b5:0xab7e635f5751b66a,1,,," target="_blank" rel="noopener">here</a>. Give us a call today and we promise not to waste your time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .banner {
    background: linear-gradient(0deg, rgba(52, 58, 64, 0.8), rgba(52, 58, 64, 0.8)), url('~@/assets/images/banner-01.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: 70vh;

    p,
    a {
      font-size: rfs(30px);
    }
  }

  .about {
    background-color: #3b5998;

    @media (max-width: 991px) {
      background: linear-gradient(0deg, rgba(59, 89, 152, 0.9), rgba(59, 89, 152, 0.9)), url('~@/assets/images/logo.jpg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
    }
  }
</style>
