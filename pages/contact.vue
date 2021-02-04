<template>
  <div>
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0&appId=398069564204527&autoLogAppEvents=1"></script>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 p-0 contact">
          <no-ssr>
            <carousel
              :items="3"
              :autoplay="true"
              :autoplay-timeout="3000"
              :loop="true"
              :nav="false"
              :dots="false"
              :responsive="{
                0:{
                  items: 1
                },
                992:{
                  items: 5
                }
              }"
            >
              <img class="img-fluid" src="~/assets/images/photos/1.jpg" alt="Storefront Photo 1">
              <img class="img-fluid" src="~/assets/images/photos/2.jpg" alt="Storefront Photo 2">
              <img class="img-fluid" src="~/assets/images/photos/3.jpg" alt="Storefront Photo 3">
              <img class="img-fluid" src="~/assets/images/photos/4.jpg" alt="Storefront Photo 4">
              <img class="img-fluid" src="~/assets/images/photos/5.jpg" alt="Storefront Photo 5">
              <img class="img-fluid" src="~/assets/images/photos/6.jpg" alt="Storefront Photo 6">
              <img class="img-fluid" src="~/assets/images/photos/7.jpg" alt="Storefront Photo 7">
              <img class="img-fluid" src="~/assets/images/photos/8.jpg" alt="Storefront Photo 8">
              <img class="img-fluid" src="~/assets/images/photos/9.jpg" alt="Storefront Photo 9">
            </carousel>
          </no-ssr>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 pt-5 pb-3">
          <h1 class="text-center">
            Contact Us
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <p>
            We are a trusted team of professionals in the field of mobile phone and computer repair with over 15 years
            of total hands-on experience. What if we tell you the cheapest and fastest mobile phone repair is not always
            the best? Contact us or drop by our repair shop today to discuss your needs, we will give you our expert
            opinion and straight forward solutions.
          </p>
        </div>
      </div>
      <div class="row py-5">
        <div class="col-lg-6">
          <ul class="list-unstyled pb-5">
            <li>
              <p>
                <font-awesome-icon icon="phone" class="mr-3"/>
                <a href="tel:093651212" target="_self" rel="noopener">09 365 1122</a>
              </p>
            </li>
            <li>
              <p>
                <font-awesome-icon icon="phone" class="mr-3"/>
                <a href="tel:021365377" target="_self" rel="noopener">021 365 377</a>
              </p>
            </li>
            <li>
              <p>
                <font-awesome-icon icon="envelope" class="mr-3"/>
                <a href="mailto:drphonenz@gmail.com" target="_self" rel="noopener">drphonenz@gmail.com</a>
              </p>
            </li>
            <li>
              <p>
                <font-awesome-icon icon="envelope" class="mr-3"/>
                <a href="https://www.drphone.co.nz" target="_self" rel="noopener">www.drphone.co.nz</a>
              </p>
            </li>
            <li>
              <p>
                <font-awesome-icon icon="clock" class="mr-3"/>
                Monday to Friday, 09:00AM &mdash; 05:00PM
              </p>
            </li>
            <li>
              <p>
                <font-awesome-icon icon="clock" class="mr-3"/>
                Saturday, 09:00AM &mdash; 02:00PM
              </p>
            </li>
            <li>
              <p>
                <font-awesome-icon icon="clock" class="mr-3"/>
                Sunday &amp; Public Holidays, Closed
              </p>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 text-center">
          <div
            class="fb-page"
            data-href="https://www.facebook.com/drphonenz/"
            data-tabs="timeline"
            data-width=""
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote cite="https://www.facebook.com/drphonenz/" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/drphonenz" target="_self" rel="noopener">Dr Phone Repair</a>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .contact {
    img {
      height: 400px;
    }
  }
</style>
